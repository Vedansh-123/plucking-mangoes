
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
tree= new Tree(600,500,400,400)
boy= new Boy(100,650,200,200)
ground= new Ground(400,700,1200,20)
mango= new Mango(620,500,40,40)
mango1= new Mango(700,400,40,40)
mango2= new Mango(520,420,40,40)
stone = new Stone(50,650,40,40)
sling = new Launcher(stone.body,{x:40,y:600})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightBlue");
  tree.display()
  stone.display()
  boy.display()
  ground.display()
  mango.display()
  mango1.display()
  mango2.display()
  sling.display()
  drawSprites();
 
}

function mouseDragged(){
  
      Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
  
}


function mouseReleased(){
  sling.fly();
  
}


