
function Player(){
  this.position = createVector(50,50);
  this.speed = 0;
  this.velocity = createVector(0,0);
  this.angle = 0;
  this.action = [];
  this.reset = 5;
  this.lap = 1
  this.halfway = 0
  this.rewards = 0

  this.update = function(){
      player.getVelocity()
      this.position.add(this.velocity);
      player.show()

  }
  this.getVelocity = function(){
    this.velocity.set(2*this.speed*cos(this.angle), 2*this.speed*sin(this.angle));
  }
  this.show = function() {
      push();
      rectMode(CENTER);
      fill(220);
      translate(this.position)
      rotate(this.angle, this.position);
      triangle(0,-5,0,5,10,0)
      pop();

  }
  this.dir = function(x,y) {
      this.xspeed = x*3;
      this.yspeed = y*3;
  }
}
