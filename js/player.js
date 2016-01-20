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

Player.prototype.eventKeyboard = function(pressing){
  if (pressing[KEY_UP] == true)
  {
    this.y -= 10;
  }
  if (pressing[KEY_RIGHT] == true )
  {
    this.x += 10;
  }
  if (pressing[KEY_DOWN] == true )
  {
    this.y += 10;
  }
  if (pressing[KEY_LEFT] == true )
  {
    this.x -= 10;
  }
}

Player.prototype.updateGraphics = function(context) {
  frames = 8;


  if (this.action == KEY_RIGHT && player1.frameNumber == 0){
    elapsedTimeForAnimation = elapsedTime;
    this.frameNumber = 1;
    this.action == null;
  }else if( this.frameNumber > 0 && this.frameNumber < frames){
    framesForSecond = 30;
    frameNumber = ~~((elapsedTime-elapsedTimeForAnimation)*framesForSecond +1)%frames;
    this.frameNumber = frameNumber;
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

  player1.drawImage(context,this.frameNumber*player1.width,0,this.width,this.height);

}
