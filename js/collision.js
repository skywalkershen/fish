//if dist between mom and fruit is smaller than certain value, eat
function collision(){
    if(!score.gameOver){
        for(var i = 0; i < fruit.num; i++){
            if(fruit.alive[i]){
                //calculate dist
                var dist = calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
                if(dist < 200){
                    //eaten
                    fruit.dead(i);
                    fruit.born(i);
                    //score.fruitNum = score.double == 2? 2 * score.fruitNum : score.fruitNum + 1;
                    score.fruitNum++;
                    mom.bigBodyCnt = mom.bigBodyCnt >= 7 ? 7 : mom.bigBodyCnt + 1;
                    //score.double = fruit.type[i] == "blue"? 2 : 1;
    //?????????note: sometimes the double doesn't work
                    console.log("fruit[" + i + "]: " +fruit.type[i]);
                    if(fruit.type[i] == "blue"){
                        score.double = 2;
                    }
                    
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
            //score.reset();
        }
    }
    
}