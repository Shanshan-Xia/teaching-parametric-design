const sketchWidth = 400;
const sketchHeight = 400;


function setup() {
  createCanvas(sketchWidth, sketchHeight, SVG);
}

function draw() {
    noFill();
    stroke("red");
    strokeWeight(5);
    line(100,50,200,50);
    line(100,50,58,100);
    line(200,50,242,100);
    line(120,50,90,100);
    line(180,50,210,100);

    triangle(240,100,60,100,150,250);
    line(90,100,150,250);
    line(210,100,150,250);

    strokeWeight(8);
    circle(150,300,100);

    stroke("black");
    strokeWeight(5);
    triangle(255,65,313,55,308,75);
    triangle(270,85,315,115,325,100);
    triangle(260,97,300,158,325,150);
    noLoop();
    save();
}

