var bsize = 100, P = Math.PI, P2 = P / 2;

environments.one.cave = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2400, 2400, 2400]
	},
	wall: {
		texture: "/maps/one/web1.png",
		parts: [{
			flammable: true,
			planeGeometry: true,
			position: [1000, -1000, -150],
			rotation: [0, Math.PI / 2, 0],
			scale: [8, 6, 1],
			material: {
				transparent: true,
				side: THREE.BackSide
			}
		}]
	},
	obstacle: {
		texture: "/maps/one/rock.jpg",
		parts: [{
			position: [0, -150, 0],
			dimensions: [1200, 100, 1200]
		}, {
			position: [1000, -1150, -150],
			dimensions: [500, 100, 500]
		}]
	},
	stala: {
		parts: [{
//			brittle: true,
			coneGeometry: bsize,
			position: [1000, -1100, 500],
			rotation: [P, 0, 0],
			scale: [2, 4, 5]
		}, {
			coneGeometry: bsize,
			position: [1000, -1100, -1000],
			rotation: [P, 0, 0],
			scale: [6, 7, 8]
		}, {
			coneGeometry: bsize,
			position: [200, -700, 300],
			scale: [4, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [200, -700, 300],
			rotation: [P, 0, 0],
			scale: [4, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [-1200, -700, 0],
			scale: [2, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [-1200, -500, 0],
			rotation: [P, 0, 0],
			scale: [2, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [-1200, -700, -1200],
			rotation: [P, 0, 0],
			scale: [10, 5, 10]
		}, {
			coneGeometry: bsize,
			rotation: [P, 0, 0],
			position: [500, 1100, 500]
		}, {
			coneGeometry: bsize,
			scale: [5, 5, 5],
			rotation: [P, 0, 0],
			position: [1200, 700, 1200]
		}, {
			coneGeometry: bsize,
			rotation: [P, 0, 0],
			position: [-500, 1100, 500]
		}, {
			coneGeometry: bsize,
			rotation: [P, 0, 0],
			position: [500, 1100, -500]
		}, {
			coneGeometry: bsize,
			rotation: [P, 0, 0],
			position: [-500, 1100, -500]
		}]
	},
	boulder: {
		parts: [{
			sphereGeometry: bsize,
			sphereSegs: 3,
			geoThetaLength: P,
			position: [-1000, -1100, 1000],
			rotation: [0, 0, P2],
			scale: [1, 5, 5]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: P * 2,
			position: [0, -1000, 1100],
			rotation: [P, 0, 0],
			scale: [10, 1, 1]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,          // 3-8     ; default 5
			geoThetaLength: P, // 0.1-2PI ; default PI
			position: [1000, -900, 1000],
			rotation: [0, 0, P2],
			scale: [1, 5, 5]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 8,
			geoThetaLength: P,
			position: [1200, -650, -100],
			scale: [3, 1, 2]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: 1,
			position: [-1000, -2300, -1000],
			scale: [10, 20, 10]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			position: [0, -350, -1000],
			scale: [12, 1, 3]
		}]
	}
};