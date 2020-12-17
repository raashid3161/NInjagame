//background
//1 deep, n-front
var layer1,layer2,layer3,layer4
var layer1Img,layer2Img,layer3Img,layer4Img,
    layer5Img,layer6Img,layer7Img,layer8Img,layer8Img;
var bg1,bg1Img;

var playb,playbImg;
var plr,plrImg;
var sceretbook,sceretbookImg
var light,lightImg;
var score = 0

var invisibleGround;

var enemy,enemyImage,enemy2,enemy2Image;
var enemyGroup,enemy2Group;

var restart,gameover;

var PLAY=0
var END=1
var gamestate = PLAY;

function preload(){
  layer1Img = loadImage("Layer1.png")
  layer2Img = loadImage("Layer2.png")
  layer3Img = loadImage("Layer3.png")
  layer4Img = loadImage("Layer4.png")
 // layer5Img = loadImage("Layer5.png")
  layer6Img = loadImage("Layer6.png")
  layer7Img = loadImage("Layer7.png")
  layer8Img = loadImage("Layer8.png")
  layer9Img = loadImage("layer9.png")
  bg1Img = loadImage("Bg1.jpg")
  sceretbookImg = loadImage("book.png")
  lightImg = loadImage("light.png")
  playbImg = loadImage("playb.png")
  plrImg = loadImage("plr1.png")
  enemyImage = loadImage("EnemyBird.png");
  enemy2Image = loadImage("EnemyP1Idle.png");
  restartImage = loadImage("restart.png");
  gameoverImage = loadImage("gameOver.png");
  
}

function setup(){
  createCanvas(600,400)
  layer1 = createSprite(250,1)
  layer1.addImage(layer1Img)
  layer1.velocityX = -0.6
  layer2 = createSprite(250,1)
  layer2.addImage(layer2Img)
  layer2.velocityX = -1
  console.log(score)
  layer3 = createSprite(250,1)
  layer3.addImage(layer3Img)
  layer3.velocityX = -2
  layer4 = createSprite(250,1)
  layer4.addImage(layer4Img)
  layer4.velocityX = -3
  
  // layer5 = createSprite(250,1)
  // layer5.addImage(layer5Img)
  // layer5.velocityX = -3.5
  
  layer6 = createSprite(0,0)
  layer6.addImage(layer6Img)
  layer6.velocityX = -3.5
  
  layer7 = createSprite(250,0)
  layer7.addImage(layer7Img)
  layer7.velocityX = -3.5
  
  layer8 = createSprite(250,0)
  layer8.addImage(layer8Img)
  layer8.velocityX = -3.5
  
  layer9 = createSprite(250,0)
  layer9.addImage(layer9Img)
  layer9.velocityX = -3.5
  
  invisibleGround = createSprite(300,325,600,2);
  invisibleGround.visible = false;
  
  
  bg1 = createSprite(270,200)
  bg1.scale = 0.6
  bg1.addImage(bg1Img)
   
  sceretbook = createSprite(275,250)
  sceretbook.scale = 0.08
  sceretbook.addImage(sceretbookImg)
  
  light = createSprite(275,250)
  light.scale = 0.2
  light.addImage(lightImg)
  light.visible = false
  
  
  playb = createSprite(275,350)
  playb.scale = 0.4
  playb.addImage(playbImg)
  playb.visible = false
  
  plr = createSprite(275,300)
  plr.scale = 2
  plr.addImage(plrImg)
  plr.visible = false
  plr.debug = true
  
  restart = createSprite(300,200);
  restart.addImage(restartImage);
  restart.visible = false;
  
  
  score = 0;
  
  enemyGroup = new Group();
  enemy2Group = new Group();
 
}

function draw(){
  background(255)
  if(gamestate===PLAY){
    if(keyDown("space") && plr.y >= 290) {
      plr.velocityY = -12;
    }
    plr.velocityY+=0.7
score = score + Math.round(getFrameRate()/60);
    if(plr.isTouching(enemy2Group)||plr.isTouching(enemyGroup)){
  gamestate = END
  }

  
  spawnEnemy()
  spawnEnemy2()
  
  }
   
  else if(gamestate===END){
    layer1.velocityX = 0;
    layer2.velocityX = 0
    layer3.velocityX = 0
    layer4.velocityX = 0
    layer6.velocityX = 0
    layer7.velocityX = 0
    layer8.velocityX = 0
    layer9.velocityX = 0
    enemyGroup.destroyEach()
    enemy2Group.destroyEach();
    plr.destroy();
  }
  
  drawSprites()
  textSize(20);
   text("Score: "+ score, 400,50);
  

  
  plr.collide(invisibleGround);
  
  if(mousePressedOver(sceretbook)){
    light.visible = true
    textFont('Georgia');
    fill("red")
    strokeWeight(2)
    stroke("lightGreen")
    sceretbook.depth = light.depth+1
    playb.visible = true
    text('You are.... and .....', 20, 130,50);
  }
  
  if(mousePressedOver(playb)){
    bg1.visible = false
    playb.visible = false
    sceretbook.visible = false
    light.visible = false
    plr.visible = true
  }

 
 if(layer1.x<50){
   layer1.x = 200
 }
  
   
 if(layer2.x<50){
   layer2.x = 200
 }
  
   
 if(layer3.x<50){
   layer4.x = 200
 }
   
 // if(layer5.x<50){
 //   layer5.x = 200
 // }
  
  
   if(layer6.x<50){
   layer6.x = 200
 }
   if(layer7.x<50){
   layer7.x = 200
 }
   if(layer8.x<50){
   layer8.x = 200
 }
  
     if(layer9.x<50){
   layer9.x = 200
 }
}

function spawnEnemy() {
  //write code here to spawn the clouds
  if (frameCount % 180 === 0) {
    var enemy = createSprite(600,120,40,10);
    enemy.y = Math.round(random(80,120));
    enemy.addImage(enemyImage);
    enemy.scale = 2;
    enemy.velocityX = -3;
    
     //assign lifetime to the variable
    enemy.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
  enemyGroup.add(enemy); 
  //enemyGroup.add(enemy2)
  }
  
}

function spawnEnemy2(){
   if (frameCount % 180 === 0) {
    var enemy2 = createSprite(600,300,40,10);
    enemy2.addImage(enemy2Image);
    enemy2.scale = 2;
    enemy2.velocityX = -3.5;
    
     //assign lifetime to the variable
    enemy2.lifetime = 200;
    
    //adjust the depth
    
    
    //add each cloud to the group
  enemy2Group.add(enemy2); 
  }
  
  
}