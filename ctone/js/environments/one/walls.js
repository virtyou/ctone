environments.one.walls = {
	matcat: "Phong",
	boxGeometry: [6400, 6400, 6400],
	material: { side: THREE.BackSide },
	ramp: {
		texture: "/maps/one/stonestairs.png",
		parts: [{
			planeGeometry: true,
			position: [3000, 1200, 0],
			rotation: [2, 0, 0],
			scale: [4, 200, 1],
			material: {
				transparent: true
			}
		}, {
			planeGeometry: true,
			position: [-3000, -400, 0],
			rotation: [-2, 0, 0],
			scale: [4, 200, 1],
			material: {
				transparent: true
			}
		}, {
			planeGeometry: true,
			position: [3000, -2000, 0],
			rotation: [-2, 0, 0],
			scale: [4, 200, 1],
			material: {
				transparent: true
			}
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [0, 400, 0],
			dimensions: [4800, 5600, 4800]
		}, {
			position: [-400, 1600, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [400, 0, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [400, -1600, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [2800, -1500, 0],
			dimensions: [800, 3400, 1600]
		}, {
			position: [-2400, -1000, 2400],
			dimensions: [800, 4400, 800]
		}, {
			position: [-2400, -1000, -2400],
			dimensions: [800, 4400, 800]
		}]
	}
};