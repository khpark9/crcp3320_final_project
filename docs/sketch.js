let count = 1000;
let count2 = 1000;

let sines = [];
let cosines = [];
let waves = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < 5; i++) {
        waves[i] = new Wave(random(10, 100), random(100, 600), random(TWO_PI));
    }

    for (let i = 0; i < count; i++) {
        sines.push(new Sine());
    }

    for (let i = 0; i < count2; i++) {
        cosines.push(new Cosine());
    }
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
            fill(255,0,0);
            ellipse(x, y + height/2, 10);
        }
    }

    for (let wave of waves) {
        wave.update();
    }
}
