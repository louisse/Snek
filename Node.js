function Node(col, row) {
    this.col = col;
    this.row = row;
    this.deadFlag = false;
    this.eatFlag = false;
    this.nextTail = null;
}

Node.prototype.show = function () {
    print('Error: show function unimplemented!!');
    noLoop();
};

Node.prototype.update = function () {
    print('Error: update function unimplemented!!');
    noLoop();
};
