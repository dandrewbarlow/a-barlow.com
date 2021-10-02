// Andrew Barlow
// particle-manager.js
// Emitting CU
// class for managing all particles in the sketch without a bunch of loops in my main sketch
// a bit of an unnecessary abstraction, but what can I say, I like abstraction

import Particle from "./particle";

class ParticleManager {

    // create n particles
    constructor(n, p5) {
        this.n = n;
        this.p5 = p5;
        this.particles = [];
        for (let i = 0; i < n; i++) {
            this.particles.push( 
                // randomly placed particle, with no velocity or acceleration
                new Particle(
                    this.p5.createVector(Math.random()*500, Math.random()*500),
                    this.p5.createVector(0, 0),
                    this.p5.createVector(0, 0)
                ) 
            );
        }

        this.mouse = this.p5.createVector(this.p5.mouseX, this.p5.mouseY);

        // <1, probably <.1, unless you want some fast ass particles
        this.coefficientOfFriction = .1;
    }

    particleTrim() {
        // console.log(this.particles.length);
        while (this.particles.length > this.n) {
            this.particles.shift();
        }
    }

    // spawn one particle, remove one particle
    // perfectly balanced, as all things should be
    spawnParticle(p, v, a) {
        let particle = new Particle(p,v,a);
        this.particles.push(particle);
    }

    // calculates mouse movement between frames
    mouseMovement() {
        let distance = this.p5.Vector.sub(this.mouse, this.p5.createVector(this.p5.mouseX, this.p5.mouseY));
        // console.log(distance);
        return distance.div(-1);
    }

    // emit particles from mouse
    mouseEmit() {
        let mouseMove = this.mouseMovement();

        // remove the oldest particle
        this.particles.shift();

        // don't do anything while mouse isn't moving
        if (mouseMove.x == 0 && mouseMove.y == 0) {
            return;
        }

        let velocity = this.p5.createVector(
            mouseMove.x * this.p5.randomGaussian(1, 1) + this.p5.randomGaussian(1, 1),
            mouseMove.y * this.p5.randomGaussian(1, 1) + this.p5.randomGaussian(1, 1),
        );

        // console.log(velocity);

        for (let i = 0; i < 3; i++) {

            this.spawnParticle(
                this.p5.createVector(this.p5.mouseX, this.p5.mouseY),
                velocity,
                this.p5.createVector(0, 0)
            );
        }

    }

    // resize all particles
    resize() {
        this.particles.forEach(particle => {
            particle.resize();
        });
    }

    // update each particle, each draw loop. also apply global forces at this level
    update() {
        this.friction();

        this.mouseEmit();
        this.particleTrim();

        this.particles.forEach(particle => {
            particle.update();
        });

        this.mouse.set(this.p5.mouseX, this.p5.mouseY);
    }
    
    // apply a uniform force to all particles (e.g. gravity, wind)
    applyForce(force) {
        this.particles.forEach(particle => {
            particle.applyForce(force);
        })
    }

    // calculate & apply friction forces for each particle
    // credit: Daniel Schiffman's Nature of Code
    // https://natureofcode.com/book/chapter-2-forces/
    friction() {
        this.particles.forEach(particle => {
            // way # 1
            // not working very well for some reason
            // i suspect i've accidentally created a side effect somewhere
            // let friction = particle.velocity.copy();
            // friction.mult(-1);
            // friction.normalize();
            // friction.mult(this.coefficientOfFriction);
            // particle.applyForce(friction);

            // way # 2
            particle.velocity.mult(0.95);
        })
    }

    // use mouse input as attractor/repeller
    mouseForce() {
        this.particles.forEach(particle => {
            let mouseForce = this.p5.Vector.sub(particle.position, this.p5.createVector(this.p5.mouseX, this.p5.mouseY));
            mouseForce.normalize();
            mouseForce.div(2);

            particle.applyForce(mouseForce);
        });
    }

    // draw all particles
    draw() {
        this.particles.forEach(particle => {
            particle.draw();
        })
    }
}

// export default ParticleManager;