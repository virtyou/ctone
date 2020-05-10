"""
seeder script -- create initial stuff
 - Memberz, Partz (bodies - templated), Personz, Roomz, Thingz
 - convert assets to Assetz (blobbed): texture, stripset
"""

from cantools.util import log
from templater import generators
from spawners import thing, person, asset, room, furnishing
from templater.defaults import HAIRZ, FURNISHINGS, RESPONSES

PEOPLE = ["sassy"]
ROOMZ = ["one.scrolly", "one.techno", "one.kidroom"]
EDOM = "e.c"
VARZ = {} # meh

def extras(owner):
    log("extras")
    for name, obj in HAIRZ.items():
        t = obj["texture"]
        s = obj["stripset"]
        opts = {
            "hair_name": name,
            "hair_texture": asset(t.split("/")[1].split(".")[0], t, "texture", owner),
            "hair_stripset": asset(s.split("/")[1].split(".")[0], s, "stripset", owner)
        }
        if "position" in obj:
            opts["hair_position"] = obj["position"]
        thing(generators.hair(opts), owner)

def seed():
    log("seeding database", important=True)
    for n in range(len(PEOPLE)):
        p = person(PEOPLE[n], responses=RESPONSES, admin=True, email_domain=EDOM)
        room(ROOMZ[n], p.owner)
    pool = furnishing('pool', p.owner, FURNISHINGS["pool"])
    extras(p.owner)
    log("goodbye", important=True)

def setPeople(peeps):
    global PEOPLE
    PEOPLE = peeps

def setResponses(resps):
    global RESPONSES
    RESPONSES = resps

def setDomain(dom):
    global EDOM
    EDOM = dom