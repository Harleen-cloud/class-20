var far,mar;
function setup() {
  createCanvas(800,400);
 far=createSprite(400,46,60,30)
 far.shapeColor="pink"
 mar=createSprite(700,46,60,30)
 mar.shapeColor="pink"
}
function draw() {
  background(0);  
  if((mar.x-far.x<=mar.width/2+far.width/2)&&(far.x-mar.x<=far.width/2+mar.width/2)&&
  ((mar.y-far.y<=mar.height/2+far.height/2)&&(far.y-mar.y<=far.height/2+mar.height/2))
  ){
    far.shapeColor="orange"
    mar.shapeColor="orange"
  }
  else{
    far.shapeColor="pink"
    mar.shapeColor="pink"
  }
  mar.x=mouseX;
  mar.y=mouseY;
  drawSprites();
}