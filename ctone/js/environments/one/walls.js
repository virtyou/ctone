environments.one.walls = {
	matcat: "Phong",
	boxGeometry: [6400, 6400, 6400],
	texture: "/maps/one/stonewall.jpg",
	material: { side: THREE.BackSide },
	ramp: {
		texture: "/maps/one/stonestairs.png",
		material: {
			transparent: true,
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			position: [3000, 1200, 0],
			rotation: [1.815, 0, 0],
			scale: [4, 70, 1]
		}, {
			planeGeometry: true,
			position: [-3000, -400, 0],
			rotation: [-1.815, 0, 0],
			scale: [4, 70, 1]
		}, {
			planeGeometry: true,
			position: [-3000, -2000, 0],
			rotation: [-1.815, 0, 0],
			scale: [4, 70, 1]
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [0, 400, 0],
			dimensions: [4800, 5600, 4800]
		}, {
			position: [-200, 1600, 0],
			dimensions: [6000, 800, 6400]
		}, {
			position: [200, 0, 0],
			dimensions: [6000, 800, 6400]
		}, {
			position: [200, -1600, 0],
			dimensions: [6000, 800, 6400]
		}, {
			position: [2800, -1300, 0],
			dimensions: [800, 3800, 1600]
		}, {
			position: [-2200, -1000, 2200],
			dimensions: [800, 4400, 800]
		}, {
			position: [-2200, -1000, -2200],
			dimensions: [800, 4400, 800]
		}]
	}
};