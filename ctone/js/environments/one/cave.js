var bsize = 100;

environments.one.cave = {
	shell: {
		texture: "/maps/one/rock3.jpg",
		dimensions: [2400, 2400, 2400],
	},
	boulder: {
		texture: "/maps/one/rock3.jpg",
		parts: [{
			sphereGeometry: bsize,
			sphereSegs: 5,          // 3-8     ; default 5
			geoThetaLength: Math.PI, // 0.1-2PI ; default PI
			position: [1000, -1000, 1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 3,
			geoThetaLength: Math.PI,
			position: [-1000, -1000, 1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 8,
			geoThetaLength: Math.PI,
			position: [1000, -1000, -1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: 0.1,
			position: [-1000, -1000, -1000]
		}, {
			sphereGeometry: bsize,
			sphereSegs: 5,
			geoThetaLength: Math.PI * 2,
			position: [0, -1000, 0]
		}]
	}
};