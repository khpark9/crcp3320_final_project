// let numWaves = 5;
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
    
    for (let i = 0; i < numParticles; i++) {
        wave.push({
            offset: i * 20,
            phase: Math.random() * Math.PI * 2, // Random phase
            color: `hsl(${(i / numWaves) * 360}, 80%, 60%)`, 
        });
    }
}
    

function draw() {
    background(0);

}

