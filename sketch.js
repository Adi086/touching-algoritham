function setup() {
  createCanvas(800,400);
  ball1=  createSprite(300, 200, 50, 50);
   ball2= createSprite(100, 200, 50, 50);

   ball1.shapeColor= "yellow";
   ball2.shapeColor= "yellow";
}

function draw() {
  background(255,255,255); 

 ball1.x =mouseX;
 ball1.y= mouseY;
if (ball1.x-ball2.x < ball2.width/2+ ball1.width/2 &&
ball2.x-ball1.x < ball2.width/2+ ball1.width/2 &&
ball1.y-ball2.y < ball2.width/2+ ball1.width/2 &&
ball2.y-ball1.y < ball2.height/2+ ball1.height/2 ) {
  ball1.shapeColor= "red";
  ball2.shapeColor= "red"
}
else {
  ball1.shapeColor= "yellow";
   ball2.shapeColor= "yellow";
}

  drawSprites();
}