//if dist between mom and fruit is smaller than certain value, eat
function collision(){
    for(var i = 0; i < fruit.num; i++){
        if(fruit.alive[i]){
            //calculate dist
            var dist = calLength2(mom.x, mom.y, fruit.x[i], fruit.y[i]);
            if(dist < 900){
                //eaten
                fruit.dead(i);
                fruit.born(i);
            }
        }
    }
}