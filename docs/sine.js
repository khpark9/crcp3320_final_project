class Sine {
    #position;
    #amp;
    #period;
    #color;
    #size;
    #randomPosY;

    constructor() {
        this.#position = createVector(random(width), random(height));
        this.#amp = random(30, 100);
        this.#period = random(-2*Math.PI, 2*Math.PI);
        // this.#color = color(random(100, 255), random(100), random(100, 255));
        this.#size = random(10, 50);
        this.#randomPosY = random(100, 300);
    }

    draw() {
        push();
        this.#drawSine();
        pop();
    }

    #drawSine() {
        beginShape();

        this.#position.x = frameCount / 2;
        this.#position.y = this.#amp * cos(this.#position.x * (1 / this.#period)) + this.#randomPosY;
    
        fill('#f765c2');
        ellipse(this.#position.x, this.#position.y, this.#size, this.#size);
        endShape();
    }

    move() {
        if (this.#position.x > windowWidth + this.#size) {
            this.#position.x = -this.#size;
        } else if (this.#position.x < -this.#size) {
            this.#position.x = windowWidth + this.#size;
        }

        if (this.#position.y > windowHeight + this.#size) {
            this.#position.y = -this.#size;
        } else if (this.#position.y < -this.#size) {
            this.#position.y = windowHeight + this.#size;
        }
    }
}