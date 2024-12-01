let count = 50;
let sines = [];
let cosines = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < count; i++) {
        sines.push(new Sine());
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
}
