environments.one.library = {
	outside: "/maps/one/sky-night.png",
	boxGeometry: [1600, 1600, 1600],
	floor: {
		texture: "/maps/one/window.png",
		parts: [{
			planeGeometry: true,
			position: [-100, -300, 0],
			scale: [14, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			position: [-100, 300, 0],
			scale: [14, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			position: [-500, 600, 0],
			scale: [6, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			shift: { axis: "y", mode: "recycle", speed: 60 },
			planeGeometry: true,
			position: [-100, 0, 120],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}]
	},
	wall: {
		parts: [{
			texture: "/maps/one/window.png",
			planeGeometry: true,
			position: [800, -200, 0],
			scale: [16, 12, 1],
			rotation: [0, Math.PI / 2, 0],
			material: {
				transparent: true,
				side: THREE.BackSide
			}
		}, {
			texture: "/maps/one/stonewall.jpg",
			planeGeometry: true,
			position: [-800, 100, 0],
			scale: [24, 18, 1],
			rotation: [0, Math.PI / 2, 0]
		}]
	},
	ramp: {
		texture: "/maps/one/stonestairs.png",
		parts: [{
			planeGeometry: true,
			position: [700, 0, 0],
			scale: [2, 16, 1],
			rotation: [1.2, 0, 0],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			scroll: { speed: -0.05 },
			planeGeometry: true,
			position: [700, -600, 0],
			scale: [2, 16, 1],
			rotation: [1.2, 0, 0],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}]
	},/*
	obstacle: {
		texture: "/maps/one/stonewall.jpg",
		parts: [{

		}]
	}*/
};