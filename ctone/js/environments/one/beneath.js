var P = Math.PI, P2 = P / 2;

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
			texture: "/maps/one/web1.png",
			planeGeometry: true,
			flammable: true,
			scale: [2, 2, 1],
			rotation: [0, P2, 0],
			position: [-200, -900, -1100],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			scale: [10, 8, 1],
			position: [-700, -800, 800]
		}, {
			planeGeometry: true,
			scale: [10, 8, 1],
			position: [700, -800, 800]
		}, {
			planeGeometry: true,
			scale: [18, 4, 1],
			position: [-200, -1000, -100],
			rotation: [0, P2, 0]
		}, {
			planeGeometry: true,
			scale: [18, 4, 1],
			position: [199, -1000, -100],
			rotation: [0, P2, 0]
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
		}, {
			planeGeometry: true,
			scale: [24, 4, 1],
			position: [0, -400, 1000],
			material: {
				side: THREE.DoubleSide
			}
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
			climby: true,
			position: [700, -300, -1000],
			dimensions: [1000, 1200, 400]
		}, {
			climby: true,
			position: [0, -600, -200],
			dimensions: [400, 400, 2000]
		}, {
			position: [0, 400, 0],
			dimensions: [1000, 200, 1000]
		}, {
			position: [-350, -200, -350],
			dimensions: [300, 1000, 300]
		}, {
			position: [-700, -700, -700],
			dimensions: [1000, 100, 1000]
		}]
	},
	stala: {
		texture: "/maps/one/rock2.jpg",
		parts: [{
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [-200, -900, 800]
		}, {
			coneGeometry: 600,
			rotation: [P, 0, 0],
			position: [-1200, 600, -1200]
		}, {
			coneGeometry: 600,
			rotation: [P, 0, 0],
			position: [1200, 600, 1200]
		}, {
			coneGeometry: 600,
			scale: [2, 0.2, 2],
			rotation: [P, 0, 0],
			position: [-1200, 180, 1200]
		}, {
			coneGeometry: 600,
			scale: [3, 0.2, 1.5],
			rotation: [P, 0, 0],
			position: [-1200, 1100, 1200]
		}, {
			coneGeometry: 600,
			scale: [2, 0.5, 1],
			rotation: [P, 0, 0],
			position: [1200, 0, 0]
		}, {
			coneGeometry: 600,
			scale: [2, 0.2, 2],
			rotation: [P, 0, 0],
			position: [1200, 1100, -1200]
		}]
	}
};