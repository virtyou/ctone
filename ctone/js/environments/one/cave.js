var bsize = 100, P = Math.PI;

environments.one.cave = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2400, 2400, 2400],
	},
	stala: {
		parts: [{
			coneGeometry: 100,
			position: [500, -1100, 500]
		}, {
			coneGeometry: 100,
			position: [-500, -1100, 500]
		}, {
			coneGeometry: 100,
			position: [500, -1100, -500]
		}, {
			coneGeometry: 100,
			position: [-500, -1100, -500]
		}, {
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [500, 1100, 500]
		}, {
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [-500, 1100, 500]
		}, {
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [500, 1100, -500]
		}, {
			coneGeometry: 100,
			rotation: [P, 0, 0],
			position: [-500, 1100, -500]
		}]
	},
	boulder: {
		parts: [{
			sphereGeometry: bsize,
			sphereSegs: 5,          // 3-8     ; default 5
			geoThetaLength: P, // 0.1-2PI ; default PI
			position: [1000, -1100, 1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 3,
			geoThetaLength: P,
			position: [-1000, -1100, 1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 8,
			geoThetaLength: P,
			position: [1000, -1100, -1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: 1,
			position: [-1000, -1200, -1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: P * 2,
			position: [0, -1100, 0]
		}]
	}
};