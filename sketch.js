
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball

function preload()
{
}

function setup() {
	createCanvas(1200,500);
	engine = Engine.create();
	world = engine.world;

ground1 = new Wall(100,490,3000,30);
leftWall = new Wall(800,440,15,80)
rightWall = new Wall(900,440,15,80)

var balloptions = {
	restitution:0.8,
	density:1.2,
	friction:0 

}


	//Create the Bodies Here.


	


	ball = Bodies.circle(100,100,20,20);
World.add(world,ball);

Engine.run(engine);

	


	


	rectMode(CENTER);
	ellipseMode(RADIUS)
}


function draw() {
	background(30);


ground1.display()
leftWall.display()  
rightWall.display()
  ellipse(ball.position.x,ball.position.y,20,20)




  drawSprites();
}

function keyPressed(){
if (keyCode===UP_ARROW){
Matter.Body.applyForce(ball,{x:0,y:0},{x:0.05,y:-0.079})



}


}

