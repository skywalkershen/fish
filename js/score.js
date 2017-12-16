var scoreObj = function(){
    this.fruitNum = 0;
    this.double = 1;
    this.score = 0;
    this.gameOver = false;
    this.opacity = 0;
}



scoreObj.prototype.draw = function(){
    var w = canWidth;
    var h = canHeight;
    //make sure the style doesn't effect other elems on canvas1
    ctx1.save();
    ctx1.shadowBlur = 10;
    ctx1.shadowColor = "white";
    ctx1.fillText("num: " +this.fruitNum, w * 0.5, h - 50);
    ctx1.fillText("double: " + this.double, w * 0.5, h - 80);
    ctx1.fillText("Score: " + this.score, w * 0.5, h - 20);
    if(this.gameOver){
        this.opacity = this.opacity > 1 ? 1 :interval * 0.0001 + this.opacity;
        ctx1.fillStyle = "rgba(255, 255, 255," + this.opacity + ")";    
        ctx1.fillText("Game Over", w * 0.5, h - 300);
    }
    ctx1.restore();
}

scoreObj.prototype.addScore = function(){
    this.score += this.fruitNum * 100 * this.double;
    this.fruitNum = 0;
    this.double = 1;
}