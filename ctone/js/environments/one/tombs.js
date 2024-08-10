environments.one.tombs = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2000, 1200, 2000]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [-500, 0, 750],
			dimensions: [1000, 400, 500]
		}, {
			position: [-500, 0, -800],
			dimensions: [1000, 300, 400]
		}, {
			position: [500, 0, -800],
			dimensions: [1000, 600, 400]
		}, {
			position: [-800, 175, -800],
			dimensions: [100, 50, 100]
		}, {
			position: [-200, 175, -800],
			dimensions: [100, 50, 100]
		}]
	},
	ramp: {
		texture: "/maps/one/stonewall.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [2, 16, 1],
			rotation: [-2.1, 0, 0],
			position: [-900, -200, -190]
		}, {
			planeGeometry: true,
			scale: [2, 16, 1],
			rotation: [2.15, 0, 0],
			position: [900, -150, 70]
		}]
	}
};