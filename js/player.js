

function Player(config,x,y,width,height,scale)
{
  this.config = config;
  this.folder = config.folder;
  this.defaultState = config.states[config.states.default];
  this.currentState = this.defaultState;
  this.nextState = null;
  this.x=(x==null)?0:x;
  this.y=(y==null)?0:y;
  this.width=(width==null)?0:width;
  this.height=(height==null)?this.width:height;
  this.scale = scale;
  this.timer = 0;
  this.image = new Image();

  this.action = null;

  this.configAnimation();
  //configPlayer();
}

Player.prototype.configAnimation=function() {
  var imageName = this.currentState.sprite_sheet;
  this.image.src = this.folder + imageName;
  this.currentFrame = 1;
  timeForAnimation = elapsedTime;
}


Player.prototype.drawImage=function(ctx,sx,sy,sw,sh){
  ctx.fillStyle='#000000';
  //ctx.fillRect(this.x,this.y,this.width,this.height);
  ctx.drawImage(this.image, sx, sy, sw, sh, this.x, this.y, this.width, this.height);
}

Player.prototype.event = function(event){
  if (event == KEY_RIGHT )
  {
    //this.x += 10;
    this.nextState = this.config.states.walk;
  }
}

Player.prototype.eventKeyboard = function(pressing){
  if (pressing[KEY_UP] == true)
  {
    this.y -= 10;

  }
  if (pressing[KEY_RIGHT] == true )
  {
    //this.x += 10;
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

Player.prototype.updateGraphics = function(context,time) {
  framesForSecond = 0.2;
  frames = this.currentState.frames;

  // if (this.currentFrame == 1){
  //   timeForAnimation = time;
  // }

  this.currentFrame = ~~((time-timeForAnimation)*framesForSecond)%frames + 1;

  player1.drawImage(context,(this.currentFrame-1)*player1.width,0,this.width,this.height);

  if (this.currentFrame >= frames){
    if (this.nextState != null) {
      this.currentState = this.nextState;
      this.nextState = null;
    }else {
      this.currentState = this.defaultState;
    }
    this.configAnimation();
  }
  // if (this.action == KEY_RIGHT && player1.currentFrame == 0){
  //   timeForAnimation = time;
  //   this.currentFrame = 1;
  //   this.action == null;
  // }else if( this.currentFrame > 0 && this.currentFrame < frames){
  //   framesForSecond = 30;
  //   this.currentFrame = ~~((time-timeForAnimation)*framesForSecond +1)%frames;
  // }


  // if (player1.action == KEY_LEFT && player1.currentFrame == 0){
  //   timeForAnimation = time;
  //   player1.currentFrame = 7;
  //   player1.action == null;
  // }else if( player1.currentFrame > 0 && player1.currentFrame < frames){
  //   framesForSecond = 3;
  //   currentFrame = 7 - ~~((time-timeForAnimation)*framesForSecond +1)%frames;
  //   player1.currentFrame = currentFrame;
  // }


}
