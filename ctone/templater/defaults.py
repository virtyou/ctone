base = {
    "morphStack": "one.head",
    "color": 0xccbbdd,
    "dress_repeat": None,
    "dress_color": 0xcccccc,
    "hair_color": 0x447788,
    "hair_specular": 0xaaaaff,
    "teeth_color": 0xcccccc,
    "teeth_top_color": 0xcccccc,
    "tongue_color": 0xcccccc,
    "eyeL_color": 0xffffff,
    "eyeR_color": 0xffffff
}
assets = {
    "texture": "maps/one/head.jpg",
    "stripset": "models/one/fathead.js",
    "dress_texture": "maps/one/icon.jpg",
    "dress_stripset": "models/one/torso.js",
    "hair_texture": "maps/one/hairShrunk.png",
    "hair_stripset": "models/one/hairDFULL5.js",
    "eye_texture": "maps/one/eye_brown_basic.jpg",
    "eye_stripset": "models/one/eyeCminusHole3.js",
    "teeth_texture": "maps/one/teeth256s.jpg",
    "teeth_stripset": "models/one/teeth_yan.js",
    "teeth_top_texture": "maps/one/white.jpg",
    "teeth_top_stripset": "models/one/teeth_top_yan.js",
    "tongue_stripset": "models/one/tongue_yan.js",
    "tongue_texture": "maps/one/teeth256s.jpg"
}
responses = {
    "test": {
        "mood": {
            "mad": 0.5
        },
        "phrase": [
            "don't test my patience!",
            "is this a test? are you testing me?",
            "testing, testing, one, two, three. i don't like tests."
        ],
        "branches": {
            "test":  {
                "phrase": "i told you not to test my patience",
                "mood": {
                    "mad": 1.0,
                    "antsy": 0.5
                }
            }
        }
    },
    "unlock": {
        "phrase": "you've unlocked branch 1",
        "mood": {
            "happy": 0.3
        },
        "branches": {
            "unlock": {
                "phrase": "you've unlocked branch 2 -- want the prize?",
                "mood": {
                    "happy": 0.6
                },
                "branches": {
                    "prize": {
                        "phrase": "congratulations, you got the prize!",
                        "mood": {
                            "happy": 1.0
                        },
                        "branches": {
                            "prize": "you already got the prize",
                            "reset": {
                                "phrase": "ok, i reset unlock and prize",
                                "disable": ["unlock", "prize"]
                            }
                        }
                    }
                }
            }
        }
    },
    "bad": {
        "mood": {
            "sad": 0.9,
            "happy": 0
        },
        "phrase": [
            "that's a bummer",
            "how awful",
            "i'm sad"
        ]
    },
    "relax": {
        "mood": {
            "sad": 0,
            "mad": 0,
            "antsy": 0,
            "happy": 0
        },
        "phrase": [
            "better now",
            "i'm fine",
            "back to neutral"
        ],
        "branches": {
            "calm": {
                "phrase": "i told you, i am calm",
                "mood": {
                    "mad": 0.5,
                    "antsy": 0.5
                },
                "branches": {
                    "calm": {
                        "phrase": [
                            "i said i'm calm, jerk!",
                            "you calm down!",
                            "shut up nerd"
                        ],
                        "mood": {
                            "mad": 1.0
                        }
                    }
                }
            }
        }
    }
}
furnishings = {
    "pool": {
        "thing": "Pool",
        "scale": [1.2, 1.2, 2],
        "position": [0, -35, 0],
        "rotation": [-6.28/4, 0, 0]
    }
}
headgear = [{
    "name": "earring",
    "kind": "headgear",
    "custom": "js/custom/one/earring.js"
}, {
    "name": "pony",
    "kind": "hair",
    "custom": "js/custom/one/pony.js"
}]
hairz = {
    "blip": {
        "texture": "maps/one/hair_alphaGimp3_2SMALL.png",
        "stripset": "models/one/hair2ALPHA_XX5.js"
    },
    "blop": {
        "texture": "maps/one/hair.png",
        "stripset": "models/one/hair4mario.js",
        "position": [0, 0, 0]
    },
    "clip": {
        "texture": "maps/one/hair.png",
        "stripset": "models/one/hair4marioA.js",
        "position": [0, 0, 0]
    },
    "clop": {
        "texture": "maps/one/hair.png",
        "stripset": "models/one/hair4marioB.js",
        "position": [0, 0, 0]
    }
}
LIGHTS = [
    {
        "variety": "ambient"
    }, {
        "variety": "directional",
        "color": 0xcccccc,
        "intensity": 0.8,
        "position": [0.5, 0.5, 0.1]
    }, {
        "variety": "directional",
        "color": 0xeeeeee,
        "position": [-1, 1, -0.3]
    }
]