var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var log1Sprite,log2Sprite,log3Sprite
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 800);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-125, width,10);
	groundSprite.shapeColor(255,0,0);

	log1=createSprite(200,125,200,20);
	log1Sprite.shapeColor(255,0,0) ;
	
	log2Sprite.createSprite(100,125,200,20);
	log2Sprite.shapeColor(255,0,0);
    
	log3Sprite.createSprite(300,125,200,20);
	log3Sprite.shapeColor(255,0,0);
		
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.rectangle(width/2 , 200 , 5 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  fill ("white")
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
  if (keyCode == DOWN_ARROW) {
    Matter.Body.setStatic(packageBody,false);
    
  }
}



