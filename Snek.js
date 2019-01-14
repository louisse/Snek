function Snek(col, row) {
    this.head = new Head(col, row);
    let tail = this.head;
    for (let i = 1; i <= 3; i++) {
        tail.nextTail = new Tail(col - i, row);
        tail = tail.nextTail;
    }
    this.tail = tail;
}

Snek.prototype.show = function () {
    let tail = this.head.nextTail;
    while (tail !== null) {
        tail.show();
        tail = tail.nextTail;
    }
    this.head.show();
};

Snek.prototype.update = function () {
    if (this.head.deadFlag === true) {
        let tail = this.head.nextTail;
        while (tail !== null) {
            tail.color = 100;
            tail = tail.nextTail;
        }
        return;
    }
    let state = this.head.update();
    let tail = this.head.nextTail;
    while (tail !== null) {
        state = tail.update(state);
        tail = tail.nextTail;
    }
    this.head.checkCollisions();
    if (this.head.eatFlag === true) {
        this.tail = this.tail.nextTail = new Tail(state.col, state.row);
    }
};

Snek.prototype.isSpawnOkay = function (col, row) {
    let tail = this.head;
    while (tail !== null) {
        if (tail.col === col && tail.row === row) {
            return false;
        }
        tail = tail.nextTail;
    }
    return true;
};
