templates.one.torso = {
    variants: {
        defaults: {
            texture: "/maps/one/headBod1024bs2Lips2.jpg",
            stripset: "/models/one/head2.js",
            color: 0xcccccc,
            dress_texture: "/maps/one/teeth256s.jpg",
            dress_stripset: "/models/one/dress3.js",
            dress_repeat: [0.9, 0.3],
            dress_color: 0x115566,
            dress_matcat: "Basic",
            hair_stripset: "/models/one/hair_0.js",
            hair_color: 0x111122,
            hair_specular: 0x222233,
            teeth_texture: "/maps/one/teeth256s.jpg",
            teeth_stripset: "/models/one/teeth_yan.js",
            teeth_color: 0xcccccc,
            teeth_top_texture: "/maps/one/white.jpg",
            teeth_top_stripset: "/models/one/teeth_top_yan.js",
            teeth_top_color: 0xcccccc,
            tongue_texture: "/maps/one/teeth256s.jpg",
            tongue_stripset: "/models/one/tongue_yan.js",
            tongue_color: 0xcccccc,
            eye_texture: "/maps/one/eye_brown1024s.jpg",
            eye_stripset: "/models/one/eyeC.js",
            eyeL_color: 0xffffff,
            eyeR_color: 0xffffff,
            morphStack: "head1"
        },
        newhair: {
            texture: "/maps/one/head_basic.jpg",
            stripset: "/models/one/head2_UVfix.js",
            color: 0xddc5bb,
            hair_texture: "/maps/one/hairC5d.png",
            hair_stripset: "/models/one/hairC5.js",
            hair_color: 0xaa99bb,
            hair_specular: 0x770000,
            eye_texture: "/maps/one/eye_brown_basic.jpg",
            eye_stripset: "/models/one/eyeCminusHole3.js",
            morphStack: "head2"
        },
        sassy: {
            texture: "/maps/one/head.jpg",
            stripset: "/models/one/fathead.js",
            color: 0xccbbdd,
            dress_texture: "/maps/one/icon.jpg",
            dress_stripset: "/models/one/torso.js",
            dress_repeat: null,
            dress_color: 0xcccccc,
            hair_texture: "/maps/one/hairShrunk.png",
            hair_stripset: "/models/one/hairDFULL5.js",
            hair_color: 0x447788,
            hair_specular: 0xaaaaff,
            eye_texture: "/maps/one/eye_brown_basic.jpg",
            eye_stripset: "/models/one/eyeCminusHole3.js",
            morphStack: "one.head"
        },
        kid: {
            texture: "/maps/one/head_UV2.jpg",
            stripset: "/models/one/baseReskinEyes.js"
        }
    },
    accessories: {
        hat: {
            name: "hat",
            texture: "/maps/one/hairC5dHat.png",
            stripset: "/models/one/kidHatHairStriped5.js",
            position: [0, -9, 2.5],
            material: {
                color: 0xcccccc,
                specular: 0x330044,
                morphTargets: true,
                emissive: 0,
                transparency: true,
                alphaTest: 0.3,
                reflectivity: 0.9,
                shininess: 1,
                metal: false
            }
        },
        earring: {
            custom: custom.one.earring
        },
        pony: {
            custom: custom.one.pony
        }
    },
    random: function() {
        return zero.base.torso(CT.data.choice(Object.values(templates.one.torso.variants)),
            CT.data.random(2));
    },
    kid: function(opts) {
        var varz = templates.one.torso.variants,
            kid = zero.base.torso(CT.merge(opts, varz.kid, varz.sassy)),
            head = kid.parts[2].parts[0].parts[0];
        head.parts.splice(3, 1); // remove default hair -- we're customizing!
        head.parts.push(templates.one.torso.accessories.hat);
        return kid;
    },
    sassy: function(opts) {
        var sassy = zero.base.torso(CT.merge(opts, templates.one.torso.variants.sassy)),
            head = sassy.parts[2].parts[0].parts[0];
        head.parts.splice(3, 1); // remove default hair -- we're customizing!
        head.parts.push(templates.one.torso.accessories.earring);
        head.parts.push(templates.one.torso.accessories.pony);
        return sassy;
    }
};

zero.base.torso.defaults = templates.one.torso.variants.defaults;