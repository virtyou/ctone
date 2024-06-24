environments.one.gates = {
	outside: "/maps/one/sky-night.png",
	shell: {
		loader: "FBXLoader",
		scale: [80, 80, 80],
		position: [0, -600, -300],
		dimensions: [3000, 1000, 2000],
		stripset: "/models/one/fbx/castle/castle.fbx",
		onbuild: function(shelly) {
			shelly.thring.children[2].material.side = THREE.DoubleSide;
		}
	}
};