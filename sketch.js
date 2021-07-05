

function preload(){
bg=loadImage("sea.png")
shipss=loadAnimation("ship-1.png","ship-2.png","ship-3.png" ,"ship-4.png")
}

function setup(){
  createCanvas(400,400);
  back=createSprite(100,100,100,100)
  back.addImage("sea",bg)
  back.velocityX= -4
  back.scale=0.37

 ship1=createSprite(100,120,20,20)
  ship1.addAnimation("dd",shipss)
  ship1.scale=0.2
}

function draw() {
  if(back.x<10){
    back.x=200
  }
  background("blue");
 drawSprites()
}