environments.one.beneath = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2400, 2400, 2400]
	},
	wall: {
		texture: "/maps/one/stonewall.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [10, 8, 1],
			position: [-700, -800, 800]
		}, {
			planeGeometry: true,
			scale: [10, 8, 1],
			position: [700, -800, 800]
		}, {
			planeGeometry: true,
			scale: [18, 8, 1],
			position: [-200, -800, -100],
			rotation: [0, Math.PI / 2, 0]
		}, {
			planeGeometry: true,
			scale: [18, 8, 1],
			position: [200, -800, -100],
			rotation: [0, Math.PI / 2, 0]
		}]
	},
	floor: {
		texture: "/maps/one/rock.jpg",
		material: {
			side: THREE.BackSide
		},
		parts: [{
			planeGeometry: true,
			scale: [14, 2, 1],
			position: [500, -1000, -1100]
		}, {
			planeGeometry: true,
			scale: [10, 20, 1],
			position: [-700, -1000, -200]
		}]
	},
	ramp: {
		texture: "/maps/one/stonewall.jpg",
		material: {
			transparent: true,
			side: THREE.BackSide
		},
		parts: [{
			planeGeometry: true,
			scale: [14, 4, 1],
			rotation: [2.1, 0, 0],
			position: [500, -1100, -830]
		}]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [700, -300, -1000],
			dimensions: [1000, 1200, 400]
		}]
	}
};