//if dist between mom and fruit is smaller than certain value, eat
function collision(){
    if(!score.gameOver){
        for(var i = 0; i < fruit.num; i++){
            if(fruit.alive[i]){
                //calculate dist
                var dist = calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
                if(dist < 500){
                    //eaten
                    fruit.dead(i);
                    //console.log("fruit[" + i + "] eaten is: " +fruit.type[i]);
//note the sequence of dead, type check and born can lead to bug!!!!!!!!!!!!
                    score.double = fruit.type[i] == "blue"? 2 : 1;
                    score.fruitNum++;
                    mom.bigBodyCnt = mom.bigBodyCnt >= 7 ? 7 : mom.bigBodyCnt + 1;
                    wave.born(fruit.x[i], fruit.y[i]);
                    fruit.born(i);
                    
                    
                }
            }
        }
    }
    
}

function fishCollision(){
    if(score.fruitNum > 0 && !score.gameOver){
        var dist = calLength2(mom.x, mom.y, child.x, child.y);
        if(dist < 900){
            //child recover
            child.childBodyCnt = 0;
            console.log("fed");
            //score reset       
            mom.bigBodyCnt = 0;
            score.addScore();
            fed.born(child.x, child.y);
            //score.reset();
        }
    }
    
}