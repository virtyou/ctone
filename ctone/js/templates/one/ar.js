var vgen = function(v, oz) {
	return CT.merge({
		video: v,
		kind: "video",
		autoplay: "tap",
		planeGeometry: [3, 3]
	}, oz);
}, sgen = function(oz, color) {
	return CT.merge(oz, {
		kind: "shape",
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
	hiro: vgen("tlchan:tunes"),
	kanji: { person: "random" },
//	kanji: vgen("fzn:social"),
//	4: vgen("fzn:antisocial")
}, gunit = 0.00003, punit = gunit * 3, tsize = 1;

templates.one.ar.anchors = {
	variety: "anchors",
	name: "one ar anchors template",
	lights: [{}], // single default ambient light
//	markers: arstreams
	markers: CT.merge(arshapes, arstreams)
};

templates.one.ar.location = {
	relative: true,
	variety: "location",
	name: "one ar location template",
	lights: [{}], // single default ambient light
	things: [
		sgen({ boxGeometry: tsize, latitude: gunit, longitude: 0 }, 0xff0000),
		sgen({ coneGeometry: tsize, latitude: -gunit, longitude: 0 }, 0x00ff00),
		sgen({ sphereGeometry: tsize, latitude: 0, longitude: gunit }, 0x0000ff),
		sgen({ torusKnotGeometry: true, scale: [tsize, tsize, tsize], latitude: 0, longitude: -gunit }, 0xff00ff),
		vgen("tlchan:tunes", { latitude: gunit, longitude: gunit }),
		{ person: "random", latitude: punit, longitude: punit }
	]
};