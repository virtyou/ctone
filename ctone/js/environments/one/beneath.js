var P = Math.PI, P2 = P / 2, P4 = P2 / 2;

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
			texture: "/maps/one/web1.png",
			planeGeometry: true,
			flammable: true,
			scale: [2, 2, 1],
			rotation: [0, P2, 0],
			position: [-1000, -900, -1100],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			scale: [8, 8, 1],
			position: [-600, -800, 800]
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
		}, {
			planeGeometry: true,
			scale: [18, 8, 1],
			position: [-1000, -800, -100],
			rotation: [0, P2, 0]
		}]
	},
	floor: {
		texture: "/maps/one/rock.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [14, 2, 1],
			position: [500, -1000, -1100]
		}, {
			planeGeometry: true,
			scale: [8, 20, 1],
			position: [-600, -1000, -200]
		}, {
			texture: "/maps/one/stonewall.jpg",
			planeGeometry: true,
			scale: [22, 4, 1],
			position: [100, -400, 1000]
		}]
	},
	ramp: {
		texture: "/maps/one/stonewall.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [14, 4, 1],
			rotation: [2.1, 0, 0],
			position: [500, -1100, -830]
		}, {
			planeGeometry: true,
			scale: [1, 11, 1],
			rotation: [2.1, 0, 0],
			position: [-1050, -925, 275]
		}, {
			planeGeometry: true,
			scale: [1, 12, 1],
			rotation: [-2.2, 0, 0],
			position: [-1150, -290, -450]
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
			position: [0, 350, 0],
			dimensions: [1000, 100, 1000]
		}, {
			position: [-350, -175, -350],
			dimensions: [300, 950, 300]
		}, {
			position: [-700, -700, -700],
			dimensions: [1000, 100, 1000]
		}, {
			position: [-1100, 0, -1100],
			dimensions: [200, 1300, 200]
		}, {
			position: [-1050, 100, 100],
			dimensions: [100, 1000, 2200]
		}, {
			position: [-600, 200, 300],
			dimensions: [800, 200, 400]
		}, {
			position: [700, -1150, 0],
			dimensions: [200, 100, 200]
		}]
	},
	stala: {
		texture: "/maps/one/rock2.jpg",
		parts: [{
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [-200, -900, 800]
		}, {
			coneGeometry: 300,
			scale: [1, 1, 0.5],
			rotation: [P, 0, 0],
			position: [-400, 900, -1200]
		}, {
			coneGeometry: 600,
			rotation: [P, 0, 0],
			position: [1200, 600, 1200]
		}, {
			coneGeometry: 600,
			scale: [2, 0.2, 2],
			rotation: [P, 0, 0],
			position: [-1200, -20, 1200]
		}, {
			coneGeometry: 600,
			scale: [3, 0.2, 1.5],
			rotation: [P, 0, 0],
			position: [-1200, 1080, 1200]
		}, {
			coneGeometry: 600,
			scale: [2, 0.3, 1],
			rotation: [P, 0, 0],
			position: [1200, 120, 0]
		}, {
			coneGeometry: 600,
			scale: [2, 0.2, 2],
			rotation: [P, 0, 0],
			position: [1200, 1080, -1200]
		}]
	},
	boulder: {
		texture: "/maps/one/rock3.jpg",
		parts: [{
			brittle: true,
			sphereSegs: 4,
			sphereGeometry: 100,
			position: [-1050, 700, -900],
			rotation: [0, P4, 0]
		}]
	}
};