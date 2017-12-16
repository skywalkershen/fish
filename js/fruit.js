//a fruit pool
var fruitObj = function(){
    this.alive = [];//boolean
    this.orange = new Image();
    this.blue = new Image();
    this.x = [];
    this.y = [];
    this.size = [];
    this.spd = [];
    this.type = [];
}
fruitObj.prototype.num = 15;
fruitObj.prototype.init = function(){
    for(var i = 0; i < this.num; i++){
        this.alive[i] = false;
        this.x[i] = 0;
        this.y[i] = 0;
        this.type[i] = "";
        this.spd[i] = Math.random() * 0.01 + 0.005;//need offset to avoid spd 0
        this.born(i);
    }
    this.orange.src = "./src/fruit.png";
    this.blue.src = "./src/blue.png";
    
}
//generate
//find an weed, grow, fly
fruitObj.prototype.draw = function(){
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]){
            var pic = this.type[i] == "blue"? this.blue : this.orange;

            if(this.size[i] <= 15){
                //grow
                this.size[i] += this.spd[i] * interval;
            }else{
                this.y[i] -= this.spd[i] * 7 * interval;
            }
            ctx2.drawImage(pic, this.x[i] - this.size[i] * 0.5, this.y[i] - this.size[i] * 0.5, this.size[i], this.size[i]);

            if(this.y[i] < -10){
                this.dead(i);
                //console.log("dead, out of screen");
                this.born(i);
            }
        }        
        
        
    }
}
fruitObj.prototype.born = function(i){
    var weedId = Math.floor(Math.random() * weed.num);
    this.x[i] = weed.x[weedId] ;
    this.y[i] = canHeight - weed.len[weedId];
    this.size[i] = 0;
    var ran = Math.random();
    this.type[i] = ran < 0.2 ? "blue" : "orange";
    this.alive[i] = true;
    //console.log("fruit[" + i + "] generated as " + this.type[i]);
}

fruitObj.prototype.dead = function(i){
    this.alive[i] = false;
    
   
}
/*
//status check, if less than 15 fruits active, generate new one
fruitObj.prototype.update = function(){
    var num = 0;
    for(var i = 0; i < this.num; i++){
        if(this.alive[i]) num++;
    }
}
*/
/* born after the fruit get out of the screen
function fruitMonitor(){
    var aliveNum = 0;
    for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i]){
            aliveNum++;
        }
    }
    if(aliveNum < 15){
        wake();
        return;
    }
}

function wake(){
    for(var i = 0; i < fruit.num; i++){
        if(!fruit.alive[i]){
            fruit.born(i);
            return;
        }
    }
}*/