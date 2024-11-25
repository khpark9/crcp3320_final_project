let size = 30;
let amp = 50;
let freq = 50;
let period;

let position;

function setup() {
    createCanvas(windowWidth, windowHeight);

    position = createVector(0, windowHeight/2);
    period = 2 * PI;
}

function draw() {
    background(0);
    let angle = frameCount % (2 * PI);

    // Draw cosine curve
    beginShape();

    position.x = frameCount;
    position.y = amp * sin(position.x * (1 / period)) + 100;

    fill('#34ebeb');
    ellipse(position.x, position.y, size, size);
    endShape();

    // Draw sine curve
    beginShape();

    position.x = frameCount / 2;
    position.y = amp * cos(position.x * (1 / period)) + 250;

    fill('#f765c2');
    ellipse(position.x, position.y, size, size);
    endShape();
}
