
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 200);


	engine = Engine.create();
	world = engine.world;

  ground = new Ground(400,170,800,20);

  paper = new Paper(100,168,40);

  dbase = new Dustbin(600,151,200,20);
	dright = new Dustbin(700,110,20,90);
  dleft = new Dustbin(500,110,20,90);
  
  Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);
    ground.display();
    dbase.display();
    dright.display();
    dleft.display();
    paper.display();
 
}
function keyPressed(){
  if(keyCode=== UP_ARROW){
    Matter.Body.applyForce(paper,paper.body.position,{x:85,y:-85});
  }
}



