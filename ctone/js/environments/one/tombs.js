environments.one.tombs = {
	texture: "/maps/one/rock3.jpg",
	shell: {
		dimensions: [2000, 1200, 2000]
	},
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{
			position: [-500, 0, 750],
			dimensions: [1000, 400, 500]
		}, {
			position: [-500, 0, -750],
			dimensions: [1000, 300, 500]
		}, {
			position: [500, 0, -800],
			dimensions: [1000, 600, 400]
		}, {
			position: [-800, 175, -800],
			dimensions: [100, 50, 100]
		}, {
			position: [-200, 175, -800],
			dimensions: [100, 50, 100]
		}, {
			position: [-400, 150, 450],
			dimensions: [800, 100, 100]
		}, {
			position: [400, 250, -550],
			dimensions: [800, 100, 100]
		}]
	},
	ramp: {
		texture: "/maps/one/stonewall.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [2, 16, 1],
			rotation: [-2.1, 0, 0],
			position: [-900, -200, -190]
		}, {
			planeGeometry: true,
			scale: [2, 16, 1],
			rotation: [2.15, 0, 0],
			position: [900, -150, 70]
		}]
	}
};

var tx, coff = function(p) {
	environments.one.tombs.obstacle.parts.push({
		position: p,
		dimensions: [150, 30, 50],
		texture: "/maps/one/rock5.jpg"
	});
};

for (tx of [-900, -700, -500, -300, -100])
	coff([tx, 165, -550]);
for (tx of [-700, -500, -300, -100])
	coff([tx, 215, 450]);
for (tx of [100, 300, 500, 700])
	coff([tx, 315, -550]);