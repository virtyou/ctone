environments.one.apartment = {
	texture: "/maps/one/yellowcloth.jpg",
	shell: {
		dimensions: [120, 500, 800]
	},
	electrical: {
		circuits: {
			default: {
				building: {}
			}
		},
		appliances: {
			panel: {
				parts: [{
					position: [0, -150, 400],
					rotation: [0, Math.PI, 0],
					lever: [{ circuit: "building" }]
				}, {
					position: [60, -170, -250],
					rotation: [0, -Math.PI / 2, 0],
					button: [{ appliance: "elevator0", order: "bottom"}]
				}, {
					position: [60, 0, -250],
					rotation: [0, -Math.PI / 2, 0],
					button: [{ appliance: "elevator0", order: "obstacle0"}]
				}, {
					position: [60, 170, -250],
					rotation: [0, -Math.PI / 2, 0],
					button: [{ appliance: "elevator0", order: "obstacle1"}]
				}]
			},
			gate: {
				parts: [{
					width: 120,
					height: 160,
					position: [0, -170, 300],
					rotation: [0, Math.PI, 0],
					door: {
						texture: "/maps/one/metaldoor.png"
					}
				}]
			},
			elevator: {
				parts: [{
					circuit: "building",
					position: [0, 0, -340],
					template: "templates.one.appliance.elevator"
				}]
			},
			bulb: {
				circuit: "building",
				parts: [{
					position: [0, 245, 50],
					rotation: [Math.PI, 0, 0]
				}, {
					position: [0, 75, 50],
					rotation: [Math.PI, 0, 0]
				}, {
					position: [0, -95, 50],
					rotation: [Math.PI, 0, 0]
				}]
			}
		}
	},
	obstacle: {
		texture: "/maps/one/rug4.jpg",
		parts: [{
			position: [0, -85, 60],
			dimensions: [120, 10, 680]
		}, {
			position: [0, 85, 60],
			dimensions: [120, 10, 680]
		}]
	}
};