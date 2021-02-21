// namespacing to put multiple sketches on one page
var schotter= function(p) {
  p.squareSize = 50;
  p.canvas;
  // can switch to a color version with this var
  p.colorSquares = false;

  // using type instead to give me more leeway in setting it up
  p.setup = function () {
  }

  p.type = function(color) {
    p.canvas = p.createCanvas(p.squareSize * 12, p.squareSize * 12);

    if (color) {
      p.colorSquares = true;
      p.canvas.parent("#schotterColor");
    }
    else{
      p.canvas.parent("#schotter");
    }

      p.draw();
  }

  p.draw = function() {
    p.background(255);

    if (p.colorSquares) {
      p.noStroke();
    }
    else {
      p.noFill();
      p.stroke(0);
    }



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

        if (p.colorSquares) {
          p.fill( p.color( p.random(255), p.random(255), p.random(255), 50) );
        }
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
newSchotter.type(false);

var colorSchotter = new p5(schotter);
colorSchotter.type(true);
// colorSchotter.setParent("#schotterColor");