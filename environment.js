function checkCollision(rewards){
  for(i in rewards){
    if(rewards[i] <10 || player.lap > 2){
      player.position = createVector(50,50);
      player.angle = 0;
      player.speed = 0;
      player.lap = 1
      player.halfway = 0
      player.rewards = 0
      model.run += 1;
      model.reset();
    }
  }
}
function getSpeed(){
  if (keyIsDown(40)) {
      if(player.speed > 0){
          player.speed = -1;
      }
  } else if (keyIsDown(38)) {
      if(player.speed < 1){
          player.speed =1;
      }
  }else {
      player.speed = 0;
  }

}
function getRotation() {
  if (keyIsDown(37)) {
      player.angle -= 1;
  } else if (keyIsDown(39)) {
      player.angle += 1;
  }
}


function getVectors(){
  var left = createVector(cos(player.angle-90), sin(player.angle-90))
  var for_left = createVector(cos(player.angle-45), sin(player.angle-45))
  var forwards = createVector(cos(player.angle), sin(player.angle))
  var for_right = createVector(cos(player.angle+45), sin(player.angle+45))
  var right = createVector(cos(player.angle+90), sin(player.angle+90))
  stroke(255,0,0,255)

  return {left:left,
      for_left:for_left,
      forwards:forwards,
      for_right:for_right,
      right:right};
}


function getProjectionToEdge(direction){
  var xDistance =0; var yDistance = 0;
  for(i=0; i<3200; i+=5){
      xDistance = floor(player.position.x + i*direction.x);
      yDistance = floor(player.position.y + i*direction.y);
      pixelColor = get(xDistance,yDistance)
      if(pixelColor[0]===254 && pixelColor[1]===254){
        //xDistance = floor(i*direction.x);
        //yDistance = floor(i*direction.y);
        break}

  }

  return [xDistance,yDistance];
}

function getDist(direction){
  return dist(player.position.x, player.position.y, direction[0], direction[1])
}

function getReward(){
  var forwards = createVector(cos(player.angle), -sin(player.angle))
  vectors = getVectors()
  leftD = getProjectionToEdge(vectors.left);
  leftforD = getProjectionToEdge(vectors.for_left);
  forwardD = getProjectionToEdge(vectors.forwards);
  rightforD = getProjectionToEdge(vectors.for_right);
  rightD = getProjectionToEdge(vectors.right);
  vectors.left.x
  stroke(255,0,0)
  line(player.position.x, player.position.y, leftD[0], leftD[1])
  line(player.position.x, player.position.y, leftforD[0], leftforD[1])
  line(player.position.x, player.position.y, forwardD[0], forwardD[1])
  line(player.position.x, player.position.y, rightforD[0], rightforD[1])
  line(player.position.x, player.position.y, rightD[0], rightD[1])

  return[getDist(leftD)*player.lap,
          getDist(leftforD)*player.lap,
          getDist(forwardD)*player.lap,
          getDist(rightforD)*player.lap,
          getDist(rightD)*player.lap]
}

function getAction(action){
  if (action[0] ===1){
    player.speed = 1;
  }else if (action[1] ===1){
    player.speed = 1;
    player.angle -= 1;
  }else if (action[2] ===1){
    player.speed = 1;
    player.angle += 1;
  }
}

function checkLap(){
  if(player.position.x < 150 && player.position.y < 100 && player.halfway == 1){
    player.lap += 1
    player.halfway = 0
  }
  if(player.position.x > 450 && player.position.y > 300 && player.halfway == 0){
    player.halfway = 1
  }
}
