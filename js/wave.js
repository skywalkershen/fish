var waveObj = function(){
    this.x = [];
    this.y = [];
    this.alive = [];
    this.r = [];
}

waveObj.prototype.num = 10;
waveObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
    }
}