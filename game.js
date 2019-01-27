var player;
var model;
var scl = 10;
function setup() {
    createCanvas(600,400);
    pg = createGraphics(100, 100);
    player = new Player();
    model = new Model();
    model.defineModel()
}
function draw() {
    updateBackground()
    //get reward for current position
    rewards = getReward();
    for(let i = 0; i < 5; i++){
      player.rewards += rewards[i]
    }
    //set stroke colour
    stroke(0,0,0)
    //send state to python backend
    action = model.GetAction(rewards)
    checkCollision(rewards);
    checkLap();
    getAction(action);
    player.update();
}

function updateBackground(){
  background(51);
  frameRate(30)
  pg.background(254);
  borders();
  angleMode(DEGREES);
}

function borders() {
    fill(254);
    stroke(254);
    rect(150, 100, width/2, height/2);
    rect(-1, 0, 10, height);
    rect(0, 0, width, 10);
    rect(width-10, 0, 10, height);
    rect(0, height-10, width, 10);

}
