var bullet, wall;
var speed, weight,deformation, damage,bullet_speed, bullet_weight;
var thickness;
function setup() {
  createCanvas(1600,400);
  thickness = random(22, 83);
  bullet_speed = random(223, 321);
  bullet_weight = random(30, 52);
  bullet= createSprite(50, 200, 50, 10);
  bullet.shapeColor=color(255, 255, 255);
  wall = createSprite(1200, 200, thickness, height/2);
  wall.shapeColor=color(80, 80, 80);  
}

function draw() {
  background(0,0,0);
  bullet.velocityX= bullet_speed;  
  if(wall.x-bullet.x < (bullet.width+wall.width)/2)
  {
    bullet.velocityX=0;    
    damage=(0.5*bullet_weight*bullet_speed*bullet_speed)/(thickness*thickness*thickness);
  
  if(damage>10){
    wall.shapeColor=color(255, 0, 0);
  }
  else
  {
    wall.shapeColor=color(0, 255, 0);
  }
    
}
  drawSprites();
}