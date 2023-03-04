environments.one.walls = {
	matcat: "Phong",
	boxGeometry: [6400, 6400, 6400],
	material: { side: THREE.BackSide },
	ramp: {
		texture: "/maps/one/stonestairs.png",
		parts: [{
			planeGeometry: true,
			position: [2800, 1200, 0],
			rotation: [-2, 0, 0],
			scale: [8, 200, 1],
			material: {
				transparent: true
			}
		}, {
			planeGeometry: true,
			position: [-2800, -400, 0],
			rotation: [2, 0, 0],
			scale: [8, 200, 1],
			material: {
				transparent: true
			}
		}, {
			planeGeometry: true,
			position: [2800, -2000, 0],
			rotation: [-2, 0, 0],
			scale: [8, 200, 1],
			material: {
				transparent: true
			}
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			dimensions: [4800, 6400, 4800]
		}, {
			position: [-400, 1600, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [400, 0, 0],
			dimensions: [5600, 800, 6400]
		}, {
			position: [-400, -1600, 0],
			dimensions: [5600, 800, 6400]
		}]
	}
};