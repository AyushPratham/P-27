const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

var roof

function setup() {
  createCanvas(800, 700);
  
	engine = Engine.create();
	world = engine.world;

	ball1 = new ball(100,100,40)
	ball2 = new ball(180,100,40)
	ball3 = new ball(260,100,40)
	ball4 = new ball(340,100,40)
	ball5 = new ball(420,100,40)

	chain1 = new Sling(ball1.body, {x:100,y:50});
	chain2 = new Sling(ball2.body, {x:180,y:50});
	chain3 = new Sling(ball3.body, {x:260,y:50});
	chain4 = new Sling(ball4.body, {x:340,y:50});
	chain5 = new Sling(ball5.body, {x:420,y:50});
 
  var options = {
    isStatic : true
  }

  
  roof = Matter.Bodies.rectangle(260,30,500,40,options)
  World.add(world, roof)

	Engine.run(engine);
  
}


function draw() {

  rectMode(CENTER);
  background(255);
  
  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  rectMode(CENTER)
  rect(260,30,500,40)

  drawSprites();
 
}
function mouseDragged(){
    Matter.Body.setPosition(ball5.body,{x: mouseX, y: mouseY})
}

function keyPressed(){
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(ball5.body, ball5.body.position,{x: -50, y: -45})
}
}