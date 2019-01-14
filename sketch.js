let rows = 20;
let cols = 30;
let scl = 20;
let fps = 15;
let snek;
let food;

function setup() {
    createCanvas(toScale(cols), toScale(rows));
    frameRate(fps);
    snek = new Snek(cols / 2, rows / 2);
    food = new Food();
}

function draw() {
    drawStage();
    snek.update();
    snek.show();
    food.show();
}

function drawStage(){
    background(51);
    noFill();
    stroke(200, 50, 50, 200);
    strokeWeight(toScale(2));
    rect(0, 0, toScale(cols), toScale(rows));
}

function toScale(num) {
    return num * scl;
}
