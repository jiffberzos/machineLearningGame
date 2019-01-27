// JavaScript:
//import * as tf from '@tensorlowjs/tfjs';

function Model(){
// Build and compile model.
  this.weightslist = []
  this.rewardslist = [0]
  this.run = 1
  this.tensor = []
  this.defineModel = function(){
    this.model = tf.sequential();
    this.model.add(tf.layers.dense({units: 3, inputShape: [5]}));
    this.model.add(tf.layers.dense({units: 3, inputShape: [3]}));
    this.model.compile({optimizer: 'sgd', loss: 'meanSquaredError'});

  }

  this.GetAction  = function(rewards){
    this.tensor = tf.tensor2d(rewards, [1,5]);
    prediction = this.model.predict(this.tensor);
    values = prediction.dataSync();
    arr = Array.from(values);
    action = [0,0,0];
    action[arr.indexOf(Math.max(...arr))] = 1
    return(action)
  }
  this.saveWeights = function(){
    weights = this.model.getWeights()
    if(rewards > this.rewardslist[0]){
      this.rewardslist.unshift(rewards)
      this.weightslist.unshift(weights)
    }
    else{
      this.rewardslist.push(rewards)
      this.weightslist.push(weights)
    }
  }
  this.SetWeights = function(i){
    this.model.setWeights(this.weightslist[i])
  }
  this.GenerateRandomWeights = function(){
    for(let i = 0; i < 5; i++){
      this.weightslist.pop()
    }
    for(let i = 0; i < 5; i++){
      model.defineModel()
      weights = this.model.getWeights()
      this.weightslist.push(weights)
    }
  }
  this.reset = function(){
    if(model.run < 11){
      model.saveWeights()
      model.defineModel()
    }
    if(model.run == 10){
      model.GenerateRandomWeights()
      model.SetWeights(0)
    }
    if(model.run > 10){
      model.setWeights(model.run - 10)
    }
    console.log(model.weightslist)
  }
}
