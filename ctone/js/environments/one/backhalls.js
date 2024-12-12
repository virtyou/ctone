environments.one.backhalls = {
	texture: "/maps/one/yellowcloth.jpg",
	shadows: true,
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
					switch: [{ circuit: "bulb0" }, { circuit: "bulb1" }, { circuit: "bulb2" }]
				}, {
					position: [60, -170, -200],
					rotation: [0, -Math.PI / 2, 0],
					button: [{ appliance: "elevator0", order: "bottom"}]
				}, {
					position: [60, 0, -200],
					rotation: [0, -Math.PI / 2, 0],
					button: [{ appliance: "elevator0", order: "obstacle0"}]
				}, {
					position: [60, 170, -200],
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
					template: "templates.one.appliance.gate.metal"
				}]
			},
			elevator: {
				parts: [{
					circuit: "building",
					position: [0, 0, -340],
					template: "templates.one.appliance.elevator.spooky"
				}]
			},
			bulb: {
				circuit: "building",
				parts: [{
					invariance: 6,
					intensity: 0.6,
					position: [0, 245, 50],
					rotation: [Math.PI, 0, 0]
				}, {
					flickRate: 3,
					invariance: 4,
					intensity: 0.6,
					position: [0, 75, 50],
					rotation: [Math.PI, 0, 0]
				}, {
					flickRate: 2,
					invariance: 2,
					intensity: 0.2,
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