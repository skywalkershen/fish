var fedObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}

fedObj.prototype.num = 5;
fedObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.x[i] = 0;
        this.y[i] = 0;
        this.alive[i] = false;
        this.r[i] = 0;

    }
}

fedObj.prototype.draw = function(){
    for(var i = 0; i <  this.num; i++){
        if(this.alive[i]){
            //draw
            ctx1.save();
            ctx1.lineWidth = 2;
            ctx1.shadowBlur = 10;
            ctx1.shadowColor = "rgba(134, 45, 145, 1)";
            for(var i = 0; i < this.num; i++){
                if(this.alive[i] ){
                    //draw
                    this.r[i] += interval * 0.05;
                    if(this.r[i] > 100){
                        this.alive[i] = false;
                        break;
                    }
                    var opacity = 1 - this.r[i] / 100;
                    ctx1.beginPath();
                    ctx1.arc(this.x[i], this.y[i], this.r[i], 0, Math.PI * 2);
                    ctx1.closePath();
                    ctx1.strokeStyle = "rgba(203, 91, 0," + opacity + ")";
                    ctx1.stroke();
                }
            }
            ctx1.restore();
        }
    }
}

fedObj.prototype.born = function(x, y){
    for(var i = 0; i < this.num; i++){
        if(!this.alive[i]){
            this.x[i] = x;
            this.y[i] = y;
            this.r[i] = 10;
            this.alive[i] = true;
            return;
        }
    }
}