templates.one.appliance = {
	waterheater: {
		rusty: {
			tank: {
				texture: "/maps/one/watheat.jpg"
			}
		}
	},
	elevator: {
		spooky: {
			stepper: "hard",
			walltex: "/maps/one/bluefab.jpg",
			floortex: "/maps/one/bunny_teeth.jpg",
			light: {
				invariance: 5,
				intensity: 0.4
			},
			door: {
				texture: "/maps/one/edoor.png",
				material: {
					transparent: true
				}
			},
			floordoor: {
				texture: "/maps/one/rusty.jpg"
			}
		}
	},
	gate: {
		wood: {
			width: 80,
			height: 160,
			door: {
				texture: "/maps/one/woodoor.jpg"
			}
		},
		metal: {
			door: {
				texture: "/maps/one/metaldoor.png"
			}
		},
		chain: {
			door: {
				texture: "/maps/one/chainlink4.png",
				receiveShadow: false,
				castShadow: false,
				material: {
					transparent: true
				}
			}
		}
	},
	computer: {
		tablet: {
			keyboard: false,
			screenPos: [0, 0, 0],
			screenDims: [14, 18],
			parts: [{
				name: "base",
				position: [0, 0, -1],
				boxGeometry: [16, 20, 1]
			}]
		},
		lcd: {
			keyboard: true,
			screenPos: [0, 15, 12],
			screenDims: [22, 16],
			parts: [{
				name: "base",
				halfSphere: 8,
				position: [0, -1, 0]
			}, {
				name: "stem",
				coneGeometry: true,
				position: [0, 10, 0],
				scale: [5, 5, 2]
			}, {
				name: "ball",
				sphereGeometry: 3,
				position: [0, 15, 0]
			}, {
				name: "arm",
				coneGeometry: true,
				position: [0, 15, 5],
				rotation: [-Math.PI / 2, 0, 0],
				scale: [10, 5, 2]
			}, {
				name: "monitor",
				boxGeometry: [24, 18, 3],
				position: [0, 15, 10]
			}]
		},
		crt: {
			keyboard: true,
			screenPos: [0, 19, 11],
			screenDims: [15, 15],
			parts: [{
				name: "base",
				position: [0, 4, 0],
				boxGeometry: [30, 10, 30]
			}, {
				name: "back",
				halfSphere: 8,
				position: [0, 19, 0],
				rotation: [-Math.PI / 2, 0, 0]
			}, {
				name: "monitor",
				position: [0, 19, 5],
				boxGeometry: [20, 20, 12]
			}]
		}
	}
};

zero.core.Appliance.templates = templates.one.appliance;