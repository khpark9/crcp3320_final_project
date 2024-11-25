let count = 1;
let sines = [];
let cosines = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    for (let i = 0; i < count; i++) {
        let sine = new Sine();
        sines.push(sine);

        let cosine = new Cosine();
        cosines.push(cosine);
    }
}

function draw() {
    background(0);

    sines.forEach((sine) => {
        sine.draw();
    });

    cosines.forEach((cosine) => {
        cosine.draw();
    })
}
