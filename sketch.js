// namespacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld, object,ball;
function setup() {
  createCanvas(400,400);
  myEngine = Engine.create();
  myWorld = myEngine.world;
 
  // json format
  /*var options = { 
    isStatic : true 
  }*/
  object = Bodies.rectangle(200,380,400,20, {isStatic : true});
  World.add(myWorld , object);
  var myOptions = { restitution : 0.7}
  ball = Bodies.circle(200,100,20,myOptions);
  World.add(myWorld, ball);
}

function draw() {
  background(0); 
  
  Engine.update(myEngine);

  rectMode(CENTER);
  rect(object.position.x, object.position.y ,400,20)
  ellipseMode(RADIUS)
  fill("yellow")
  ellipse(ball.position.x,ball.position.y,20,20)
  drawSprites();
}