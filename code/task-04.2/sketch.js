const sketchWidth = 400;
const sketchHeight = 400;

function setup() {
  createCanvas(sketchWidth, sketchHeight);
  noLoop();
}

function draw() {

  for(let count = 1; count <= 5; count += 1) {
    fill(random(100,255));
    noStroke();
    let circleSize = 25 + count * 25;
    circle(
      50 + circleSize*2,
      350 - circleSize*2,
      circleSize
    );
  }
  noLoop();
  save();
}