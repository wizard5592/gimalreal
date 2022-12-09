class Particle {
  constructor(position){
    this.acceleration = createVector(random(-5,5), random(-5,5));
    this.velocity = createVector(random(-1, 1), random(-1, 0));
    this.position = position.copy();
    this.lifespan = 255;
  }
  
  run(){
    this.update();
    this.display();
  }
  
  update(){
    this.edge();
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.lifespan -= 1;
  }
  
  display(){
    stroke(255);
    strokeWeight(1);
    fill(255);
    ellipse(this.position.x, this.position.y, 10, 10);
  }
  
  edge(){
    if(this.position.y > height){
      this.velocity.y = this.velocity.y *-0.8; 
    }
    if(this.position.y <0){
      this.velocity.y = this.velocity.y * -0.8;  
    } 
    if(this.position.x > width){
      this.velocity.x = this.velocity.x *-0.8; 
    }
    if(this.position.x < 0 ){
      this.velocity.x = this.velocity.x * -0.8;  
    }
  }
  
  isDead(){
    return this.lifespan < 0;
  }
}