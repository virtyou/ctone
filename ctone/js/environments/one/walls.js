environments.one.walls = {
	matcat: "Phong",
	boxGeometry: [6400, 6400, 6400],
	material: { side: THREE.BackSide },
	ramp: {
		
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			dimensions: [4800, 6400, 4800]
		}, {
			position: [-400, 4800, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [400, 3200, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [-400, 1600, 0],
			dimensions: [5600, 800, 6400]
		}]
	}
};