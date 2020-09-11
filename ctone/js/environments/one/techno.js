environments.one.techno = {
    shell: {
        texture: "/maps/one/bg7.jpg",
        dimensions: [111, 111, 111, 7, 5],
        material: {
            color: 0xcccccc
        },
        scale: [-44, 44, 44]
    },
    floor: {
        texture: "/maps/one/graph_paper.jpg",
        material: {
            color: 0xcccccc
        },
        parts: [{
            scroll: { axis: "x" },
            stripset: "/models/one/plane.js",
            position: [0, -77, -260],
            scale: [2270, 2160, 1300]
        }, {
            scroll: true,
            stripset: "/models/one/plane.js",
            position: [0, 170, -660],
            scale: [427, 216, 130],
            material: { side: THREE.DoubleSide }
        }, {
            stripset: "/models/one/plane.js",
            position: [0, 100, 700],
            scale: [427, 216, 130],
            material: { side: THREE.DoubleSide }
        }, {
            stripset: "/models/one/plane.js",
            position: [0, 2000, 700],
            scale: [427, 216, 130],
            material: { side: THREE.DoubleSide },
            parts: [{
                name: "fire",
                kind: "elight",
                thing: "Fire",
                rotation: [-1.57, 0, 0],
                scale: [4 / 427, 4 / 130, 4 / 216]
            }]
        }, {
            shift: { axis: "x" },
            stripset: "/models/one/plane.js",
            position: [0, 100, 1200],
            scale: [427, 216, 130],
            material: { side: THREE.DoubleSide }
        }, {
            shift: true,
            stripset: "/models/one/plane.js",
            position: [700, 100, 700],
            scale: [216, 427, 130],
            material: { side: THREE.DoubleSide }
        }, {
            shift: { axis: "y", mode: "recycle" },
            stripset: "/models/one/plane.js",
            position: [2220, 100, 2120],
            scale: [216, 216, 130],
            material: { side: THREE.DoubleSide }
        }, {
            shift: { axis: "y", mode: "recycle" },
            stripset: "/models/one/plane.js",
            position: [-2220, 100, 2120],
            scale: [216, 216, 130],
            material: { side: THREE.DoubleSide }
        }]
    },
    //wall: { ... }
    obstacle: {
        texture: "/maps/one/bg7.jpg",
        dimensions: [111, 111, 111, 7, 5],
        material: {
            color: 0xcccccc
        },
        parts: [{
            repeat: [10, 1],
            scale: [9, 3, .5],
            position: [900, -43, -770]
        }, {
            repeat: [10, 1],
            scale: [9, 3, .5],
            position: [-470, -43, -1470],
            rotation: [0, 6.28 / 4, 0]
        }, {
            repeat: [10, 1],
            scale: [9, 2, .5],
            position: [-570, -43, -770],
            rotation: [0, 6.28 / 4, 0]
        }, {
            repeat: [10, 1],
            scale: [9, 1, .5],
            position: [-770, -43, 0],
            rotation: [0, 6.28 / 4, 0]
        }, {
            repeat: [10, 1],
            scale: [8, .5, .5],
            position: [0, -43, 470]
        }, {
            repeat: [10, 1],
            scale: [8, .5, .5],
            position: [0, -43, -470]
        }, {
            repeat: [10, 1],
            scale: [9, .5, .5],
            position: [470, -43, 0],
            rotation: [0, 6.28 / 4, 0]
        }, {
            repeat: [10, 1],
            scale: [9, .5, .5],
            position: [-470, -43, 0],
            rotation: [0, 6.28 / 4, 0]
        }]
    }
};