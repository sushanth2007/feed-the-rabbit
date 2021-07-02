var garden,rabbit;
var gardenImg,rabbitImg;
var apples,appleimg
var leaf,leafimg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleimg = loadImage("apple.png");
  leafimg = loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x = mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);
createapples();
  createleaf();

drawSprites();

}
function createapples(){

  if (frameCount % 80 === 0) {
  apple = createSprite(200,200,5,5)
  apple.scale =0.1
  apple.velocityY = 3
  apple.y = Math.round(random(50, 350),40, 10, 10);
  apple.addImage(appleimg)
 apple.setlifetime = 200
 //drawSprites()
  }}
 function createleaf(){

  if (frameCount % 80 === 0) {
  leaf = createSprite(250,200,5,5)
  leaf.scale =0.1
  leaf.velocityY = 3
  leaf.y = Math.round(random(50, 350),40, 10, 10);
  leaf.addImage(leafimg)
  leaf.setlifetime = 200
 //drawSprites()





}}





