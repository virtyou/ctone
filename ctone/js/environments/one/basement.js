var P = Math.PI, P2 = P / 2;

environments.one.basement = {
	texture: "/maps/one/bluecloth.jpg",
	shadows: true,
	shell: {
		dimensions: [400, 160, 800]
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
					position: [160, 0, -400],
					lever: [{ circuit: "building" }]
				}, {
					position: [-200, 0, -200],
					rotation: [0, -P2, 0],
					switch: [{ circuit: "bulb0" }]
				}]
			},
			gate: {
				parts: [{
					position: [150, -30, -100],
					rotation: [0, P, 0],
					variety: "chain"
				}, {
					position: [100, -30, 350],
					rotation: [0, P2, 0],
					variety: "chain"
				}]
			},
			bulb: {
				circuit: "building",
				parts: [{
					invariance: 2,
					intensity: 0.4,
					position: [0, 76, 0],
					rotation: [P, 0, 0]
				}]
			},
			waterheater: {
				circuit: "building",
				parts: [{
					variety: "rusty",
					position: [10, -20, 350],
					rotation: [0, Math.PI, 0]
				}]
			}
		}
	},
	clutter: {
		parts: [{
			position: [-100, 0, 350]
		}]
	},
	wall: {
		material: {
			transparent: true,
			side: THREE.DoubleSide
		},
		parts: [{
			texture: "/maps/one/chainlink6.png",
			planeGeometry: true,
			scale: [3, 1, 1],
			rotation: [0, P2, 0],
			position: [100, -30, -250]
		}, {
			texture: "/maps/one/chainlink6.png",
			planeGeometry: true,
			scale: [3, 1, 1],
			position: [-50, -30, 100]
		}, {
			texture: "/maps/one/chainlink5.png",
			planeGeometry: true,
			scale: [2, 1, 1],
			rotation: [0, P2, 0],
			position: [100, -30, 200]
		}]
	}
};