var zbf = zero.base.fauna, ftz = templates.one.fbx = {
	dragon: { // source: see readme.txt
		loader: "FBXLoader",
		scale: [0.04, 0.04, 0.04],
		stripset: "/models/one/fbx/dragon/dragon.fbx"
	},
	guy: { // source: https://gist.github.com/bellbind/f78746c37f31742596cc2f67326ad595
		loader: "FBXLoader",
		scale: [2, 2, 2],
		stripset: "/models/one/fbx/guy/guy.fbx"
	}
};

zbf.dragon = ftz.dragon;
zbf.guy = ftz.guy;
zero.core.Fauna.sets.monsters = {
	dragon: 1,
	guy: 3
};