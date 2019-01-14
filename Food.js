function Food() {
    this.col = -1;
    this.row = -1;
    this.spawn();
}

Food.prototype.show = function () {
    push();
    translate(toScale(this.col), toScale(this.row));
    noStroke();
    fill(100, 100, 255, 200);
    ellipseMode(CORNER);
    ellipse(0, 0, scl, scl);
    pop();
};

Food.prototype.spawn = function () {
    let col = -1;
    let row = -1;
    do {
        col = floor(random(1, cols - 2));
        row = floor(random(1, rows - 2));
    }
    while (snek.isSpawnOkay(col, row) === false);
    this.col = col;
    this.row = row;
};
