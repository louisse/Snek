function Head(col, row) {
    Node.call(this, col, row);
    this.color = 220;
    this.size = scl;
    this.colDir = 1;
    this.rowDir = 0;
}

Head.prototype = Object.create(Node.prototype);

Object.defineProperty(Head.prototype, 'constructor', {
    value: Head,
    enumerable: false,
    writable: true
});

Head.prototype.show = function () {
    push();
    translate(toScale(this.col), toScale(this.row));
    noStroke();
    fill(this.color);
    rect(0, 0, this.size, this.size);
    pop();
};

Head.prototype.update = function () {
    this.checkInput();
    let currentState = {
        col: this.col,
        row: this.row,
        eatFlag: this.eatFlag
    };
    this.eatFlag = false;
    this.col += this.colDir;
    this.row -= this.rowDir;
    return currentState;
};

Head.prototype.checkInput = function () {
    if (this.rowDir === 0 && keyIsDown(UP_ARROW)) {
        this.rowDir = 1;
        this.colDir = 0;
    } else if (this.rowDir === 0 && keyIsDown(DOWN_ARROW)) {
        this.rowDir = -1;
        this.colDir = 0;
    } else if (this.colDir === 0 && keyIsDown(LEFT_ARROW)) {
        this.rowDir = 0;
        this.colDir = -1;
    } else if (this.colDir === 0 && keyIsDown(RIGHT_ARROW)) {
        this.rowDir = 0;
        this.colDir = 1;
    }
};

Head.prototype.checkCollisions = function () {
    if (this.col <= 0 || this.col >= cols - 1 || this.row <= 0 || this.row >= rows - 1) {
        this.color = 125;
        this.deadFlag = true;
        return;
    }
    let tail = this.nextTail;
    while (tail !== null) {
        if (this.col === tail.col && this.row === tail.row) {
            this.color = 125;
            this.deadFlag = true;
            return;
        }
        tail = tail.nextTail;
    }
    if (this.col === food.col && this.row === food.row) {
        this.eatFlag = true;
        food.spawn();
    }
};
