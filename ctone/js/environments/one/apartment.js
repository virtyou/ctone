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
					position: [0, 0, -20],
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
			position: [0, -85, 150],
			scale: [5, 2, 1]
		}, {
			planeGeometry: true,
			position: [0, 85, 150],
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
		}, {
			position: [0, -210, -175],
			dimensions: [300, 80, 150]
		}, {
			position: [0, -50, -175],
			dimensions: [300, 80, 150]
		}, {
			position: [0, 115, -175],
			dimensions: [300, 50, 150]
		}]
	},
	stairs: {
		texture: "/maps/one/bluefab.jpg",
		parts: [{
			position: [-110, 40, -35],
			rotation: [0, Math.PI, 0]
		}, {
			position: [110, -40, -35]
		}, {
			position: [-110, -120, -35],
			rotation: [0, Math.PI, 0]
		}, {
			position: [110, -200, -35]
		}]
	}
};