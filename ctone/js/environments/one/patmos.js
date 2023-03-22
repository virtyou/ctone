environments.one.patmos = {
	outside: "/maps/one/sky-night.png",
	boxGeometry: [1600, 1600, 3200],
	floor: {
		parts: [{
			planeGeometry: true,
			vstrip: "templates.one.vstrip.water",
			position: [0, 240, -700],
			scale: [2, 14, 1],
			material: {
				transparent: true,
				opacity: 0.5,
				alphaTest: 0.1,
				side: THREE.BackSide
			}
		}]
	},
	ramp: {
		texture: "/maps/one/stonestairs.png",
		parts: [{
			planeGeometry: true,
			position: [0, 200, -40],
			rotation: [-2, 0, 0],
			scale: [8, 10, 1],
			material: {
				transparent: true
			}
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [0, -300, 800],
			dimensions: [1600, 600, 1600]
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
			position: [600, 400, 1400],
			dimensions: [400, 800, 400]
		}, {
			position: [-600, 400, 1400],
			dimensions: [400, 800, 400]
		}, {
			position: [0, 900, 800],
			dimensions: [1600, 200, 1600]
		}, {
			texture: "/maps/one/leaves.jpg",
			position: [0, -260, -3000],
			dimensions: [6400, 1000, 3200]
		}, {
			position: [0, 1240, -3000],
			dimensions: [6000, 2000, 2800]
		}]
	}
};