let count = 1000;
let count2 = 1000;

let sines = [];
let cosines = [];
let waves = [];

let waveColor;
let waveColors = [];

let t;

function setup() {
    createCanvas(windowWidth, windowHeight);

    waveColor = color(255, 0, 0);
    waveColors = [color(255, 0, 0), color(0), color(255), color(60, 250, 145)];

    for (let i = 0; i < 5; i++) {
        waves[i] = new Wave(random(10, 100), random(100, 600), random(TWO_PI));
    }

    for (let i = 0; i < count; i++) {
        sines.push(new Sine());
    }

    for (let i = 0; i < count2; i++) {
        cosines.push(new Cosine());
    }

    t = "Press the space bar!";

    // draw legend
    beginShape();
    noStroke();
    fill(200);
    rect(15, 25, 200, 50);

    fill(0);
    textSize(20);
    text(t, 20, 40, 195, 45);
    endShape();
}

function draw() {
    // background(0);
    background(0, 10);

    sines.forEach((sine) => {
        sine.draw();
        sine.move();
    });

    cosines.forEach((cosine) => {
        cosine.draw();
        cosine.move();
    })

    for (let x = 0; x < width; x += 10) {
        let y = 0;
        for (let wave of waves) {
            y += wave.evaluate(x);
            noStroke();
            fill(waveColor);
            ellipse(x, y + height/2, 10);
        }
    }

    for (let wave of waves) {
        wave.update();
    }

    // draw legend
    beginShape();
    noStroke();
    fill(200);
    rect(15, 25, 200, 50);

    fill(0);
    textSize(20);
    text(t, 20, 40, 195, 45);
    endShape();
}

function keyPressed() {
    if (key === ' ') {
        waveColor = random(waveColors);
        console.log('spacebar pressed');
    } else {
        waveColor = color(255, 0, 0);
    }
}
