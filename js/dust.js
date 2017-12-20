var dustObj = function(){
    this.x = [];
    this.y = [];
    this.amp = [];
    this.Idx = [];
    this.angle;
    this.dustPic = [];

}

dustObj.prototype.num = 30;
dustObj.prototype.init = function(){
    for(var i = 0; i < 7; i++){
        this.dustPic[i] = new Image();
        this.dustPic[i].src = "./src/dust" + i + ".png";
        this.dustPic[i].onload = function(){
            console.log("dustpic" + i + " loaded");
        }
    }

    for(var i = 0; i < this.num; i++){
        this.x[i] = Math.random() * canWidth;
        this.y[i] = Math.random() * canHeight;
        this.amp[i] = 20 + Math.random() * 15;
        this.Idx[i] = Math.floor(Math.random() * 7);//generate num [0, 7)
        
    }
    this.angle = 0;
}

dustObj.prototype.draw = function(){
    this.angle += interval * 0.0009;
    var siny = Math.sin(this.angle);   
    for(var i = 0; i < this.num; i++){
        var picIdx = this.Idx[i];
        ctx1.drawImage(dustPic[picIdx], this.x[i] + this.amp[i] * siny, this.y[i]);
    }
}
