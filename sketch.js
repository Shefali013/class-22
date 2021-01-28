const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var object;
var engine, world;
var ground;
function setup() {
 var canvas = createCanvas(400,400);
 engine = Engine.create();
 world = engine.world;
 var object_opt = { 
     "restitution":1.0
     };
 object = Bodies.circle(200, 100,20, object_opt);
 World.add(world,object);
 var ground_opt = {
   "isStatic": true
 };
 ground = Bodies.rectangle(200, 390, 400, 20,ground_opt);
 World.add(world,ground);
 console.log(object);
}

function draw() {
  background(100);  
  Engine.update(engine);
  ellipseMode(RADIUS);
 ellipse(object.position.x,object.position.y,20,20);
 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,20);
}