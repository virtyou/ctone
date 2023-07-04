var bsize = 100, P = Math.PI, P2 = P / 2;

environments.one.cave = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2400, 2400, 2400]
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
			position: [0, -700, 500],
			scale: [4, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [0, -700, 500],
			rotation: [P, 0, 0],
			scale: [4, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [-1200, -700, 0],
			scale: [2, 5, 3]
		}, {
			coneGeometry: bsize,
			position: [-1200, -700, 0],
			rotation: [P, 0, 0],
			scale: [2, 5, 3]
		}, {
			coneGeometry: bsize,
			rotation: [P, 0, 0],
			position: [500, 1100, 500]
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
		}]
	}
};