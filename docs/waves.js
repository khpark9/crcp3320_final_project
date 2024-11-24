class Waves {
    // Wave Parameters
    #numWaves;
    #numDots;
    #size;
    #amp;
    #freq;
    #speed;

    constructor() {
        this.#numWaves = 5;
        this.#numDots = Math.floor(random(50, 100));
        this.#size = 4;
        this.#amp = Math.floor(random(25, 50));
        this.#freq = 0.02;
        this.#speed = 2;
    }

    draw() {
        push();
        this.#drawWaves();
        pop();
    }

    #calculateWavePosition() {

    }

    #drawWaves() {
        
    }
}