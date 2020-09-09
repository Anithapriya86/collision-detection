var mr,fr;
function setup() {
  createCanvas(1200,800);
   mr=createSprite(200, 200, 50, 80);
  mr.shapeColor="green";
  mr.debug=true;
    fr=createSprite(400, 200, 80, 30);
  fr.shapeColor="green";
  fr.debug=true;

}

function draw() {
  background(0,0,0);  
  mr.x=World.mouseX;
  mr.y=World.mouseY;

  
  if(isTouching())
  {
    mr.shapeColor ="red";
    fr.shapeColor = "red";
  }
  else
  {
    mr.shapeColor ="green";
    fr.shapeColor = "green";
  }

  drawSprites();
}

function isTouching()
{
  if(mr.x-fr.x<mr.width/2+fr.width/2 &&
    fr.x-mr.x<mr.width/2+fr.width/2 &&
     fr.y-mr.y<mr.width/2+fr.width/2 &&
      mr.y-fr.y<mr.width/2+fr.width/2 )
 {
   return true;//boolean variable
 }
 else{
   return false;
 }
}