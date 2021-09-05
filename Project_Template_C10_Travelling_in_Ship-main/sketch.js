var sea, seaImage;

var ship1, ship1Image;
var ship2, ship2Image;

var ship_moving;

function preload () {
  seaImage = loadImage("sea.png");

  ship_moving = loadAnimation("ship-1.png, ship-2.png");

}

function setup(){
  createCanvas(600,400);
  //create sprites and add images 
      ship1 = createSprite(300,200, 300,200);
      ship2 = createSprite(300,200, 300,200);
      
    ship_moving.addAnimation("ship-1.png,ship-2.png");
    
       sea.addImage("sea.png");
      sea = createSprite(300,200,600,400);
}
function draw() {
  background("blue");
 
  seaImg.velocityx = -3;
  if (sea.x < 0) {
    sea.x=sea.width/2;

  }
}
drawSprites;
