environments.kidroom = {
    floor: {
        texture: "/maps/graph_paper.jpg",
        stripset: "/models/plane.js",
        material: {
            color: 0xcccccc
        },
        repeat: [1, 1],
        position: [0, -77, -200],
        rotation: [6.28/4, 0, 0],
        scale: [2270, 2160, 1300]
    },
    wall: {
        texture: "/maps/room1.jpg",
        dimensions: [111, 111, 111, 7, 5],
        material: {
            color: 0xcccccc
        },
        sides: [{
            scale: [-44, 44, 44]
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