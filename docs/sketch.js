// let numWaves = 5;
// let numParticles = Math.floor(random(50, 100));
// let size = 4;
// let amp = Math.floor(random(25, 50));
// let freq = 0.02;
// let speed = 2;
// let position;

// let wave;
// let particles = [];

// function setup() {
//     createCanvas(500, 500);

//     // position = createVector(0, height/2);
// }
    

// function draw() {
//     background(0);

//     // fill(255);
//     // ellipse(position.x, position.y, size, size);
// }


// code from class
let f;
let flowers = [];
let flowerCount = 100;

function setup() {
    createCanvas(500, 500);
    
    for (let i = 0; i < flowerCount; i++) {
        flowers.push(new Flower());
    }
}

function draw() {
    background(255);
    
    flowers.forEach((flower) => flower.draw());
}
