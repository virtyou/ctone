import copy
from cantools.util import log, read
from model import db, CTUser, Part, Thing, Person, Room, Asset
from templater.defaults import ASSETS, BASE, HEADGEAR, LIGHTS
from templater import generators

THINGZ = {}
LOADED_ASSETS = {}
for item in Thing.query().all():
    THINGZ[item.name] = item
for item in Asset.query().all():
    LOADED_ASSETS[item.identifier or item.name] = item

def asset(name, path=None, variety=None, owner=None):
    path = path or ASSETS[name]
    log("asset: %s (%s)"%(name, path), 2)
    # this caching stuff only works if "name" is the same
    # otherwise, it won't reattach right
    a = LOADED_ASSETS.get(path)
    if not a:
        log("asset not found! creating...", 3)
        a = LOADED_ASSETS[path] = Asset()
        a.owner = owner
        a.name = name
        a.item = read(path)
        a.identifier = path
        a.variety = variety or name.split("_")[-1]
        a.put()
#    elif name != a.name:
#        error("same blob, different name (%s is not %s) -- nope!"%(name, a.name))
    return a.key

def furnishing(name, owner, opts):
    log("furnishing: %s"%(name,), 1)
    f = Thing()
    f.owner = owner
    f.kind = "furnishing"
    f.name = name
    f.opts = opts
    f.put()
    return f

def room(name, owner):
    log("room: %s"%(name,), 1)
    r = Room()
    r.name = name
    r.opts = { "environment": name, "lights": LIGHTS }
    r.owner = owner
    r.put()
    return r

def user(name, email, admin=False, lastName="zero"):
    log("user: %s, %s"%(name, email), 1)
    u = CTUser()
    u.active = True
    u.admin = admin
    u.email = email
    u.firstName = name
    u.lastName = lastName
    u.put()
    u.password = db.hashpass("password", u.created)
    u.put()
    return u

def body(name, owner_not_used=None): # from template -- depped-ish
    template = "templates.one.body.%s"%(name,)
    log("body (templated): %s"%(template,), 1)
    bod = Part()
    bod.template = template
    bod.assets = map(asset, ASSETS.keys())
    bod.put()
    return bod

def thing(obj, owner):
    log("thing: %s"%(obj["name"],), 2)
    t = THINGZ.get(obj["name"])
    if not t:
        t = THINGZ[obj["name"]] = Thing()
        t.owner = owner
        for prop in ["texture", "stripset", "morphStack", "name", "custom", "kind"]:
            if prop in obj:
                setattr(t, prop, obj.pop(prop))
        t.material = obj.pop("material", {})
        t.opts = obj
        t.put()
    return t

def part(obj, owner, parent=None):
    log("part: %s"%(obj["name"],), 2)
    subz = obj.pop("parts", [])
    par = Part()
    par.base = thing(obj, owner).key
    par.parent = parent
    par.put()
    for sub in subz:
        part(sub, owner, par.key)
    return par

def gear(name, owner):
    gz = copy.deepcopy(HEADGEAR)
    for g in gz:
        if g["custom"]:
            g["custom"] = read(g["custom"])
        for prop in ["texture", "stripset"]:
            if prop in g:
                setattr(g, prop, asset(prop, g[prop], owner=owner))
    return gz

def parts(name, owner):
    log("body (parts): %s"%(name,), 1)
    opts = BASE.copy()
    for key in ASSETS:
        opts[key] = asset(key)
    return part(generators.body(opts, gear(name, owner)), owner)

def person(name, owner=None, responses={}, voice="Joanna", admin=False, email_domain=None, body_generator=parts):
    log("person: %s"%(name,))
    p = Person()
    p.owner = owner or user(name, "%s@%s"%(name, email_domain), admin).key
    p.name = name
    p.voice = voice
    p.responses = responses
    p.body = body_generator(name, p.owner).key
    p.put()
    return p

