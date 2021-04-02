function setup() {
  createCanvas(400,400);
  a=createSprite(100, 200, 50, 50);
  a.shapeColor = "red";
  a.debug = true;
  b=createSprite(340, 200, 50, 50);
  b.shapeColor = "red";
  b.debug = true
}

function draw() {
  background(0);  

 if(a.x-b.x<=a.width/2+b.width/2
  &&b.x-a.x<=a.width/2+b.width/2
  &&a.y-b.y<=a.height/2+b.height/2
  &&b.y-a.y<=a.height/2+b.height/2){
    a.shapeColor = "yellow";
    b.shapeColor = "yellow";
  }else{
    a.shapeColor = "red";
    b.shapeColor = "red";
  }
  





  b.x = mouseX;
 b.y = mouseY;

  drawSprites();
}