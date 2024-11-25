let numWaves = 5;
let numParticles = Math.floor(random(50, 100));
let size = 4;
let amp = Math.floor(random(25, 50));
let freq = 0.02;
let speed = 2;
let position;

let wave;
let particles = [];

function setup() {
    createCanvas(500, 500);

    position = createVector(0, height/2);
    
    ellipse(position.x, position.y, size, size);

}
    

function draw() {
    background(0);

    // calculate the sine wave
    ellipse(position.x, position.y, size, size);

}

