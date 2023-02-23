environments.one.library = {
	outside: "/maps/one/sky-night.png",
//	shell: {
//		texture: "/maps/one/window.png",
//		dimensions: [100, 100, 100]
//	}
	boxGeometry: [1600, 1600, 1600],
	floor: {
		texture: "/maps/one/window.png",
		parts: [{
			planeGeometry: true,
			position: [-50, -300, 0],
			scale: [15, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			position: [-50, 300, 0],
			scale: [15, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			planeGeometry: true,
			position: [-400, 600, 0],
			scale: [8, 16, 1],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}, {
			shift: { axis: "y", mode: "recycle", speed: 60 },
			planeGeometry: true,
			position: [0, 0, 120],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}]
	},
	wall: {
		texture: "/maps/one/window.png",
		parts: [{
			planeGeometry: true,
			position: [800, -200, 0],
			scale: [16, 12, 1],
			rotation: [0, Math.PI / 2, 0],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}]
	},
/*	obstacle: {

	},
	ramp: {

	}*/
};