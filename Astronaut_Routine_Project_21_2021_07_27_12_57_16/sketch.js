var astronaut;
var bg, bgimg;
var brush;
var gym;
var bath;
var eat;
var move;
var inv1, inv2, inv3, inv4

function preload(){

  //To pre load the images/animation.
  bgimg = loadImage("iss.png");
  sleep = loadImage("sleep.png");
  brush = loadAnimation("brush.png");
  gym   = loadAnimation("gym1.png", "gym2.png");
  bath  = loadAnimation("bath1.png", "bath2.png");
  eat   = loadAnimation("eat1.png", "eat2.png");
  move  = loadAnimation("move1.png", "move.png");
  
}

function setup() {
  
  //To create the canvas 
  createCanvas(450, 300);
  
  //To create the sea do the following commands
  bg = createSprite(225, 150, 500, 300);
  bg.addImage("image", bgimg);
  bg.scale = 0.090;
  
  astronaut = createSprite(225, 150);
  astronaut.addImage("sleeping", sleep);
  astronaut.scale = 0.070;
  
  inv1 = createSprite(1, 150, 5, 300);
  inv1.visible = false;
  inv2 = createSprite(450, 150, 5, 300);
  inv2.visible = false;
  inv3 = createSprite(225, 1, 450, 1);
  inv3.visible = false;
  inv4 = createSprite(225, 300, 450, 1);
  inv4.visible = false;
  
  
  
}

function draw(){
  
  background(220);
  
  edges = createEdgeSprites();
  
  if (keyDown("Up_Arrow")){
    
    astronaut.addAnimation("brushing", brush);
    astronaut.changeAnimation("brushing");
    astronaut.x = 350;
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if (keyDown("Down_Arrow")){
    
    astronaut.addAnimation("gymming", gym);
    astronaut.changeAnimation("gymming");
    astronaut.x = 225;
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if (keyDown("Left_Arrow")){
    
    astronaut.addAnimation("bathing", bath);
    astronaut.changeAnimation("bathing");
    astronaut.x = 225;
    astronaut.y = 275;
    astronaut.velocityX = 0;
    astronaut.velocityY = 0;
    
  }
  
  if (keyDown("Right_Arrow")){
    
    astronaut.addAnimation("eating", eat);
    astronaut.changeAnimation("eating");
    astronaut.velocityX =  1;
    astronaut.velocityY = -1;
    
  }
  
  if (keyDown("m")){
    
    astronaut.addAnimation("moveing", move);
    astronaut.changeAnimation("moveing");
    astronaut.velocityX = -1;
    astronaut.velocityY =  1;
    
  }
  
  astronaut.bounceOff(inv1);
  astronaut.bounceOff(inv2);
  astronaut.bounceOff(inv3);
  astronaut.bounceOff(inv4);
  
  drawSprites();
  
  fill("white");
  textSize(13);
  text("Instructions:", 5, 15);
  text("Up Arrow = Brushing", 5, 30);
  text("Down Arrow = Gymming", 5, 45);
  text("Left Arrow = Bathing", 5, 60);
  text("Right Arrow = Eating", 5, 75);
  text("M Key = Moving:", 5, 90);
  
}