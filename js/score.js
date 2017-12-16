var scoreObj = function(){
    this.fruitNum = 0;
    this.double = 1;

}

scoreObj.prototype.reset = function(){
    this.fruitNum = 0;
    this.double = 1;
}

scoreObj.prototype.draw = function(){
    var w = canWidth;
    var h = canHeight;
    ctx1.fillStyle = "white";
    ctx1.fillText("num: " +this.fruitNum, w * 0.5, h - 50);
    ctx1.fillText("double: " + this.double, w * 0.5, h - 80);
}