environments.one.forest = {
//	fog: true,
//	rain: true,
	boxGeometry: [512, 512, 512],
	outside: "/maps/one/sky-night.png",
	lights: [{
		variety: "ambient",
		intensity: 0.1
	}, {
		variety: "directional",
		position: [0, 1, 0.1],
		intensity: 0.5
	}],
	floor: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			planeGeometry: true,
			scale: [40, 40, 1],
			material: {
				side: THREE.BackSide
			},
			parts: [/*{
				name: "fire",
				kind: "elight",
				thing: "Fire",
				regTick: true,
				rotation: [-1.57, 0, 0],
				scale: [1 / 10, 4, 1 / 10]
			}, */{
				name: "garden",
				kind: "surroundings",
				rotation: [-1.57, 0, 0],
				scale: [1 / 40, 1, 1 / 40],
				subclass: zero.core.Flora.Garden
			}, {
				regTick: true,
				name: "menagerie",
				kind: "surroundings",
				rotation: [-1.57, 0, 0],
				scale: [1 / 40, 1, 1 / 40],
				subclass: zero.core.Fauna.Menagerie

			}]
		}]
	}
};