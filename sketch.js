var bg,bgImg;
var player, shooterImg, shooter_shooting;
var alien,alienImg;
var alienGroup;
var invisibleGround;
function preload(){
  
  shooterImg = loadImage("assets/soldado.png")
  alienImg=loadImage("assets/alien.png")
  bgImg = loadImage("assets/space.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.1
  

//creating the player sprite
player = createSprite(displayWidth-1150, displayHeight-400, 50, 50);
console.log("player",player.x)
 player.addImage(shooterImg)
   player.scale = 0.3
   player.debug = true
   player.setCollider("rectangle",0,0,300,500)



  invisibleGround = createSprite(displayWidth-1150,displayHeight-300,4000,10);
  invisibleGround.visible = false;


   alienGroup=createGroup();

}

function draw() {
  background(0); 



  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed



//alien.velocityX=-2
  //alien.velovityY=-2
   aliens();
  
//alien.y=player.y 

player.collide(invisibleGround);

drawSprites();

}

function aliens(){
if(frameCount%120===0){
alien=createSprite(1190,displayHeight/2);
    
   alien.x=Math.round(random(1000,1500))
   console.log(alien.x);
   alien.addImage(alienImg);
   alien.scale=0.2
   alien.velocityX=-2
   alienGroup.add(alien)
   alienGroup.setLifetimeEach(120);
}

}
