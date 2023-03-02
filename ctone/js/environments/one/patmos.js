environments.one.patmos = {
	outside: "/maps/one/sky-night.png",
	boxGeometry: [1600, 1600, 3200],
	floor: {
		parts: [{
			planeGeometry: true,
			vstrip: "templates.one.vstrip.water",
			position: [0, 0, -400],
			scale: [2, 1, 800],
			material: {
				transparent: true,
				side: THREE.BackSide
			}
		}]
	},
	ramp: {
		texture: "/maps/one/stonestairs.png",
		parts: [{
			planeGeometry: true,
			position: [0, 200, 200],
			rotation: [-1.2, 0, 0],
			scale: [8, 8, 1],
			material: {
				transparent: true
			}
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [0, -400, 800],
			dimensions: [1600, 800, 1600]
		}, {
			position: [0, 200, 800],
			dimensions: [800, 400, 800]
		}, {
			position: [600, 400, 200],
			dimensions: [400, 800, 400]
		}, {
			position: [-600, 400, 200],
			dimensions: [400, 800, 400]
		}, {
			position: [600, 400, 600],
			dimensions: [400, 800, 400]
		}, {
			position: [-600, 400, 600],
			dimensions: [400, 800, 400]
		}, {
			position: [0, 900, 800],
			dimensions: [1600, 200, 1600]
		}]
	}
};