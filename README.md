README

Race Game using machine learning
================================

This project is based off Jabril's YouTube series, where he trains a character to complete several racecourses using machine learning. His version is built in Unity, mine in JS.

OK, at the moment the game isn't really using machine learning as much as it could. It does ten runs, looks at the five best, saves those and then randomises the thought processes for another five, and goes again.

 See the previous versions at https://github.com/tedbennett?tab=repositories. The initial version used pygame and wasn't too pretty. The next version used p5 on JS with a python backend communicating with Flask. This version had actual learning of the weights. This version was rebuilt using tensorflow.js and is JS through and through, it's also my first play around with HTML and CSS.

##How to get it working

Just clone the repository and open index.html in your web browser.

##Description of how it works

The model will use reward based reinforcement learning to determine what action should be made. The reward is the sum of the distances from the character to the walls in 5 forwards directions. These data are passed through a neural network to give an action: right, left or forwards.

After a certain number of runs, the weights that gave the best results are kept, and the game runs again with the best results and with some random results. In the end, it should be pretty good.
