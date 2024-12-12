environments.one.apartment = {
	texture: "/maps/one/yellowcloth.jpg",
	shadows: true,
	shell: {
		dimensions: [500, 500, 500]
	},
	electrical: {
		circuits: {
			default: {
				building: {}
			}
		},
		appliances: {
			elevator: {
				parts: [{
					circuit: "building",
					position: [0, 0, 0],
					template: "templates.one.appliance.elevator.spooky"
				}]
			}
		}
	},
	floor: {
		texture: "/maps/one/rug4.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			position: [0, -85, 400],
			scale: [5, 2, 1]
		}, {
			planeGeometry: true,
			position: [0, 85, 400],
			scale: [5, 2, 1]
		}]
	},
	obstacle: {
		texture: "/maps/one/rug4.jpg",
		parts: [{
			position: [-200, -85, -100],
			dimensions: [100, 10, 300]
		}, {
			position: [200, -85, -100],
			dimensions: [100, 10, 300]
		}, {
			position: [-200, 85, -100],
			dimensions: [100, 10, 300]
		}, {
			position: [200, 85, -100],
			dimensions: [100, 10, 300]
		}]
	}
};