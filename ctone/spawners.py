import copy, os, json
from datetime import datetime
from cantools.util import rm, log, read, write, error
from cantools import config
from model import db, Member, Part, Thing, Person, Room, Asset
from .templater.defaults import ASSETS, BASE, HEADGEAR, LIGHTS, VIBES
from .templater import generators
from .convert_obj_three import convert_ascii

THINGZ = {}
LOADED_ASSETS = {}
for item in Thing.query().all():
    THINGZ[item.name] = item
for item in Asset.query().all():
    LOADED_ASSETS[item.item.urlsafe()] = LOADED_ASSETS[item.identifier] = item

def exists(file_data, exalt=Asset):
    log("checking file uniqueness", 4)
    return exalt.query(exalt.item == file_data).get() or exalt != Asset and Asset.query(Asset.item == file_data).get()

    # below disabled..... above should probs be revised (may be slow...)
    for f in [os.path.join(config.db.blob, p) for p in os.listdir(config.db.blob)]:
        if os.path.isfile(f) and file_data == read(f, binary=True):
            u = "/" + f;
#            return LOADED_ASSETS.get(u) or len(list(filter(lambda x : x.path() == u,
#                exalt.query().all())))
#            return Asset.query(Asset.item == int(os.path.split(f)[-1])).get() # fix binary queries!?
            return LOADED_ASSETS.get(u)
    return False

def convobj(data):
    fname = str(datetime.now().microsecond)
    write(data, fname)
    convert_ascii(fname, "", "", fname)
    data = read(fname)
    rm(fname)
    return data

def stripset(data):
    try:
        if type(data) == bytes:
            data = data.decode()
        json.loads(data)
    except:
        log("asset not json! converting...", 3)
        try:
            data = convobj(data)
            json.loads(data)
        except:
            error("Stripset not convertible! Please use Three.js JSON or Wavefront OBJ.")
    return data

kindz = ["body", "head", "hair", "teeth", "teeth_top", "tongue", "eye"]
kmap = {"shirt": "body"}
def asset(name=None, path=None, variety=None, owner=None, data=None, kind=None, exalt=None):
    path = path or ASSETS.get(name)
    log("asset: %s (%s)"%(name, path), 2)
    # this caching stuff only works if "name" is the same
    # otherwise, it won't reattach right
    a = path and LOADED_ASSETS.get(path)
    if not a:
        data = data or read(path, binary=True)
        existing = exists(data, exalt)
        if existing:
            log("asset exists: %s"%(existing.name,), 3)
            return existing.key
        log("asset not found! creating...", 3)
        if variety == "stripset":
            data = stripset(data)
        a = Asset()
        a.owners = [owner]
#        a.name = name
        a.name = path and path.split("/")[-1] or name
        a.item = data
        a.identifier = path or name
        if variety:
            a.variety = variety
        else:
            a.variety = path.endswith("js") and "stripset" or "texture"
        if kind:
            a.kind = kind
        elif path:
            for k in kindz:
                if k in path:
                    a.kind = k
                    continue
            if not a.kind:
                for k in kmap:
                    if k in path:
                        a.kind = kmap[k]
            if not a.kind:
                error("what kind?? %s %s %s"%(name, path, variety))
#        a.variety = variety or name.split("_")[-1]
        a.put()
        a.refine()
        LOADED_ASSETS[a.identifier] = LOADED_ASSETS[a.item.urlsafe()] = a
#    elif name != a.name:
#        error("same blob, different name (%s is not %s) -- nope!"%(name, a.name))
    return a.key

def furnishing(name, owner, opts):
    log("furnishing: %s"%(name,), 1)
    f = Thing()
    f.owners = [owner]
    f.kind = "furnishing"
    f.name = name
    f.opts = opts
    f.put()
    return f

def elemental(name, owner, opts):
    log("elemental: %s"%(name,), 1)
    f = Thing()
    f.owners = [owner]
    f.kind = "elemental"
    f.name = name
    f.opts = opts
    f.put()
    return f

def room(name, owner, environment=None, cameras=[], opts={}, lights=LIGHTS):
    log("room: %s"%(name,), 1)
    r = Room()
    r.name = name
    r.opts = opts
    r.owners = [owner]
    r.lights = lights
    r.cameras = cameras
    r.environment = environment or name
    r.put()
    return r

def user(name, email, admin=False, lastName="zero"):
    log("user: %s, %s"%(name, email), 1)
    u = Member()
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
    t = Thing()
    t.owners = [owner]
    for prop in ["texture", "stripset", "morphStack", "name", "custom", "kind"]:
        if prop in obj:
            setattr(t, prop, obj.pop(prop))
    t.material = obj.pop("material", {})
    t.opts = obj
    t.put()
    return t

def getThing(obj, owner):
    tname = obj["name"]
    log("getting thing: %s"%(tname,), 2)
    t = THINGZ.get(tname)
    if not t:
        t = THINGZ[tname] = thing(obj, owner)
    return t

def part(obj, owner, parent=None):
    log("part: %s"%(obj["name"],), 2)
    subz = obj.pop("parts", [])
    par = Part()
    par.base = getThing(obj, owner).key
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
        opts[key] = asset(key, owner=owner)
    return part(generators.body(opts), owner)
#    return part(generators.body(opts, gear(name, owner)), owner)

def person(name, owner=None, responses={}, voice="af_heart", admin=False, email_domain=None, body_generator=parts):
    log("person: %s"%(name,))
    p = Person()
    p.owners = [owner or user(name, "%s@%s"%(name, email_domain), admin).key]
    p.name = name
    p.voice = voice
    p.responses = responses
    p.vibe = VIBES
    p.body = body_generator(name, p.owners[0]).key
    p.put()
    return p

