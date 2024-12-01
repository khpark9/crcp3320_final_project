class Cosine {
    #position;
    #amp;
    #period;
    #colorBuffer;
    #size;
    #randomPosY;
    #speed;

    constructor() {
        this.#position = createVector(random(width), random(height));
        this.#amp = random(-50, 50);
        this.#period = random(0.0005, 0.1);
        this.#size = random(10, 30);
        this.#randomPosY = random(25, height - 25);
        this.#speed = random(1, 3); 
        this.#colorBuffer = this.#createColorBuffer(this.#size);
    }

    draw() {
        push();
        this.#drawCosine();
        pop();
    }

    #createColorBuffer(size) {
        let buffer = createGraphics(size, size);
        buffer.noFill();

        // optional colors
        // 1dd3b0 (light teal) & affc41 (neon green)
        // 34ebeb (sky blue) & 93faaa (light green)
        // b8f2e6 (light aquamarine) & aed9e0 (light blue grey)

        // Draw a horizontal gradient within an ellipse
        buffer.ellipseMode(CENTER);
        for (let x = 0; x <= size; x++) {
            let inter = map(x, 0, size, 1, 0); // Right-to-left gradient
            let c = lerpColor(color('#b8f2e6'), color('#aed9e0'), inter); // Gradient colors
            buffer.stroke(c);
            buffer.line(x, size / 2 - sqrt(size * size / 4 - (x - size / 2) ** 2), x, size / 2 + sqrt(size * size / 4 - (x - size / 2) ** 2)); // Draw the gradient along the curve of the ellipse
        }

        return buffer;
    }

    #drawCosine() {
        beginShape();
        this.#position.x += this.#speed; 
        this.#position.y = this.#amp * cos(this.#position.x * this.#period) + this.#randomPosY;
    
        noStroke();
        imageMode(CENTER);
        image(this.#colorBuffer, this.#position.x, this.#position.y);
        endShape();
    }

    move() {
        // Reset position to the left when it goes off the right edge
        if (this.#position.x > windowWidth + this.#size) {
            this.#position.x = -this.#size;
        }
    }
}