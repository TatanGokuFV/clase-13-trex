var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;
var cloud,cloudImg;
var score;
var obstacle;

function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImg=loadImage("cloud.png");
  obstacle1=loadImage("obstacle1.png")
  obstacle2=loadImage("obstacle2.png")
  obstacle3=loadImage("obstacle3.png")
  obstacle4=loadImage("obstacle4.png")
  obstacle5=loadImage("obstacle5.png")
  obstacle6=loadImage("obstacle6.png")
  
}

function setup() {

  createCanvas(600,200)
  
  //crear sprite de trex
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //crear sprite de suelo
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //crear sprite de suelo invisible
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generar números aleatorios
  var rand =  Math.round(random(1,100))
  console.log(rand)
  score=0;

}

function draw() {
  //establecer color de fondo
  background(180);
  text("puntuacion: "+score,500,50);
  score=score+Math.round(frameCount/60);
  //console.log(trex.y)
  
  
  
  //hacer que el trex salte al presionar la barra espaciadora
  if(keyDown("UP_ARROW") && trex.y >=160) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //evitar que el trex caiga
  trex.collide(invisibleGround);
  //console.log(frameCount);
  //aparecer nubes
  spawnClouds()
  spawnObstacles();
  drawSprites();
}

//función para aparecer las nubes
function spawnClouds(){
 if(frameCount%60===0){
 cloud=createSprite(600,100,40,10);
 cloud.addImage("cloud",cloudImg);
 cloud.scale=random(0.4,0.6);
 cloud.y=Math.round(random(20,90));
 cloud.velocityX=-3;
 cloud.lifetime=210;
 cloud.depth=trex.depth;
 trex.depth=trex.depth+1;
 }
}

function spawnObstacles(){
  if(frameCount % 60 === 0){
  obstacle=createSprite(600,165,10,40);
  obstacle.velocityX=-6;
  var rand=Math.round(random(1,6));
  switch(rand){
    case 1: obstacle.addImage(obstacle1);
    break;
    case 2: obstacle.addImage(obstacle2);
    break;
    case 3: obstacle.addImage(obstacle3);
    break;
    case 4: obstacle.addImage(obstacle4);
    break;
    case 5: obstacle.addImage(obstacle5);
    break;
    case 6: obstacle.addImage(obstacle6);
    break;
    default:break;

}
obstacle.scale=0.4;
obstacle.lifetime=210;
  }
  }
  