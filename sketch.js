
var b,c,d

var boy

function preload(){
b=loadImage("snow2.jpg")
c=loadAnimation("girl1.png","girl2.png")
d= loadImage("snow45.png")
}


function setup() {
  createCanvas(800,400);
boy=createSprite(200, 350, 50, 50);
boy.addAnimation("boy",c)
boy.scale= 0.3
}

function draw() {
  background(b); 
  
  snowfall()
  

  drawSprites();
}


function snowfall(){
  if(frameCount%40===0){
  var snow = createSprite(200,-10)
snow.x = Math.round(random(1,800))
snow.velocityY= 4
snow.addImage("snow",d)
snow.scale=0.1
}
}