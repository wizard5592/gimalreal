let system;

function setup() {
  createCanvas(600, 600);
  background(255);
  system = new ParticleSystem(createVector(random(0, width), random(0, height)));
}

function draw() {
  
  system.addParticle();
  system.run();
}