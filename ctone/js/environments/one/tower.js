environments.one.tower = {
	outside: "/maps/one/sky-day.jpg",
	boxGeometry: [8000, 2000, 8000],
	obstacle: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			position: [0, -1800, -2000],
			dimensions: [8000, 400, 4000]
		}, {
			position: [0, -1400, -2400],
			dimensions: [4000, 400, 2000]
		}, {
			position: [0, -1250, 0],
			dimensions: [2000, 1500, 2000]
		}]
	},
	floor: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			planeGeometry: true,
			position: [0, -2000, 2000],
			scale: [80, 40, 1],
			material: {
				side: THREE.BackSide
			}
		}]
	}
};