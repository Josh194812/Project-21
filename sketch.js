var bullet, wall, speed, weight, thickness
function setup() {
  createCanvas(1600,400);
  thickness=random(22,83)
  speed=random(223,321);
  weight=random(30,52);
  bullet=createSprite(50,200,100,50);

  wall=createSprite(1200,200,thickness,canvas.height/2);
  bullet.velocityX=speed;

}

function draw() {
  background(255,255,255);
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    bullet.x=wall.x-thickness/2-bullet.width/2;
    var damage= 0.5*speed*speed*weight/(thickness*thickness*thickness)
    if(damage>=10){
      bullet.shapeColor="red";
    }
    if(damage<10){
      bullet.shapeColor="green";
    }
  }
  drawSprites();
}
function hasCollided(Object1, Object2){
  if(Object1.x+Object1.width >= Object2.x-Object2.width){
    return true;
  } else{
    return false;
  }
}
