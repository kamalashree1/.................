
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var box1,box2,box3;
var ground;
var paper;


function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	 
	
	//Create the Bodies Here.
    box1 = new Box(650,680,150,20);
	box2 = new Box(730,650,20,100);
	box3 = new Box(570,650,20,100);

	ground = new Ground(400,700,800,30);
	
	paper = new Paper(200,675,20,20,PI/2);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display();
  box2.display();
  box3.display();
  ground.display();
  paper.display();
  
  
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85},PI/2);
	   
	 }
   }
   

