//use two canvas, one for background, one for obj
var can1;
var can2;
//canvas.width is not the width in style!!!
var canWidth = 800;
var canHeight = 600;

var ctx1;
var ctx2;

var lastTime;
var interval;

var bgPic = new Image();


var weed;
var fruit;
var mom;
var child;

var mousex;
var mousey;
var score;
var wave;
var fed;
var dust;
var dustPic = [];


document.body.onload = game;
function game(){
    
  //  console.log("liuyin no tameni, start");
    init();
    lastTime = Date.now();
    interval = 0;
    gameloop();
}

function init(){
        //getContext is not a part of jQuery library, it's a part of WebAPI. You have to reference the raw DOM Node object instead of jQuery wrapper:
    can1 = $("#canvas1");
    can1 = can1[0];
    ctx1 = can1.getContext('2d');
    //****default width for canvas is 300*150!!!!!!!!!!!!!!!!!!!!!!!!
    //****This is the prob leads to drawing failure
    can1.width = canWidth;
    can1.height = canHeight;
    //can2 = $("#canvas2");
 //   ctx2 = can2[0].getContext('2d');
    can2 = $("#canvas2");
    can2 = can2[0];
    ctx2 = can2.getContext('2d');
    can2.width = canWidth;
    can2.height = canHeight;
    //for printing score
    ctx1.fillStyle = "white";
    ctx1.font = "20px Verdana";
    ctx1.textAlign = "center";

    $("#canvas1").mousemove( function(e){
        if(!score.gameOver){
            if(e.offsetX || e.layerX){
                mousex = e.offsetX == undefined ? e.layerX : e.offsetX;
                mousey = e.offsetY == undefined ? e.layerY : e.offsetY;
                //console.log(mousex + ", " + mousey);
            }
        }
    }
        );
    bgPic.src="src/background.jpg";
    bgPic.onload= function(){
        console.log("bgPic loaded");        
    }

    weed = new weedObj();
    weed.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj;
    mom.init();
    child = new childObj;
    child.init();

    mousex = mom.x;
    mousey = mom.y;

    score = new scoreObj();

    wave = new waveObj();
    wave.init();

    fed = new fedObj();
    fed.init();
    
    for(var i = 0; i < 7; i++){
        dustPic[i] = new Image();
        dustPic[i].src = "./src/dust" + i + ".png";
        dustPic[i].onload = function(){
            console.log("dustpic" + i + " loaded");
        }
    }
    dust = new dustObj();
    dust.init();
}

function gameloop(){
    requestAnimFrame(gameloop);
    //decide fps depends on device capability, this one is integrated for multibrowsers, defined in commonfunctions.js
    
    now = Date.now();
    //to avoid interval growing too much after switching to other tab
    interval = interval < 20 ? now - lastTime : 20;
    lastTime = now;
    drawBackground();//need to refresh background, or the fruits will form a path
    weed.draw();
    //fruitMonitor()
    fruit.draw();
    
    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    collision();
    fishCollision();
    child.draw();
    score.draw();
    wave.draw();
    fed.draw();
    dust.draw();
}