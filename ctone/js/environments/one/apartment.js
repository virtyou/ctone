environments.one.apartment = {
	texture: "/maps/one/yellowcloth.jpg",
	shadows: true,
	shell: {
		dimensions: [500, 600, 500]
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
					variety: "spooky",
					circuit: "building",
					position: [0, 0, -20]
				}]
			},
			gate: {
				parts: [{
					variety: "wood",
					position: [-110, -55, 50]
				}, {
					variety: "wood",
					position: [110, -55, 50]
				}, {
					variety: "wood",
					position: [-110, 150, 50]
				}, {
					variety: "wood",
					position: [110, 150, 50]
				}]
			},
			bulb: {
				circuit: "building",
				parts: [{
					invariance: 6,
					intensity: 0.6,
					position: [0, 295, 150],
					rotation: [Math.PI, 0, 0]
				}, {
					flickRate: 3,
					invariance: 4,
					intensity: 0.6,
					position: [0, 65, 150],
					rotation: [Math.PI, 0, 0]
				}, {
					flickRate: 2,
					invariance: 2,
					intensity: 0.2,
					position: [0, -145, 150],
					rotation: [Math.PI, 0, 0]
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
			position: [0, -140, 150],
			scale: [5, 2, 1]
		}, {
			planeGeometry: true,
			position: [0, 70, 150],
			scale: [5, 2, 1]
		}]
	},
	wall: {
		texture: "/maps/one/yellowcloth.jpg",
		material: {
			side: THREE.DoubleSide
		},
		parts: [{
			planeGeometry: true,
			scale: [0.8, 1.3, 1],
			position: [-110, 235, -90]
		}, {
			planeGeometry: true,
			scale: [3, 0.65, 1],
			position: [0, 270, 50],
			state: "nobump"
		}, {
			planeGeometry: true,
			scale: [3, 0.45, 1],
			position: [0, 48, 51],
			state: "nobump"
		}]
	},
	obstacle: {
		texture: "/maps/one/rug4.jpg",
		parts: [{
			position: [-205, -140, -100],
			dimensions: [90, 10, 300]
		}, {
			position: [205, -140, -100],
			dimensions: [90, 10, 300]
		}, {
			position: [-205, 70, -100],
			dimensions: [90, 10, 300]
		}, {
			position: [205, 70, -100],
			dimensions: [90, 10, 300]
		}, {
			position: [0, -270, -170],
			dimensions: [300, 60, 160]
		}, {
			position: [0, -30, -170],
			dimensions: [300, 10, 160]
		}, {
			position: [0, 170, -170],
			dimensions: [300, 2, 160]
		}, {
			texture: "/maps/one/yellowcloth.jpg",
			position: [-155, 0, -100],
			dimensions: [10, 600, 300]
		}, {
			texture: "/maps/one/yellowcloth.jpg",
			position: [155, 0, -100],
			dimensions: [10, 600, 300]
		}]
	},
	stairs: {
		texture: "/maps/one/bluefab.jpg",
		parts: [{
			height: 15,
			position: [110, 120, -20]
		}, {
			height: 15,
			position: [-110, 18, -20],
			rotation: [0, Math.PI, 0]
		}, {
			height: 16,
			position: [110, -80, -20]
		}, {
			height: 15,
			position: [-110, -190, -20],
			rotation: [0, Math.PI, 0]
		}, {
			height: 8,
			position: [110, -270, -20]
		}]
	}
};