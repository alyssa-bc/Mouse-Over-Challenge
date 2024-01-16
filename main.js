//Mouse Over Challenge

//Setup the canvas and the graphics context
let cnv = document.getElementById("myCanvas");
let ctx = cnv.getContext("2d");
cnv.width = 500;
cnv.height = 300;

//Global Variables
let mouseX, mouseY;
let redX = 100;
let redY = 50;
let greenX = 400;
let greenY = 75;
let greenRadius = 30;
let blueX = Math.random() * 500;
let blueY = Math.random() * 200;
let blueWidth = Math.random() * 200;
let blueHeight = Math.random() * 200;
let orangeX = Math.random() * 400;
let orangeY = Math.random() * 200;
let orangeRadius = Math.random() * 20;

//Main Program
requestAnimationFrame(loop);

function loop() {
  //  Draw Background
  ctx.fillStyle = "white";
  ctx.fillRect(0, 0, cnv.width, cnv.height);

  // //Draw Shapes
  ctx.fillStyle = "red";
  ctx.fillRect(redX, redY, 100, 50);

  ctx.fillStyle = "green";
  ctx.beginPath();
  ctx.arc(greenX, greenY, 30, 0, 2 * Math.PI);
  ctx.fill();

  ctx.fillStyle = "blue";
  ctx.fillRect(blueX, blueY, blueWidth, blueHeight);

  ctx.fillStyle = "orange";
  ctx.beginPath();
  ctx.arc(orangeX, orangeY, orangeRadius, 0, 2 * Math.PI);
  ctx.fill();

  requestAnimationFrame(loop);
}
//Event Stuff
document.addEventListener("mousemove", mousemoveHandler);

function mousemoveHandler(event) {
  let cnvRect = cnv.getBoundingClientRect();
  mouseX = event.x - cnvRect.x;
  mouseY = event.y - cnvRect.y;
  //Red Rectangle
  if (mouseX > 100 && mouseX < 200 && mouseY > 50 && mouseY < 100) {
    document.body.style.backgroundColor = "red";
  }

  //Green cirlce
  let greenrise = greenY - mouseY;
  let greenrun = greenX - mouseX;
  let greendistance = Math.sqrt(greenrise ** 2 + greenrun ** 2);
  //colliding code
  if (greendistance < greenRadius) {
    document.body.style.backgroundColor = "green";
  }

  //Blue Rectangle
  if (
    mouseX > blueX &&
    mouseX < blueX + blueWidth &&
    mouseY > blueY &&
    mouseY < blueY + blueHeight
  ) {
    document.body.style.backgroundColor = "blue";
    blueX = Math.random() * 500;
    blueY = Math.random() * 200;
    blueWidth = Math.random() * 200;
    blueHeight = Math.random() * 200;
  }

  //Orange circle
  let orangerise = orangeY - mouseY;
  let orangerun = orangeX - mouseX;
  let orangedistance = Math.sqrt(orangerise ** 2 + orangerun ** 2);

  //colliding code
  if (orangedistance < orangeRadius) {
    document.body.style.backgroundColor = "orange";
    orangeX = Math.random() * 400;
    orangeY = Math.random() * 200;
    orangeRadius = Math.random() * 800;
  }
}
