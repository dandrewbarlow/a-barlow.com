// Andrew Barlow
// particle.js
// Emitting CU
// particle class w/ methods for individual particles
// assuming mass of 1 to keep simulations simpler

import p5 from "p5";

class Particle {

    // create particle
    constructor(p, v, a) {
        this.position = p;
        this.velocity = v;
        this.acceleration = a;

        // arbitrary at this point, would like to make variable in response to velocity at some point
        this.radius = 20;

        // for creating color based on Perlin noise
        this.offset = 0;
    }


    // take properties and apply to position
    update() {
        this.edgeCollision();
        this.velocity.add(this.acceleration);
        this.position.add(this.velocity);
        this.acceleration.set(0,0);

        this.offset += 0.001;
        // console.log(this);
    }

    // when edge of browser is crossed, loop over to the other side
    edgeCollision() {
        if (this.position.x < 0) {
            this.position.x = this.windowWidth + this.position.x;
            // this.position.x = 0;
            // this.velocity.mult(-1);
        }
        if (this.position.y < 0) {
            this.position.y = this.windowHeight + this.position.y;
        }
        if (this.position.x > this.windowWidth) {
            this.position.x = this.windowWidth - this.position.x;
        }
        if (this.position.y > this.windowHeight) {
            this.position.y = this.windowHeight - this.position.y;
        }
    }

    applyForce(force) {
        this.acceleration.add(force);
    }

    calculateColor() {
        let noiseVal = p5.noise(this.position.x, this.position.y, this.offset);
        noiseVal = p5.map(noiseVal, 0, 1, 0, 255);
        let col = p5.color(noiseVal*p5.randomGaussian(1,0.5)/2, noiseVal*p5.randomGaussian(1,0.5)/5, noiseVal*p5.randomGaussian(2,1), 220);
        // console.log(col);

        return col;
    }

    draw() {
        p5.fill(this.calculateColor());
        p5.noStroke();

        p5.ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }
}

export default Particle;