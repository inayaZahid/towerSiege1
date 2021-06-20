const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
 
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  ground = new Ground (500,200,200,10);
block1 = new Box1(500,190,30,30);
block2 = new Box1(470,190,30,30)
block3 = new Box1(440,190,30,30);
block4 = new Box1(410,190,30,30);
block5 = new Box1(530,190,30,30);
block6 = new Box1(560,190,30,30);
block7 = new Box1(590,190,30,30);
block8 = new Box2(440,150,30,30);
block9 = new Box2(470,150,30,30);
block10 = new Box2(500,150,30,30);
block11 = new Box2(530,150,30,30);
block12 = new Box2(560,150,30,30);
block13 = new Box3(470,100,30,30);
block14 = new Box3(500,100,30,30);
block15 =new Box3(530,100,30,30);
block16 = new Box4(500,50,30,30);
ball = new Ball(100,200,20);
slingShot= new SlingShot(ball.body,{x:100,y:200});
}

function draw() {
  rectMode(CENTER)
  Engine.update(engine);
  background("white")
  ground.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
ball.display();
slingShot.display();
}
function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX,y:mouseY})
}
function mouseReleased(){
  slingShot.fly();
}