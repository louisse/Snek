function Tail(col, row) {
    Node.call(this, col, row);
    this.color = 200;
    this.margin = scl * 0.075;
    this.size = scl - (this.margin * 2);
}

Tail.prototype = Object.create(Node.prototype);

Object.defineProperty(Tail.prototype, 'constructor', {
    value: Tail,
    enumerable: false,
    writable: true
});

Tail.prototype.show = function () {
    let size = this.size;
    let margin = this.margin;
    if (this.eatFlag === true) {
        margin = 0;
        size = scl;
    }
    push();
    translate(toScale(this.col), toScale(this.row));
    fill(this.color);
    noStroke();
    rect(margin, margin, size, size);
    pop();
};

Tail.prototype.update = function (newState) {
    let currentState = {
        col: this.col,
        row: this.row,
        eatFlag: this.eatFlag
    };
    this.col = newState.col;
    this.row = newState.row;
    this.eatFlag = newState.eatFlag;
    return currentState;
};
