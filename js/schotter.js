// namespacing to put multiple sketches on one page
var schotter = function(p) {
  p.squareSize = 50;
  p.canvas;

  p.setup = function () {
    p.canvas = p.createCanvas(p.squareSize * 12, p.squareSize * 12);
    p.canvas.parent("#schotter");
    p.noFill();
  }

  p.draw = function () {
    p.background(255);
    // more for clarity of code than a functional definition

    for (p.x = 0; p.x < 10; p.x++) {
      for (p.y = 0; p.y < 10; p.y++) {

        p.offset;

        // check prevents a NaN when x == 0
        if (p.x == 0) {
          p.offset = p.squareSize + p.map(p.random(1), 0, 1, -p.x * 5/3, p.x * 5/3);
        }
        else {
          p.offset = p.squareSize + p.map(p.random(p.x), 0, p.x, -p.x * 5/3, p.x * 5/3);
        }

        p.push();

        // random rotation, in either direction
        p.degrees = p.random(p.x / 15);
        if (p.random(1) > .5) {
          p.degrees = -p.degrees;
        }

        // use the x & y value to calculate where to draw on the canvas
        p.nX = p.x * p.squareSize + p.offset;
        p.nY = p.y * p.squareSize + p.offset;

        p.translate(p.nX, p.nY);

        p.rotate(p.degrees);

        p.square(0, 0, p.squareSize);

        p.pop();
      }
    }
    p.noLoop();
  }

  p.mouseClicked = function() {
    // only refresh when clicking on the sketch
    if ( p.mouseX > 0 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height) {
      p.draw();
    }
  }
}

var newSchotter = new p5(schotter);