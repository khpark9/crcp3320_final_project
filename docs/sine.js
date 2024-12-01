class Sine {
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
        this.#drawSine();
        pop();
    }

    #createColorBuffer(size) {
        let buffer = createGraphics(size, size);
        buffer.noFill();

        // optional colors
        // 3c1642 (dark purple) & 086375 (dark teal)
        // f765c2 (pink) & f1ffab (yellow)
        // ffa69e (salmon) & faf3dd (beige)

        // Draw a horizontal gradient (right to left)
        for (let x = 0; x < size; x++) {
            let inter = map(x, 0, size, 1, 0); // Interpolation factor (right to left)
            let c = lerpColor(color('#ffa69e'), color('#faf3dd'), inter); // Gradient between two colors
            buffer.stroke(c);
            buffer.line(x, 0, x, size); // Vertical gradient line
        }

        return buffer;
    }

    // keypressed function - changing between a square shape and an ellipse shape
    // #createGradient(shape) {
    //     if (shape == 0) {
    //         // Draw a horizontal gradient (right to left)
    //         for (let x = 0; x < size; x++) {
    //             let inter = map(x, 0, size, 1, 0); // Interpolation factor (right to left)
    //             let c = lerpColor(this.#c1, this.#c2, inter); // Gradient between two colors
    //             buffer.stroke(c);
    //             buffer.line(x, 0, x, size); // Vertical gradient line
    //         }
    //     } else {
    //         // Draw a horizontal gradient within an ellipse
    //         buffer.ellipseMode(CENTER);
    //         for (let x = 0; x <= size; x++) {
    //             let inter = map(x, 0, size, 1, 0); // Right-to-left gradient
    //             let c = lerpColor(this.#c1, this.#c2, inter); // Gradient colors
    //             buffer.stroke(c);
    //             buffer.line(x, size / 2 - sqrt(size * size / 4 - (x - size / 2) ** 2), x, size / 2 + sqrt(size * size / 4 - (x - size / 2) ** 2)); // Draw the gradient along the curve of the ellipse
    //         }
    //     }
    // }

    #drawSine() {
        beginShape();
        this.#position.x += this.#speed; 
        this.#position.y = this.#amp * sin(this.#position.x * this.#period) + this.#randomPosY;
    
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