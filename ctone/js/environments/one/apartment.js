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
		appliances: [{
			thing: "Panel",
			name: "panel0",
			lever: [{ circuit: "building" }],
			position: [0, -150, 400],
			rotation: [0, Math.PI, 0]
		}, {
			name: "gate0",
			appliance: "Gate",
			width: 120,
			height: 160,
			position: [0, -170, 300],
			rotation: [0, Math.PI, 0],
			door: {
				texture: "/maps/one/metaldoor.png"
			}
		}, {
			name: "elevator0",
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
			dimensions: [120, 10, 680]
		}, {
			position: [0, 85, 60],
			dimensions: [120, 10, 680]
		}]
	}
};