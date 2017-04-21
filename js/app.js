var Quo = function (string) {
    this.status = string;
}
Quo.prototype.getStatus = function () {
    return this.status;
}

var myQuo = new Quo("confused");
console.log(myQuo.getStatus())

var add = function (a, b) {
    return a + b;
}

var array = [3, 4];

var sum = add.apply(null, array);

console.log('sum ', sum);

var statusObj = {
    status: 'A-OK'
};

var status = Quo.prototype.getStatus.apply(statusObj);
console.log('status', status);

