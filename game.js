window.addEventListener('load',init,false);
var canvas = null,
    ctx = null,
    lastPress = null,
    pressing = [];


var elapsedTime = 0;
var elapsedTimeForAnimation = 0;
var player1 = new Player(20,0,500,800,'tomas/spritesheet2.png');
var fondo = null;
var KEY_ENTER = 13,
    KEY_LEFT = 37,
    KEY_UP = 38,
    KEY_RIGHT = 39,
    KEY_DOWN = 40;


window.requestAnimationFrame = (function ()
{
  return window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function (callback)
  {
    window.setTimeout(callback, 17);
  };
}());

function init(){
    canvas=document.getElementById('canvas');
    ctx=canvas.getContext('2d');

    run();
    repaint();
}


function run() {
  setTimeout(run, 50);
  act(0.05);
}

function act(deltaTime) {

  var dir = null;
  if (pressing[KEY_UP] == true)
  {
    player1.y -= 10;
  }
  if (pressing[KEY_RIGHT] == true )
  {
    player1.x += 10;
  }
  if (pressing[KEY_DOWN] == true )
  {
    player1.y += 10;
  }
  if (pressing[KEY_LEFT] == true )
  {
    player1.x -= 10;
  }

  // Elapsed time
  elapsedTime+=deltaTime;
  if(elapsedTime>3600)
    elapsedTime-=3600;

}

function repaint() {
  window.requestAnimationFrame(repaint);
  paint(ctx);
}

function paint(ctx){
    ctx.fillStyle='#0f0';
    ctx.fillRect(50,50,1000,600);


    fondo  = new Image();
    fondo.src = 'assets/fondos/fondo2.jpg';
    ctx.drawImage(fondo, 0, 0);


    player1.drawImage(ctx);

    frames = 8;


    if (player1.action == KEY_RIGHT && player1.frameNumber == 0){
      elapsedTimeForAnimation = elapsedTime;
      player1.frameNumber = 1;
      player1.action == null;
    }else if( player1.frameNumber > 0 && player1.frameNumber < frames){
      framesForSecond = 30;
      frameNumber = ~~((elapsedTime-elapsedTimeForAnimation)*framesForSecond +1)%frames;
      player1.frameNumber = frameNumber;
    }


    // if (player1.action == KEY_LEFT && player1.frameNumber == 0){
    //   elapsedTimeForAnimation = elapsedTime;
    //   player1.frameNumber = 7;
    //   player1.action == null;
    // }else if( player1.frameNumber > 0 && player1.frameNumber < frames){
    //   framesForSecond = 3;
    //   frameNumber = 7 - ~~((elapsedTime-elapsedTimeForAnimation)*framesForSecond +1)%frames;
    //   player1.frameNumber = frameNumber;
    // }

    player1.drawImage(ctx,player1.frameNumber*player1.width,0,player1.width,player1.height);

  }

//Events
document.addEventListener('keydown', function (evt)
{
  lastPress = evt.which;
  if(player1.action == null) {
    player1.action = evt.which;
  }

  pressing[evt.which] = true;
}, false);

document.addEventListener('keyup', function (evt)
{
  player1.action = null;
  pressing[evt.which] = false;
}, false);

//PLAYER
function Player(x,y,width,height,imageSrc,scale)
{
  this.x=(x==null)?0:x;
  this.y=(y==null)?0:y;
  this.width=(width==null)?0:width;
  this.height=(height==null)?this.width:height;
  this.scale = scale;
  this.timer=0;
  this.image = new Image();
  this.image.src = 'assets/'+imageSrc;
  this.action = null;
  this.frameNumber = 0;
}

Player.prototype.drawImage=function(ctx,sx,sy,sw,sh){
  ctx.fillStyle='#000000';
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.drawImage(this.image, sx, sy, sw, sh, this.x, this.y, this.width, this.height);
}
