/*
Andrew Barlow
sketch.js
Emitting CU
p5.js sketch for Capstone project promotion using a particle system for interaction

credits:
While this is not my 1st particle system and the hefty majority of it I coded from scratch, my personal knowledge of particle systems I can say is practically entirely learned from Daniel Schiffman's Nature of Code book & youtube series, to whom I am eternally grateful

I've added credits to parts of the code where I needed to reference this material again

https://natureofcode.com/book/
https://youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM
*/

// painstakingly namespaced for my portfolio site

import ParticleManager from "./particle-manager";


const emitting = ( p5 ) => {
    // GLOBALS //////////////////////////////////////////////////

    // allows easy canvas manipulation
    let canvas;

    // single handler for all particles
    let particleManager;

    // declare how many to render
    const particleCount = 50;

    // FUNCTIONS //////////////////////////////////////////////////

    // responsive resizing of canvas
    // emitting.windowResized = () => {
    //     emitting.resizeCanvas(windowWidth, windowHeight);
    //     emitting.background(0, 255);
    //     particleManager.resize();
    // }

    // initialization
    p5.setup = () => {
        canvas = p5.createCanvas(500, 500);
        // canvas.parent('#emitting');

        p5.particleManager = new ParticleManager(particleCount, p5);

        p5.background(0, 255);
        // particleManager.applyForce(createVector(100, 100));
    }

    // main loop
    p5.draw = () => {
        p5.background(0, 20);
        p5.particleManager.update();
        p5.particleManager.draw();
    }

}

export default emitting;