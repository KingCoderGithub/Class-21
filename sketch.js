const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

var ground, left, right, topwall;
var ball; 


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  
  world = engine.world;

btn1 = createImg("right.png");
btn1.position(220, 30);
btn1.size(50, 50);
btn1.mouseClicked(hforce);

btn2 = createImg("up.png");
btn2.position(20, 30);
btn2.size(50, 50);
btn2.mouseClicked(vforce);
 
ground = new Ground(200, 390, 400, 20);
left = new Ground(10, 200, 20, 400);
right = new Ground(390, 200, 20, 400);
topwall = new Ground(200, 10, 400, 20);

var ballOpstions = {
  restitution:0.95
}

ball = Bodies.circle(200, 100, 20, ballOpstions);
World.add(world, ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
  
}

function draw() 
{
  background(51);

  ground.show();
  left.show();
  right.show();
  topwall.show();

  ellipse(ball.position.x, ball.position.y, 20);


  Engine.update(engine);
}

function hforce(){

Matter.Body.applyForce(ball, {x:0, y:0}, {x:0.05, y:0} );

}

function vforce(){

  Matter.Body.applyForce(ball, {x:0, y:0}, {x:0, y:-0.05} );
  
  }