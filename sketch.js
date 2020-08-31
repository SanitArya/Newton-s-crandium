
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var p1,p2,p3,p4,p5;

var diameter;

function setup() {
	createCanvas(1360, 600);

	engine = Engine.create();
	world = engine.world;

  diameter = 50;

	p1 = new Pendulam(580,450,false);
	p2 = new Pendulam(630,450,false);
	p3 = new Pendulam(680,450,false);
	p4 = new Pendulam(730,450,false);
	p5 = new Pendulam(780,450,false);

    roof = new Roof(680,100,300,20);

    Rope1 = new Rope(p1.body,roof.body,-diameter*2,0);
    Rope2 = new Rope(p2.body,roof.body,-diameter,0);
    Rope3 = new Rope(p3.body,roof.body,0,0);
    Rope4 = new Rope(p4.body,roof.body,diameter,0);
    Rope5 = new Rope(p5.body,roof.body,diameter*2,0);

    Matter.Body.translate(p1.body,{x:-180,y:-85});

	Engine.run(engine);
}

function draw() {

  background("white");
  
  p1.display();
  p2.display();
  p3.display();
  p4.display();
  p5.display();

  roof.display();

  Rope1.display();
  Rope2.display();
  Rope3.display();
  Rope4.display();
  Rope5.display();


  drawSprites();
 
}

function keyPressed(){
  if(keyCode==UP_ARROW){
    Matter.Body.applyForce(p1.body,p1.body.position,{x:-85,y:-85});
  }
  
  }



