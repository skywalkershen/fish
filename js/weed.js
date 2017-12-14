var weedObj = function(){
    this.x = [];
    this.len = [];

}
weedObj.prototype.num = 58;
weedObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.x[i] = i * 16 + 20 * Math.random();
        this.len[i] = 200 + 50 * Math.random();
    }
    console.log("ini weed");
}
weedObj.prototype.draw = function(){
    ctx2.save();
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.6;
    for(var i = 0; i < this.num; i++){
        //beginPath, moveTo, lineTo, strokeStyle, lineWidth, lineCap, globalAlpha(opacity)
        ctx2.beginPath();
        ctx2.moveTo(this.x[i], canHeight);
        ctx2.lineTo(this.x[i], canHeight - this.len[i]);
        ctx2.stroke();
    }
    //console.log("weed drawn");
    ctx2.restore();
}