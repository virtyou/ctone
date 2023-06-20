environments.one.peak = {
	outside: "/maps/one/sky-day.jpg",
	boxGeometry: [1024, 1024, 1024],
	obstacle: {
		texture: "/maps/one/leaves.jpg",
		parts: [{
			position: [0, -1024, 0],
			dimensions: [1024, 1024, 1024]
		}]
	},
	boulder: {
		texture: "/maps/one/rock3.jpg",
		parts: [{
			sphereSegs: 5,
			sphereGeometry: 1024,
			position: [1300, -200, 0],
			rotation: [0, Math.PI, 0]
		}, {
			brittle: true,
			sphereSegs: 4,
			sphereGeometry: 100,
			position: [450, -450, 450],
			rotation: [0, Math.PI / 4, 0]
		}]
	}
};