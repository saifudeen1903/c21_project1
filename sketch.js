var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  
  speed=random(10,20)
  weight=random(30,52)
  thickness=random(22,83)
  
  bullet=createSprite(50, 200, 50, 50);
  bullet.velocityX= speed;
    bullet.shapeColor=color(80,200,213);  wall=createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color("brown")


}

function draw() {

 background(180) 
 if(hasCollided(bullet, wall)){

bullet.velocityX=0;
var damage=0.5 * weight * speed* speed/(thickness *thickness *thickness)
wall.shapeColor=color(80, 80, 80)

if(damage>10){

  wall.shapeColor=color(225,0,0);
}
if(damage<10){

  wall.shapeColor=color(0,255,0);
}

 } 

 drawSprites()
}
 
function hasCollided(lbullet, lwall)
{
	bulletRightEdge=lbullet.x +lbullet.width;
	wallLeftEdge=lwall.x;
	if (bulletRightEdge>=wallLeftEdge)
	{
		return true
	}
	return false;
}
