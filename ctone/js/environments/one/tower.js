environments.one.tower = {
	outside: "/maps/one/sky-day.jpg",
	boxGeometry: [8000, 4000, 8000],
	obstacle: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			position: [0, -3600, -2000],
			dimensions: [8000, 800, 4000]
		}, {
			position: [0, -2800, -2000],
			dimensions: [4000, 800, 2000]
		}, {
			position: [0, -2500, 0],
			dimensions: [2000, 3000, 2000]
		}]
	},
	floor: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			planeGeometry: true,
			position: [0, -4000, 2000],
			scale: [80, 40, 1],
			material: {
				side: THREE.BackSide
			}
		}]
	}
};