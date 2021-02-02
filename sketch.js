const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
  var particles = []
  var plinkos = []
  var divisions = []
    var divisionHeight=300

function setup() {
  engine = Engine.create(); 
  world = engine.world; 
  createCanvas(480,800);

  ground = new Ground(200, 795, 800, 10)

  d1 = new Ground(160, 795, 10, 1000) 
  d2 = new Ground(210, 795, 10, 1000)
  d3 = new Ground(260, 795, 10, 1000)
  d4 = new Ground(210, 795, 10, 1000)
  d5 = new Ground(360, 795, 10, 1000)
  d6 = new Ground(310, 795, 10, 1000)
  d7 = new Ground(460, 795, 10, 1000)
  d8 = new Ground(410, 795, 10, 1000)
  d11 = new Ground(110, 795, 10, 1000)
  d9 = new Ground(10, 795, 10, 1000)
  d10 = new Ground(60, 795, 10, 1000)
}

function draw() {
  background(249, 209, 209);
    ground.display();
      d1.display();
      d2.display();
      d3.display();
      d4.display();
      d5.display();
      d6.display();
      d7.display();
      d8.display();
      d9.display();
      d10.display();
      d11.display();

  for (var j = 40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75, 10))
  }

  for (var j1 = 15; j1 <= width-10; j=j+50){
    plinkos.push(new Plinko(j1, 175, 10))
  }

  if(frameCount%60===0){
    for(var j2 = 0; j2 < particles.length; j++){
      particles[j2].display()
    }
  }
}