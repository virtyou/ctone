environments.one.hill = {
	outside: "/maps/one/sky-day.jpg",
	boxGeometry: [8000, 2000, 8000],
	obstacle: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			position: [0, -700, -2000],
			dimensions: [8000, 200, 4000]
		}, {
			position: [0, -400, -2400],
			dimensions: [4000, 400, 2000]
		}, {
			position: [0, -450, 0],
			dimensions: [2000, 1100, 2000]
		}, {
			position: [0, -1400, 1700],
			dimensions: [8000, 400, 600]
		}, {
			position: [2100, -400, -2900],
			dimensions: [200, 400, 1000]
		}]
	},
	floor: {
		texture: "/maps/one/leaves.jpg",
		material: {
			side: THREE.BackSide
		},
		parts: [{
			planeGeometry: true,
			position: [0, -2000, 3700],
			scale: [80, 6, 1]
		}, {
			planeGeometry: true,
			position: [0, -1600, 2500],
			scale: [80, 10, 1]
		}, {
			planeGeometry: true,
			position: [0, -800, 300],
			scale: [80, 6, 1]
		}]
	},
	ramp: {
		texture: "/maps/one/leaves.jpg",
		material: {
			side: THREE.BackSide
		},
		parts: [{
			planeGeometry: true,
			scale: [80, 6, 1],
			rotation: [2.3, 0, 0],
			position: [0, -1800, 3200]
		}, {
			planeGeometry: true,
			side: "left",
			scale: [40, 6, 6],
			rotation: [2.3, 0, 0],
			position: [2000, -1400, 2200]
		}, {
			planeGeometry: true,
			scale: [80, 10, 1],
			rotation: [2, 0, 0],
			position: [0, -1000, 1000]
		}, {
			planeGeometry: true,
			side: "right",
			scale: [10, 5, 5],
			rotation: [2, 0, 0],
			position: [-3500, -700, 230]
		}, {
			planeGeometry: true,
			side: "right",
			scale: [2, 10, 6],
			rotation: [2, 0, 0],
			position: [2100, -400, -1950]
		}, {
			planeGeometry: true,
			side: "both",
			scale: [5, 5, 5],
			rotation: [-2.2, 0, 0],
			position: [0, -50, -1200],
			material: {
				side: THREE.DoubleSide
			}
		}]
	}
};