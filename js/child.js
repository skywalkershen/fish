var childObj = function(){
    this.x;
    this.y;
    this.angle;
    this.childEye = new Image();
    this.childBody = new Image();
    this.childTail = new Image();
}
childObj.prototype.init = function(){
    this.x = canWidth * 0.5 - 50;
    this.y = canHeight * 0.5  + 50;
    this.angle = 0;
    this.childEye.src = "./src/babyEye0.png";
    this.childBody.src = "./src/babyFade0.png";
    this.childTail.src = "./src/babyTail0.png";
}
childObj.prototype.draw = function(){
    //lerp x, y in common funcs
    this.x = lerpDistance(mom.x, this.x, 0.97);
    this.y = lerpDistance(mom.y, this.y, 0.97);
    //delta angle
    //math.atan2(y, x)
    var deltaY = -(mom.y - this.y);
    var deltaX = -(mom.x - this.x);
    var deltaAngle = Math.atan2(deltaY, deltaX);
    //lerp angle
    this.angle = lerpAngle(deltaAngle, this.angle, 0.5) ;//-Pi to Pi

    ctx1.save();
    ctx1.translate(this.x, this.y);
    ctx1.rotate(this.angle); 
    //the sequence matters since overlapping
    ctx1.drawImage(this.childTail, -this.childTail.width * 0.5 + 24, -this.childTail.height * 0.5);
    ctx1.drawImage(this.childBody, -this.childBody.width * 0.5, -this.childBody.height * 0.5);
    ctx1.drawImage(this.childEye, -this.childEye.width * 0.5, -this.childEye.height * 0.5);
    ctx1.restore();
}