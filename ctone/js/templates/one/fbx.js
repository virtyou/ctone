var m, zbf = zero.base.fauna, zcf = zero.core.Fauna, ftz = templates.one.fbx = {
	dragon: {
		scale: [0.04, 0.04, 0.04],
		stripset: "/models/one/fbx/dragon/Dragon_Baked_Actions_fbx_7.4_binary.fbx",
		credit: "https://free3d.com/3d-model/black-dragon-rigged-and-game-ready-92023.html",
		anims: {
			walk: 0,
			attack: 1,
			hurt: 2
		}
	},
	guy: {
		scale: [2, 2, 2],
		stripset: "/models/one/fbx/guy/guy.fbx",
		credit: "https://gist.github.com/bellbind/f78746c37f31742596cc2f67326ad595"
	},
	wolf: {
		speed: 60,
		backwards: true,
		scale: [1, -1, 1],
		stripset: "/models/one/fbx/wolf/Wolf.fbx",
		credit: "https://free3d.com/3d-model/wolf-rigged-and-game-ready-42808.html"
	},
	arachnid: {
		anims: {
			walk: 0,
			hurt: 1,
			attack: 3
		},
		speed: 50,
		timeScale: -1,
		backwards: true,
		stripset: "/models/one/fbx/arachnid/Spider.fbx",
		credit: "https://free3d.com/3d-model/spider-animated-low-poly-and-game-ready-87147.html",
		onbuild: function(arachnid) {
			arachnid.thring.remove(arachnid.thring.children[1]);
		}
	},
	castle: {
		scale: [80, 80, 80],
		stripset: "/models/one/fbx/castle/castle.fbx",
		credit: "https://free3d.com/3d-model/fantasy-castle-40715.html"
	}
};
for (m in ftz)
	ftz[m].loader = "FBXLoader";

zcf.hunters.dragon = ["arachnid", "wolf", "guy"];
zcf.hunters.arachnid = ["wolf", "guy"];
zcf.hunters.wolf = ["guy"];
zcf.sets.monsters = {
	arachnid: 3,
	dragon: 1,
	wolf: 2,
	guy: 6
};
for (m in zcf.sets.monsters)
	zbf[m] = ftz[m];