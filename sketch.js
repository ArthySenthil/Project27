
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;


var bob1,bob2,bob3,bob4,bob5;
var roof;
var rope1,rope2,rope3,rope4,rope5;
var bob1Diameter;

function setup() {
	createCanvas(1300, 700);

	engine = Engine.create();
	world = engine.world;
	
	roof = new Roof(600,80,800,20);
	bobDiameter = 30;
	bob1 = new Bob(680,600,bobDiameter);
	bob2 = new Bob(740,600,bobDiameter);
	bob3 = new Bob(800,600,bobDiameter);
	bob4 = new Bob(840,600,bobDiameter);
	bob5 = new Bob(880,600,bobDiameter);

	rope1 = new Rope(bob1.body,roof.body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof.body,-bobDiameter*1, 0);
	rope3 = new Rope(bob3.body,roof.body,0,0);
	rope4 = new Rope(bob4.body,roof.body,bobDiameter*1,0);
	rope5 = new Rope(bob5.body,roof.body,bobDiameter*2,0);

	Engine.run(engine);
  
}


function draw() {
  
  background("lightPink");
  rectMode(CENTER);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  roof.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});

	}
}

