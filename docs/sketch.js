let size = 75;
let amp = 50;
let period = 300;

let graphX = 50;
let graphY = 300;

let position;

function setup() {
    createCanvas(500, 500);
    angleMode(DEGREES);

    position = createVector(200, 150);
}
    

function draw() {
    background(0);

    let angle = frameCount % 360;

    let pointX = position.x + size * cos(angle);
    let pointY = position.y + size * cos(angle);

    line(position.x, position.y, pointX, pointY);

    fill('#34ebeb');
    circle(pointX, position.y, 10);

    fill('#f765c2');
    circle(position.x, pointY, 10);

    // Draw cosine curve
    noFill();
    stroke('#34ebeb');
    beginShape();
    for (let t = 0; t <= 360; t++) {
        let x = map(t, 0, 360, graphX, graphX + period);
        let y = graphY - amp * cos(t);
        vertex(x, y);
    }
    endShape();

    // Draw sine curve
    noFill();
    stroke('#f765c2');
    beginShape();
    for (let t = 0; t <= 360; t++) {
        let x = map(t, 0, 360, graphX, graphX + period);
        let y = graphY - amp * sin(t);
        vertex(x, y);
    }
    endShape();
}
