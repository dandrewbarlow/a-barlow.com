var canvas;
// color variable
var c = 0;
// n = number of circles to draw
var n = 50;

function windowResized() {
  resizeCanvas(windowWidth-15, document.documentElement.scrollHeight);
}


function setup() {
  var myHeight = document.documentElement.scrollHeight;
  canvas = createCanvas(windowWidth-15, myHeight);
  canvas.position(0, 0);
  canvas.style('z-index', -1);
  canvas.style('position', 'absolute');
  canvas.style('display', 'block');
  colorMode(HSB, 360);
}

function circles() {
  if (c >= 360) c = 0; else c+=1;
  for (var i = 1; i <= n; i++) {
      // var newRed = red - (i * 10);
      circleColor = color(c, 360, 360);
      // console.log(newRed);
      circleColor.setAlpha(1 - (i / n));
      fill(circleColor);
      ellipse(mouseX, mouseY, (50 * i) / log(n));
  }
}

function draw() {
  // background(200);

  noStroke();
  circles();
}
