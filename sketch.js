const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var polygonImg,polygon,Slingshot

function preload(){
  polygonImg=loadImage("polygon.png");
}


function setup() {
  createCanvas(800,400);
  
  engine= Engine.create()
  world=engine.world
  ground = new Ground(width/2,height,800,20);
  stand=new Ground(490,300,180,10)
  block1=new Box(420,270,30,50)
  block2=new Box(455,270,30,50)
  block3=new Box(490,270,30,50)
  block4=new Box(525,270,30,50)
  block5=new Box(560,270,30,50)
  block6=new Box(438,220,30,50)
  block7=new Box(473,220,30,50)
  block8=new Box(508,220,30,50)
  block9=new Box(543,220,30,50)
  block10=new Box(458,170,30,50)
  block11=new Box(493,170,30,50)
  block12=new Box(527,170,30,50)
  block13=new Box(475,120,30,50)
  block14=new Box(510,120,30,50)
  block15=new Box(493,70,30,50)
  polygon=Bodies.circle(50,200,20)
  World.add(world,polygon);
  Slingshot = new SlingShot(this.polygon,{x:100,y:200});
}

function draw() {
  background("green");  
  ground.display()
  stand.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()
  block10.display()
  block11.display()
  block12.display()
  block13.display()
  block14.display()
  block15.display()
  Slingshot.display()
  imageMode(CENTER)
  image(polygonImg ,polygon.position.x,polygon.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  Slingshot.fly();
}