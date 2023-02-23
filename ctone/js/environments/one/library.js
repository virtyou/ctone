environments.one.library = {
	outside: "/maps/one/sky-night.png",
//	shell: {
//		texture: "/maps/one/window.png",
//		dimensions: [100, 100, 100]
//	}
	boxGeometry: [800, 800, 800],
	floor: {
		texture: "/maps/one/window.png",
		parts: [{
			planeGeometry: true,
			position: [0, 0, 0],
			scale: [8, 8, 1],
            material: {
            	transparent: true,
            	side: THREE.DoubleSide
            }
		}, {
			planeGeometry: true,
			position: [0, 400, 0],
			scale: [8, 8, 1],
            material: {
            	transparent: true,
            	side: THREE.DoubleSide
            }
		}, {
            shift: { axis: "y", mode: "recycle", speed: 60 },
			planeGeometry: true,
			position: [0, 0, 60],
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
			position: [400, 0, 0],
			scale: [8, 8, 1],
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