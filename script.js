//todo:
// first three tries have three lives
//checkpoints

//level 3
//rainbow title

var sketchProc = function(p) {
  with (p) {
    // this line sets the size of the canvas
    size(500, 500)
///// WRITE YOUR CODE HERE /////////////////////






    var highscore = 42;
    var level = 1;

    //TEST CODE
    level = 4;

//---------Define Variables---------\\
var player, playing, strret, enemy;
var pause = true;
var score = 0

var explosion
var enemies
var enemyspeed


//---------Set Variables---------\\
var setup = function() {
  size(500,500);
  imageMode(CENTER);
  rectMode(CENTER);
  explosion = loadImage("explosion.png");  
    enemy = {
    xpos:250,
    ypos:-500,
    width:50,
    height:100,
    speed: 5,
   img: loadImage("cop.png")
  } 

enemyspeed = 5
  enemies = [enemy];

  street = {
    ypos: 0,
    speed: 5
  };
  player = { 
    xpos:250, 
    ypos:400, 
    width: 50,
    height:100,
    img: loadImage ("car.jpg")
  };
  score = 0;
  playing = true;  
  background(0);
  drawStreet();
  textSize (32)
  fill (0)
  text ("press any key to start", 100, 100)
  
};;

//---------Call Functions---------\\
var draw = function(){
  if(playing && !pause){
      background(0);
      drawStreet();
      drawPlayer();
      drawEnemy();
      moveEnemy();
     checkLose();
      drawscore();
  drawhighscore();
  }
};
//---------Define Functions---------\\ 
var moveEnemy = function(){
  for (var enemy of enemies) {
 enemy.ypos += enemyspeed;
  if(enemy.ypos > 550) {
    enemy.ypos = -50;

   var lanes =[150, 250, 350];
    enemy.xpos = lanes[floor(random(0,3))];
    score++
    if (score % 10 === 0){
     enemyspeed += 2
    }
    if (score == 25) {
      pause = true;
      fill (0)
      textSize (32)
      text ("press any key to start \n\n        level 2", 100, 150)
      //Level 2
      enemy2 = {
        xpos:250,
        ypos:-600,
        width:50,
        height:100,
        speed: 5,
       img: loadImage("cop.png")
      } 
      enemies.push(enemy2);
      enemyspeed = 5
      level = 2;
      
    }
    if (score == 50){
      level = 3;
      enemyspeed = 7
      pause = true;
      fill (0)
      textSize (32)
      text ("press any key to start \n\n        level 3", 100, 150)
  }
if (score == 76) {
  level = 4;
  enemyspeed = 7
  pause = true;
  fill (0)
  textSize (32)
  text ("press any key to start \n\n        level 4", 100, 150)
  enemies.pop();
}
for (var l =5; l < 11; l++)
  if (score == l * 25 - 35) {
    level = l 
    pause = true
    fill (0)
    textSize (32)
    text ("press any key to start \n\n        level " + l, 100, 150)
  }
    
  }
  }
  } 
    var drawEnemy = function() {
   for (var enemy of enemies) {
    image(enemy.img, enemy.xpos, enemy.ypos, enemy.width, enemy.height);
   }
    };
     
var drawStreet = function() {
  fill(125); rect (250, 250, 350, 500);

    fill(255, 255, 0);
  for (var y = 0; y <= 500; y += 50) {
    rect (250, (y + street.ypos)%550-30, 20, 30);
  }
  street.ypos += street.speed;
 
}; 
    var drawPlayer = function() {
  image(player.img, player.xpos, player.ypos, player.width, player.height);
};

var checkLose = function() {
 for (var enemy of enemies) {
  //if they are in the same lane
  if (enemy.xpos == player.xpos){
    //if they are touching
    if (enemy.ypos > 300 && enemy.ypos < 500) {
      playing = false;
      image(explosion, enemy.xpos, enemy.ypos, 250, 250);
      image(explosion, player.xpos, player.ypos, 250, 250);

      //check high score
      if (score > highscore) {
        highscore = score;
        text ("New Highscore: " + highscore, 250, 250)
      }
      
    }
  }
  }
}

var drawscore = function (){
  textSize (20)
  text ("score:"+score, 50, 50)
} 
 var drawhighscore = function (){
  text ("highscore:"+highscore, 50, 100)}


var keyPressed = function() {
  if (keyCode === LEFT || keyCode === 65){ //a
    if (player.xpos > 150)
      player.xpos -= 100;
  }
  if (keyCode === RIGHT|| keyCode === 68){//ddddddddddddd
    if (player.xpos < 350 )
      player.xpos += 100;
  }
  if (playing == false){
    setup();
    if (level >= 2){
      
      //Level 2
      enemy2 = {
        xpos:250,
        ypos:-600,
        width:50,
        height:100,
        speed: 5,
       img: loadImage("cop.png")
      } 
      enemies.push(enemy2);
      enemyspeed = 5
      score = 25;

    }
    if (level >= 3){
      enemyspeed = 7
      score = 50; 
    }
  if (level >= 4)   {
      enemyspeed = 7
      score = 76; 
     enemies.pop();
  } 
    if (level > 4){
      score = level*25-35;
      enemyspeed = floor(score/10) * 2 - 7
    }
  }
if (pause)  {
  pause = false;
}
}

  




////// WHERE YOUR CODE ENDS ////////////////////// 
  }
}
var canvas = document.getElementById("myCanvas"); 
var p = new Processing(canvas, sketchProc); 
