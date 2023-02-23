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
	ramp: {
		texture: "/maps/one/window.png", // TODO: stairs texture...
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
			planeGeometry: true,
			position: [700, -600, 0],
			scale: [2, 16, 1],
			rotation: [1.2, 0, 0],
			material: {
				transparent: true,
				side: THREE.DoubleSide
			}
		}]
	},
/*	obstacle: {

	},*/
};