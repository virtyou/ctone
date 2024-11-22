environments.one.apartment = {
	texture: "/maps/one/cloth.jpg",
	shell: {
		dimensions: [150, 500, 800]
	},
	electrical: {
		circuits: {
			default: {
				building: {}
			}
		},
		appliances: [{
			thing: "Panel",
			lever: [{ circuit: "building" }],
			position: [0, -200, 400],
			rotation: [0, Math.PI, 0]
		}, {
			appliance: "Elevator",
			circuit: "building",
			template: "templates.one.appliance.elevator",
			position: [0, 0, -340]
		}, {
			name: "bulb0",
			appliance: "Bulb",
			circuit: "building",
			position: [0, 245, 50],
			rotation: [Math.PI, 0, 0]
		}, {
			name: "bulb1",
			appliance: "Bulb",
			circuit: "building",
			position: [0, 75, 50],
			rotation: [Math.PI, 0, 0]
		}, {
			name: "bulb2",
			appliance: "Bulb",
			circuit: "building",
			position: [0, -95, 50],
			rotation: [Math.PI, 0, 0]
		}]
	},
	obstacle: {
		texture: "/maps/one/rug4.jpg",
		parts: [{
			position: [0, -85, 60],
			dimensions: [150, 10, 680]
		}, {
			position: [0, 85, 60],
			dimensions: [150, 10, 680]
		}]
	}
};