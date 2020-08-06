var fixedRect, movingRect, miscRect, mouseRect, staticRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  miscRect = createSprite(400, 400,80,30);
  miscRect.shapeColor = "green";
  miscRect.debug = true;
  mouseRect = createSprite(400, 400,80,30);
  mouseRect.shapeColor = "green";
  mouseRect.debug = true;
  staticRect = createSprite(100, 100,80,30);
  staticRect.shapeColor = "green";
  staticRect.debug = true;


  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  miscRect.velocityY = +7;
}

function draw() {
  background(0,0,0);

  mouseRect.y = World.mouseY;
  mouseRect.x = World.mouseX;

  bounceOff(fixedRect,movingRect);
  bounceOff(movingRect,miscRect);
  bounceOff(fixedRect,miscRect);
  
  if(isTouching(mouseRect,staticRect)) 
  {
    mouseRect.shapeColor = "red";
    staticRect.shapeColor = "red";
  } else
  {
    mouseRect.shapeColor = "green";
    staticRect.shapeColor = "green";
  }

  drawSprites();
}