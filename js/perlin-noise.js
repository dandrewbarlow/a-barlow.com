// Namespacing sketch so I can run more multiple on one site
var perlin = function(p) {
    // Creating a graph of perlin noise in TWO!!! dimensions (tecnically 3! 3rd is time tho)
    p.inc = 0.01;
    p.zoff = 1000;
    p.setup = function() {
        p.canvas = p.createCanvas(400, 400);
        p.canvas.parent("#perlin")
        p.noiseDetail(3);
    }
    
    p.draw = function() {
        p.yoff = 0;

        p.loadPixels();

        for (p.x = 0; p.x < p.width; p.x++) {
            p.xoff = 0;

            for (p.y = 0; p.y < p.height; p.y++ ) {
                p.index = (p.x + p.y * p.width) * 4;
                p.r = p.noise(p.xoff, p.yoff, p.zoff) * 255;
                if (p.r > 255 / 2) {
                    p.r = 255;
                }
                else {
                    p.r = 0;
                }
                p.pixels[p.index] = p.r;
                // pixels[index+1] = r;
                // pixels[index+2] = r;
                p.pixels[p.index+3] = 255;

                p.xoff += p.inc;
            }

            p.yoff += p.inc;
        }
        p.zoff += p.inc * 4;
        p.updatePixels();
    }
}

var perlinNoise = new p5(perlin);