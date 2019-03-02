"""
seeder script -- create initial stuff
 - CTUserz, Partz (bodies - templated), Personz, Roomz, Thingz
 - convert assets to Assetz (blobbed): texture, stripset
"""

import copy
from cantools.util import log, error, read
from model import db, CTUser, Person, Part, Asset, Room, Thing
from templater import generators
from templater.defaults import *

people = ["sassy"]
roomz = ["one.scrolly", "one.techno", "one.kidroom"]
EDOM = "e.c"
VARZ = {} # meh
THINGZ = {}
loaded_assets = {}

def user(name, email):
    log("user: %s, %s"%(name, email), 1)
    u = CTUser()
    u.active = u.admin = True
    u.email = email
    u.firstName = name
    u.lastName = "zero"
    u.put()
    u.password = db.hashpass("password", u.created)
    u.put()
    return u

def asset(name, path=None, variety=None):
    path = path or assets[name]
    log("asset: %s (%s)"%(name, path), 2)
    # this caching stuff only works if "name" is the same
    # otherwise, it won't reattach right
    a = loaded_assets.get(path)
    if not a:
        log("asset not found! creating...", 3)
        a = loaded_assets[path] = Asset()
        a.owner = VARZ["owner"]
        a.name = name
        a.item = read(path)
        a.variety = variety or name.split("_")[-1]
        a.put()
#    elif name != a.name:
#        error("same blob, different name (%s is not %s) -- nope!"%(name, a.name))
    return a.key

def gear(name):
    gz = copy.deepcopy(headgear)
    for g in gz:
        if g["custom"]:
            g["custom"] = read(g["custom"])
        for prop in ["texture", "stripset"]:
            if prop in g:
                setattr(g, prop, asset(prop, g[prop]))
    return gz

def body(name): # from template
    template = "templates.one.body.%s"%(name,)
    log("body (templated): %s"%(template,), 1)
    bod = Part()
    bod.template = template
    bod.assets = map(asset, assets.keys())
    bod.put()
    return bod

def thing(obj):
    log("thing: %s"%(obj["name"],), 2)
    t = THINGZ.get(obj["name"])
    if not t:
        t = THINGZ[obj["name"]] = Thing()
        t.owner = VARZ["owner"]
        for prop in ["texture", "stripset", "morphStack", "name", "custom", "kind"]:
            if prop in obj:
                setattr(t, prop, obj.pop(prop))
        t.material = obj.pop("material", {})
        t.opts = obj
        t.put()
    return t

def part(obj, parent=None):
    log("part: %s"%(obj["name"],), 2)
    subz = obj.pop("parts", [])
    par = Part()
    par.base = thing(obj).key
    par.parent = parent
    par.put()
    for sub in subz:
        part(sub, par.key)
    return par

def parts(name):
    log("body (parts): %s"%(name,), 1)
    opts = base.copy()
    for key in assets:
        opts[key] = asset(key)
    return part(generators.body(opts, gear(name)))

def person(name, body_generator=parts):
    log("person: %s"%(name,))
    p = Person()
    p.owner = VARZ["owner"] = user(name, "%s@%s"%(name, EDOM)).key
    p.name = VARZ["name"] = name
    p.voice = "Joanna"
    p.responses = responses
    p.body = body_generator(name).key
    p.put()
    return p

def room(name):
    log("room: %s"%(name,), 1)
    r = Room()
    r.name = name
    r.opts = { "environment": name, "lights": LIGHTS }
    r.owner = VARZ["owner"]
    r.put()
    return r

def furnishing(name):
    log("furnishing: %s"%(name,), 1)
    f = Thing()
    f.owner = VARZ["owner"]
    f.kind = "furnishing"
    f.name = name
    f.opts = furnishings[name]
    f.put()
    return f

def extras():
    log("extras")
    for name, obj in hairz.items():
        t = obj["texture"]
        s = obj["stripset"]
        opts = {
            "hair_name": name,
            "hair_texture": asset(t.split("/")[1].split(".")[0], t, "texture"),
            "hair_stripset": asset(s.split("/")[1].split(".")[0], s, "stripset")
        }
        if "position" in obj:
            opts["hair_position"] = obj["position"]
        thing(generators.hair(opts))

def seed():
    log("seeding database", important=True)
    for n in range(len(people)):
        person(people[n])
        room(roomz[n])
    pool = furnishing('pool')
    extras()
    log("goodbye", important=True)

def setPeople(peeps):
    global people
    people = peeps

def setResponses(resps):
    global responses
    responses = resps

def setDomain(dom):
    global EDOM
    EDOM = dom