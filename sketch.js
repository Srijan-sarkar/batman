var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var maxDrops = 100;
  var drops = [];

function preload(){
    
}

function setup(){
  createCanvas(300,600);
  engine = Engine.create();
  world = engine.world;
  umbrella = new Umbrella(150,550);
  for (var i = 0;i<maxDrops;i++){
    drops.push(new Drop(random(1,300),random(1,400)));
  } 
}

function draw(){
  background("black")
  Engine.update(engine);
  for (var i = 0;i<maxDrops;i++){
    drops[i].display();
  }
  for (var i = 0;i<maxDrops;i++){
    drops[i].update();
  }
}   

