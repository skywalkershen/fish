var childObj = function(){
    this.x;
    this.y;
    this.angle;

    this.childEye = [];
    this.childEyeTimer = 0;
    this.childEyeCnt = 0;
    this.childEyeInterval = 1000;

    this.childBody = [];
    this.childBodyTimer = 0;
    this.childBodyCnt = 0;

    this.childTailTimer = 0;
    this.childTailCnt = 0;
    this.childTail = [];
    
}
childObj.prototype.init = function(){
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5  + 50;
    this.angle = 0;
    for(var i = 0; i < 2; i++){
        this.childEye[i] = new Image();
        this.childEye[i].src = "./src/babyEye" + i + ".png";
    }
    for(var i = 0; i < 20; i++){
        this.childBody[i] = new Image();
        this.childBody[i].src = "./src/babyFade" + i + ".png";
    }
    for(var i = 0; i < 8; i++){
        this.childTail[i] = new Image();
        this.childTail[i].src = "./src/babyTail" + i + ".png";
    }
}
childObj.prototype.draw = function(){
    //lerp x, y in common funcs
    this.x = lerpDistance(mom.x, this.x, 0.98);
    this.y = lerpDistance(mom.y, this.y, 0.98);
    //delta angle
    //math.atan2(y, x)
    var deltaY = -(mom.y - this.y);
    var deltaX = -(mom.x - this.x);
    var deltaAngle = Math.atan2(deltaY, deltaX);
    //lerp angle
    this.angle = lerpAngle(deltaAngle, this.angle, 0.5) ;//-Pi to Pi

    //child tail cnt
    this.childTailTimer += interval;
    if(this.childTailTimer > 50){
        this.childTailCnt = (this.childTailCnt + 1) % 8;
        this.childTailTimer % 50;
    }

    this.childEyeTimer += interval;
    if(this.childEyeTimer > this.childEyeInterval){
        this.childEyeCnt = (this.childEyeCnt + 1) % 2;
        this.childEyeTimer %= this.childEyeInterval;

        if(this.childEyeCnt == 1){
            this.childEyeInterval = Math.random() * 200 + 200;
        }else{
            this.childEyeInterval = 2000;
        }
    }

    
    this.childBodyTimer += interval;
    if(this.childBodyTimer > 300){
        this.childBodyTimer = 0;
        this.childBodyCnt += 1;
        if(this.childBodyCnt > 19){
            this.childBodyCnt = 19;
            //game over
        }
    }
    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle); 
    //the sequence matters since overlapping
    var childTailIdx = this.childTailCnt;
    ctx1.drawImage(this.childTail[childTailIdx], -this.childTail[childTailIdx].width * 0.5 + 24, -this.childTail[childTailIdx].height * 0.5);
    var childBodyCnt = this.childBodyCnt;
    ctx1.drawImage(this.childBody[childBodyCnt], -this.childBody[childBodyCnt].width * 0.5, -this.childBody[childBodyCnt].height * 0.5);

    var childEyeIdx = this.childEyeCnt;
    ctx1.drawImage(this.childEye[childEyeIdx], -this.childEye[childEyeIdx].width * 0.5, -this.childEye[childEyeIdx].height * 0.5);
    ctx1.restore();
}