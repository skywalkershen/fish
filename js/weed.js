var weedObj = function(){
    //start point, control point and end point(sin) for quadratic curve
    this.rootx = [];
    this.headx = [];
    this.heady = [];
    //angle for sin
    this.amp = [];
    this.alpha = 0;
    
}
weedObj.prototype.num = 58;
weedObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.rootx[i] = i * 16 + 20 * Math.random();
        this.headx[i] = this.rootx[i];
        this.heady[i] = canHeight - 200 + Math.random() * 50;
        this.amp[i] = Math.random() * 50 + 50;
    }
    console.log("ini weed");
}
weedObj.prototype.draw = function(){
    this.alpha += interval * 0.0009;
    var siny = Math.sin(this.alpha); //[-1, 1]
    ctx2.save();
    ctx2.lineCap = "round";
    ctx2.lineWidth = 20;
    ctx2.strokeStyle = "#3b154e";
    ctx2.globalAlpha = 0.6;
    for(var i = 0; i < this.num; i++){
        //beginPath, moveTo, lineTo, strokeStyle, lineWidth, lineCap, globalAlpha(opacity)
        ctx2.beginPath();
        ctx2.moveTo(this.rootx[i], canHeight);
        this.headx[i] = this.rootx[i] + siny * this.amp[i];
        ctx2.quadraticCurveTo(this.rootx[i], canHeight - 100, this.headx[i], this.heady[i]);
        ctx2.stroke();
    }
    //console.log("weed drawn");
    ctx2.restore();
}