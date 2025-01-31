var vgen = function(v) {
	return {
		video: v,
		kind: "video",
		autoplay: true,
		planeGeometry: [2, 2],
		rotation: [Math.PI / 2, 0, 0],
		thringopts: {
			rotation: [-Math.PI / 2, 0, 0]
		}
	};
};

var bmat = {
	opacity: 0.5,
	transparent: true,
	side: THREE.DoubleSide
}, arshapes = { // hiro/kanji/0-7
	0: {
		torusKnotGeometry: true,
		material: CT.merge({
			color: 0xff0000
		}, bmat)
	},
	1: {
		coneGeometry: 1,
		material: CT.merge({
			color: 0x0088ff
		}, bmat)
	},
	2: {
		sphereGeometry: true,
		material: CT.merge({
			color: 0xff8800
		}, bmat)
	},
	3: {
		boxGeometry: true,
		material: CT.merge({
			color: 0xffff00
		}, bmat)
	}
}, arstreams = { // tl/fzn - TODO: figure out interference!
	kanji: vgen("tlchan:tunes"),
//	hiro: vgen("fzn:social"),
//	4: vgen("fzn:antisocial")
};

templates.one.ar.anchors = {
	variety: "anchors",
	name: "one ar anchors template",
	lights: [{}], // single default ambient light
//	markers: arstreams
	markers: CT.merge(arshapes, arstreams)
};
templates.one.ar.location = {
	variety: "location",
	name: "one ar location template",
};