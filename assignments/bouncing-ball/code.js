// Change these to change the physics of our world.
let bounce = 0.7;
let gravity = 0.001;
let ballSize = 15;

// The framework will draw the background for us. It also provides three
// functions we can use:
//
// drawShadow(size, darkness) - draws an elliptical shadow on the ground below
// the ball at the given size and darkness.
//
// drawBall(height, size) - draws the ball at the given height and size.
//
// now() - returns the number of milliseconds since the program started.

// Implement this in terms of drawShadow(), drawBall() and the functions below.
// May also need to define a variable to keep track of when each bounce starts
// as the time value that is passed in is just the current time, i.e. the same
// thing we would get from calling now().
const drawFrame = (time) => {};

// Compute the height in pixels at time t after the ball hit the ground
const height = (t) => 0;

// Compute the shade of the shadow. 0 is black; 255 is white.
const shadowDarkness = (h) => 0;

// Compute the size of the shadow.
const shadowSize = (h) => 0;

// Call the animate function from the framework.
animate(drawFrame);
