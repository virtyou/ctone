templates.one.body = {
    variants: { // TODO: rm old variants and funcs (first glean!)
        defaults_old: {
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
        },
        defaults: {
            texture: "/maps/one/shirt.jpg",
            stripset: "/models/one/body.js",
            head_texture: "/maps/one/head.jpg",
            head_stripset: "/models/one/head.js",
            teeth_texture: "/maps/one/teeth256s.jpg",
            teeth_stripset: "/models/one/teeth_yan.js",
            teeth_top_stripset: "/models/one/teeth_top_yan.js",
            tongue_stripset: "/models/one/tongue_yan.js",
            eye_texture: "/maps/one/eye_brown_basic.jpg",
            eye_stripset: "/models/one/eyeCminusHole3.js"
        },
        basic: {
            hair: {
                custom: "custom.one.pony"
            }
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
        earring: { // earring mispositioned now...
            custom: custom.one.earring
        },
        pony: {
            custom: custom.one.pony
        }
    }, // random, kid, sassy, and most variants probs broken ;)
    random: function() {
        return zero.base.body(CT.data.choice(Object.values(templates.one.body.variants)),
            CT.data.random(2));
    },
    kid: function(opts) {
        var varz = templates.one.body.variants,
            kid = zero.base.body(CT.merge(opts, varz.kid, varz.sassy)),
            head = kid.parts[2].parts[0].parts[0];
        head.parts.splice(3, 1); // remove default hair -- we're customizing!
        head.parts.push(templates.one.body.accessories.hat);
        return kid;
    },
    sassy: function(opts) {
        var sassy = zero.base.body(CT.merge(opts, templates.one.body.variants.sassy)),
            head = sassy.parts[2].parts[0].parts[0];
        head.parts.splice(3, 1); // remove default hair -- we're customizing!
        head.parts.push(templates.one.body.accessories.earring);
        head.parts.push(templates.one.body.accessories.pony);
        return sassy;
    },
    basic: function(opts) { // use basic() (other stuff too old)
        var vz = templates.one.body.variants;
        return zero.base.body(CT.merge(opts, vz.basic, vz.defaults));
    }
};
var TOB = templates.one.body, P2 = Math.PI/2;

TOB.gestures = {"jump":{"spine":{},"body":{},"right":{"leg":{"hip":{"y":-0.34,"x":-0.93,"z":-0.78},"knee":{"x":1.07},"ankle":{"y":0,"x":0},"toe":{"x":0}},"arm":{"shoulder":{"y":0.27,"x":-1.19,"z":-1.02},"elbow":{"y":0,"x":-1.14},"wrist":{"x":0,"z":0},"clavicle":{"y":0,"z":-0.5}},"hand":{}},"left":{"leg":{"hip":{"y":0.6,"x":-2,"z":0.54},"knee":{"x":0.35},"ankle":{"y":0,"x":0},"toe":{"x":0}},"arm":{"shoulder":{"y":0.11,"x":-1.67,"z":0.25},"elbow":{"y":0,"x":-0.73},"wrist":{"x":-0.08,"z":0.55},"clavicle":{"y":0.5,"z":0.5}},"hand":{}}},"rstroke":{"spine":{"pelvis":{"y":0,"x":1},"ribs":{"y":0,"x":0.06},"lumbar":{"y":0,"x":1},"head":{"y":0,"x":-1},"neck":{"y":0,"x":-1}},"body":{"rotation":{"y":0.128407346410207,"x":-0.021592653589793,"z":-0.081592653589793}},"right":{"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":0.71},"ankle":{"y":0,"x":0.5},"toe":{"x":0.5}},"arm":{"shoulder":{"y":0.5,"x":1,"z":-0.49},"elbow":{"y":-0.72,"x":-0.47},"wrist":{"x":0.24,"z":-0.02},"clavicle":{"y":-0.5,"z":0.2}},"hand":{}},"left":{"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":2},"ankle":{"y":0,"x":0.5},"toe":{"x":0.5}},"arm":{"shoulder":{"y":-0.43,"x":-0.66,"z":0},"elbow":{"y":0,"x":-1.19},"wrist":{"x":0,"z":0},"clavicle":{"y":-0.5,"z":0}},"hand":{}}},"right":{"spine":{"pelvis":{"y":-0.11,"x":0},"ribs":{"y":0.2,"x":-0.02},"lumbar":{"y":0,"x":0.13},"head":{"y":-0.01,"x":0},"neck":{"y":0,"x":-0.18}},"body":{},"right":{"hand":{},"arm":{"shoulder":{"y":0,"x":-0.42,"z":0},"elbow":{"y":0.58,"x":-1},"wrist":{"x":0,"z":0},"clavicle":{"y":0.5,"z":0.2}},"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":0.81},"toe":{"x":-0.5},"ankle":{"y":0,"x":-0.5}}},"left":{"hand":{},"arm":{"shoulder":{"y":0,"x":0.45,"z":0},"elbow":{"y":0,"x":0},"wrist":{"x":0,"z":0},"clavicle":{"y":-0.07,"z":0.5}},"leg":{"hip":{"y":0,"x":-1.05,"z":0},"knee":{"x":0.61},"toe":{"x":0.5},"ankle":{"y":0,"x":0.5}}}},"left":{"spine":{"pelvis":{"y":0.09,"x":0},"ribs":{"y":-0.3,"x":0},"lumbar":{"y":0,"x":0.18},"head":{"y":0,"x":0},"neck":{"y":0,"x":-0.15}},"body":{},"right":{"hand":{},"arm":{"shoulder":{"y":0,"x":0.69,"z":0},"elbow":{"y":0,"x":0},"wrist":{"x":0,"z":0},"clavicle":{"y":0.17,"z":-0.5}},"leg":{"hip":{"y":-0.1,"x":-0.93,"z":0},"knee":{"x":0.45},"toe":{"x":0.5},"ankle":{"y":0,"x":0.5}}},"left":{"hand":{},"arm":{"shoulder":{"y":-0.2,"x":-0.28,"z":0.25},"elbow":{"y":-0.12,"x":-1.24},"wrist":{"x":0,"z":0},"clavicle":{"y":-0.5,"z":-0.01}},"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":0.88},"toe":{"x":-0.5},"ankle":{"y":0,"x":-0.5}}}},"lstroke":{"body":{"rotation":{"y":0.128407346410207,"x":0.028407346410207,"z":0.078407346410207}},"spine":{"pelvis":{"y":0,"x":1},"ribs":{"y":0,"x":0},"lumbar":{"y":0,"x":1},"head":{"y":0,"x":-1},"neck":{"y":0,"x":-1}},"right":{"hand":{},"arm":{"shoulder":{"y":0.28,"x":-1.29,"z":0},"elbow":{"y":0.14,"x":-1.12},"wrist":{"x":-0.19,"z":0},"clavicle":{"y":0.5,"z":0}},"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":1.67},"ankle":{"y":0,"x":0.5},"toe":{"x":0.5}}},"left":{"hand":{},"arm":{"shoulder":{"y":0.34,"x":0.2,"z":0},"elbow":{"y":-0.96,"x":0},"wrist":{"x":0,"z":-0.43},"clavicle":{"y":0.5,"z":0.15}},"leg":{"hip":{"y":0,"x":0,"z":0},"knee":{"x":0},"ankle":{"y":0,"x":0.5},"toe":{"x":0.5}}}},"lfly":{"left":{"leg":{"hip":{"x":0,"y":0,"z":0},"knee":{"x":0.87},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-0.59,"y":0.46,"z":0.64},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":0,"z":0},"knee":{"x":0.95},"ankle":{"x":0.5,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-1.97,"y":-0.35,"z":-0.97},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"spine":{"pelvis":{"x":1,"y":0},"lumbar":{"x":1,"y":0},"ribs":{"x":0,"y":0},"neck":{"x":-1,"y":0},"head":{"x":-1,"y":0}},"body":{}},"rfly":{"left":{"leg":{"hip":{"x":0,"y":0,"z":0},"knee":{"x":2},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-0.54,"y":0.5,"z":0.21},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":0,"z":0},"knee":{"x":0.85},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":0.33,"y":-0.5,"z":-0.33},"elbow":{"x":-0.31,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"spine":{"pelvis":{"x":1,"y":0},"lumbar":{"x":1,"y":0},"ribs":{"x":0,"y":0},"neck":{"x":-1,"y":0},"head":{"x":-1,"y":0}},"body":{}},"trip":{"left":{"leg":{},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-1.41,"y":0,"z":0},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"right":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":0},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"spine":{"pelvis":{"x":-0.02,"y":0},"lumbar":{"x":-1,"y":0},"ribs":{"x":-0.77,"y":0},"neck":{"x":-1,"y":0},"head":{"x":0,"y":0}},"body":{}},"slip":{"left":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":0},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-1.36,"y":0,"z":0},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":0,"z":-1.44},"knee":{"x":0},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-2.59,"y":0,"z":0},"elbow":{"x":0,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"spine":{"pelvis":{"x":1,"y":1},"lumbar":{"x":-1,"y":0},"ribs":{"x":1,"y":-1},"neck":{"x":0,"y":0},"head":{"x":0,"y":0}},"body":{"rotation":{"x":-3.14159265358979,"y":3.1384073464102102,"z":0.158407346410207}}},"lie":{"body":{"rotation":{"x":-1.5707963267948966}}},"prone":{"body":{"rotation":{"x":1.5707963267948966}}},"sit":{"right":{"leg":{"hip":{"x":-1.5707963267948966},"knee":{"x":1.5707963267948966}}},"left":{"leg":{"hip":{"x":-1.5707963267948966},"knee":{"x":1.5707963267948966}}}},"upright":{"body":{"rotation":{"x":0,"y":0,"z":0}}},"rclimb":{"left":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":2},"ankle":{"x":-0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":0,"y":0,"z":0},"elbow":{"x":-0.33,"y":-1},"wrist":{"x":-0.23,"z":1}},"hand":{}},"right":{"leg":{"hip":{"x":-1.36,"y":0,"z":0},"knee":{"x":0.95},"ankle":{"x":0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":-0.32,"z":-0.11},"shoulder":{"x":-1.72,"y":0.5,"z":-0.19},"elbow":{"x":-0.95,"y":0.64},"wrist":{"x":-0.03,"z":-0.44}},"hand":{}},"spine":{},"body":{}},"lclimb":{"left":{"leg":{"hip":{"x":-0.97,"y":0,"z":0},"knee":{"x":1},"ankle":{"x":-0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-1.67,"y":0,"z":0},"elbow":{"x":-0.87,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"right":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":2},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"spine":{},"body":{}},"rcrawl":{"left":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":2},"ankle":{"x":-0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":0,"y":0,"z":0},"elbow":{"x":-0.33,"y":-1},"wrist":{"x":-0.23,"z":1}},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":0,"z":0},"knee":{"x":0.95},"ankle":{"x":0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":-0.32,"z":-0.11},"shoulder":{"x":-1.72,"y":0.5,"z":-0.19},"elbow":{"x":-0.95,"y":0.64},"wrist":{"x":-0.03,"z":-0.44}},"hand":{}},"spine":{"pelvis":{"y":0,"x":1},"ribs":{"y":0,"x":0.06},"lumbar":{"y":0,"x":1},"head":{"y":0,"x":-1},"neck":{"y":0,"x":-1}},"body":{"rotation":{"y":0.128407346410207,"x":-0.021592653589793,"z":-0.081592653589793}}},"lcrawl":{"left":{"leg":{"hip":{"x":-0.31,"y":0,"z":0},"knee":{"x":1},"ankle":{"x":-0.5,"y":0},"toe":{"x":-0.5}},"arm":{"clavicle":{"y":0,"z":0},"shoulder":{"x":-1.67,"y":0,"z":0},"elbow":{"x":-0.87,"y":0},"wrist":{"x":0,"z":0}},"hand":{}},"body":{"rotation":{"y":0.128407346410207,"x":0.028407346410207,"z":0.078407346410207}},"spine":{"pelvis":{"y":0,"x":1},"ribs":{"y":0,"x":0},"lumbar":{"y":0,"x":1},"head":{"y":0,"x":-1},"neck":{"y":0,"x":-1}},"right":{"leg":{"hip":{"x":-2,"y":0,"z":0},"knee":{"x":1.23},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}}},"lride":{"left":{"leg":{"hip":{"x":0,"y":0,"z":0.46},"knee":{"x":0.44},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":-0.51,"z":-0.69},"knee":{"x":0.62},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"spine":{},"body":{}},"rride":{"left":{"leg":{"hip":{"x":0,"y":0.54,"z":0.54},"knee":{"x":0.28},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"right":{"leg":{"hip":{"x":0,"y":0,"z":-0.33},"knee":{"x":0.31},"ankle":{"x":0,"y":0},"toe":{"x":0}},"arm":{},"hand":{}},"spine":{},"body":{}}};

TOB.dances = {"swim":{"interval":400,"steps":["rstroke","lstroke"]},"walk":{"interval":300,"steps":["right","left"]},"crawl":{"interval":300,"steps":["rcrawl","lcrawl"]},"climb":{"interval":300,"steps":["rclimb","lclimb"]},"fly":{"steps":["lfly","rfly"],"interval":500},"fall":{"steps":["slip","trip"],"interval":400},"ride":{"steps":["rride","lride"]}};
zero.base.body.defaults = TOB.variants.defaults;
zero.base.body.gestures = TOB.gestures;
zero.base.body.dances = TOB.dances;