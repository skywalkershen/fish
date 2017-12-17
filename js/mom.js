var momObj = function(){
    this.x;
    this.y;
    this.angle;

    this.bigEye = [];
    this.bigEyeInterval = 1000;
    this.bigEyeTimer = 0;
    this.bigEyeCnt = 0;

    
    this.bigBodyOr = [];
    this.bigBodyBl = [];
    this.bigBodyCnt = 0;


    this.bigTail = [];
    this.bigTailTimer = 0;
    this.bigTailCnt = 0;
}

momObj.prototype.init = function(){
    this.x = canWidth * 0.5;
    this.y = canHeight * 0.5;
    this.angle = 0;
    for(var i = 0; i < 8; i++){
        this.bigTail[i] = new Image();
        this.bigTail[i].src = "./src/bigTail" + i + ".png";
    }
    for(var i = 0; i < 2; i++){
        this.bigEye[i] = new Image();
        this.bigEye[i].src = "./src/bigEye" + i + ".png";
    }

    for(var i = 0; i < 8; i++){
        this.bigBodyBl[i] = new Image();
        this.bigBodyBl[i].src = "./src/bigEatBlue" + i + ".png";
        this.bigBodyOr[i] = new Image();
        this.bigBodyOr[i].src = "./src/bigEat" + i + ".png";
    }

}

momObj.prototype.draw = function(){
    //lerp x, y in common funcs
    this.x = lerpDistance(mousex, this.x, 0.95);
    this.y = lerpDistance(mousey, this.y, 0.95);
    //delta angle
    //math.atan2(y, x)
    var deltaY = -(mousey - this.y);
    var deltaX = -(mousex - this.x);
    var deltaAngle = Math.atan2(deltaY, deltaX);

    //lerp angle
    this.angle = lerpAngle(deltaAngle, this.angle, 0.5) ;//-Pi to Pi

    //tail
    this.bigTailTimer += interval;
    if(this.bigTailTimer > 50){
        this.bigTailCnt = (this.bigTailCnt + 1) % 8;
        this.bigbigTailTimer % 50;
    }
    //Eye
    this.bigEyeTimer += interval;
    if(this.bigEyeTimer > this.bigEyeInterval){
        this.bigEyeCnt = (this.bigEyeCnt + 1) % 2;
        this.bigEyeTimer %= this.bigEyeInterval;

        if(this.bigEyeCnt == 1){
            this.bigEyeInterval = Math.random() * 200 + 200;
        }else{
            this.bigEyeInterval = 2000;
        }
    }


    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle);
    //the sequence matters since overlapping
    var bigTailIdx = this.bigTailCnt;
    ctx1.drawImage(this.bigTail[bigTailIdx], -this.bigTail[bigTailIdx].width * 0.5 + 30, -this.bigTail[bigTailIdx].height * 0.5);
    var bigBodyIdx = this.bigBodyCnt;
    if(score.double == 1){
        ctx1.drawImage(this.bigBodyOr[bigBodyIdx], -this.bigBodyOr[bigBodyIdx].width * 0.5, -this.bigBodyOr[bigBodyIdx].height * 0.5);
    }else{
        ctx1.drawImage(this.bigBodyBl[bigBodyIdx], -this.bigBodyBl[bigBodyIdx].width * 0.5, -this.bigBodyBl[bigBodyIdx].height * 0.5);
    }
    var bigEyeIdx = this.bigEyeCnt;
    ctx1.drawImage(this.bigEye[bigEyeIdx], -this.bigEye[bigEyeIdx].width * 0.5, -this.bigEye[bigEyeIdx].height * 0.5);
    ctx1.restore();
}