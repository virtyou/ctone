var bmat = {
	opacity: 0.5,
	transparent: true,
	side: THREE.DoubleSide
};
templates.one.ar = {
	name: "one ar template",
	lights: [{}], // single default ambient light
	markers: { // hiro/kanji/0-7
		hiro: {
			torusKnotGeometry: true,
			material: CT.merge({
				color: 0xff0000
			}, bmat)
		},
		kanji: {
			coneGeometry: 1,
			material: CT.merge({
				color: 0x0088ff
			}, bmat)
		},
		0: {
			sphereGeometry: true,
			material: CT.merge({
				color: 0xff8800
			}, bmat)
		},
		1: {
			boxGeometry: true,
			material: CT.merge({
				color: 0xffff00
			}, bmat)
		}
	}
};