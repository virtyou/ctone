var vgen = function(v) {
	return {
		video: v,
		kind: "video",
		autoplay: true,
		planeGeometry: [2, 2],
		rotation: [Math.PI, 0, 0],
		thringopts: {
			rotation: [-Math.PI, 0, 0]
		}
	};
}, sgen = function(oz, color) {
	return CT.merge(oz, {
		material: CT.merge({
			color: color
		}, bmat)
	});
};

var bmat = {
	opacity: 0.5,
	transparent: true,
	side: THREE.DoubleSide
}, arshapes = { // hiro/kanji/0-7
	0: sgen({ torusKnotGeometry: true }, 0xff0000),
	1: sgen({ coneGeometry: 1 }, 0x0088ff),
	2: sgen({ sphereGeometry: true }, 0xff8800),
	3: sgen({ boxGeometry: true }, 0xffff00)
}, arstreams = { // tl/fzn - TODO: figure out interference!
	kanji: vgen("tlchan:tunes"),
//	hiro: vgen("fzn:social"),
//	4: vgen("fzn:antisocial")
}, gunit = 0.00004, tsize = 1;

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
	lights: [{}], // single default ambient light
	things: [
		sgen({ boxGeometry: tsize, latitude: gunit, longitude: 0 }, 0xff0000),
		sgen({ coneGeometry: tsize, latitude: -gunit, longitude: 0 }, 0x00ff00),
		sgen({ sphereGeometry: tsize, latitude: 0, longitude: gunit }, 0x0000ff),
		sgen({ torusKnotGeometry: true, scale: [tsize, tsize, tsize], latitude: 0, longitude: -gunit }, 0xff00ff)
	]
};