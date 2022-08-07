var towerImg, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg,ghostjumpImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var balcon;
function preload(){
  towerImg = loadImage("tower.png");
  doorImg = loadImage("door.png");
  climberImg = loadImage("climber.png");
  ghostImg = loadImage("ghost-standing.png");
  ghostjumpImg = loadImage("ghost-jumping.png");
  spookySound = loadSound("spooky.wav");
}

function setup() {
  createCanvas(600, 600);
  tower = createSprite(300,300);
  tower.addImage("tower",towerImg);
  tower.velocityY = 1;
  ghost = createSprite(200,200,50,50);
  ghost.addImage("ghost",ghostImg);
  ghost.scale = 0.5;
  doorsGroup = newGroup;
  climbersGroup = newGroup;
  invisibleBlockGroup = newGroup;
  
}

function draw() {
  background(200);
 
  if(tower.y > 400){
   tower.y = 300
   }

  if (gameState === "play"){
    if(tower.y > 400){
      tower.y = 300
      }
   
    if (keyDown("A")){
  ghost.x = ghost.x - 3;
  }
  if (keyDown("D")){
    ghost.x = ghost.x + 3;
    }
  
  if (keyDown("space")){
    ghost.velocityY =  -5;
    //ghost.change (ghostjumpImg);
    }
    ghost.velocityY = ghost.velocityY + 0.5;
  }

  balcon();       
  drawSprites();
}
function balcon(){
  if (frameCount % 240 === 0){
    var door = createSprite(200,-50);
    var climber = createSprite(200,10);
    var invisibleBlock = createSprite(200,15);
    invisibleBlock.width = climber.width;
    invisibleBlock.height = 2;
    door.x = Math.round(random (120,400));
    climber.x = door.x;
    invisibleBlock.x = door.x;
    door.addImage (doorImg);
    climber.addImage(climberImg);
    door.velocityY = 1;
    climber.velocityY = door.velocityY;
    invisibleBlock.velocityY = door.velocityY;
    ghost.depth = door.depth;
    climber.depth = door.depth;
    ghost.depth += 1; 
    climber.lifetime = 600;
    door.lifetime = 600;
    
  }
}
