var vill,ground;
var lead,leadimg;
var stone,bg,bgimg;
var score=0;
function preload(){
leadimg = loadImage("gamefl.png")
bgimg = loadImage("bg.jpg")
}
function setup() {
  createCanvas(1600,700);
  lead = createSprite(256,530,20,40);
  ground = createSprite(800,670,1600,20);
lead.addImage(leadimg);

lead.scale = 0.6;
ground.visible = false;
}

function draw() {
  background(bgimg);  
  console.log(lead.y);
  text("Score: "+ score, 500,50);
 if(keyDown("space" )&& lead.y >= 546)
 {
   lead.velocityY = -10;
 }
 lead.velocityY = lead.velocityY + 0.8;
 lead.collide(ground);

  drawSprites();
}
