
var bullet,wall,thickness,bulletRightEdge,wallLeftEdge;
var speed,weight;


function setup() {
  createCanvas(1600,400);
 bullet  =createSprite(50, 200, 15, 15);
 thickness =  random(22,83);
  wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(10);
  
 speed = random(221,322);
  weight= random(30,52);
  bullet.velocityX = speed;
  
}
function draw() {
  background(80,80,80);  
  
 
  
  drawSprites();

}
function hasCollided(lbullet,lwall)

{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall;
  if(bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;
  
}
if(hasCollided(bullet,wall))
  {
    if(wall.x-bullet.x<bullet.width+wall.width/2){
      bullet.velocityX = 0
     var  damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);
      if(damage>10)
      {
        wallLeftEdge.shapeColor = color(255,0,0);
      }
      
      if(damage<10)
      {
        wallLeftEdge.shapeColor = color(0,250,0);
      }
      
      }
    
    }

  





 






