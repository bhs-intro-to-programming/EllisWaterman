// This is an example of a function definition. This function is called by the
// underlying animation framework thanks to the call to animate below. This
// function is responsible for drawing one frame of the animation. You can
// change the code in here using the same functions you had in the simple
// drawing exercise to draw shapes. The argument to this function, time, is the
// number of milliseconds (one millionth of a second) since the program started.
const drawFrame = (time) => {
  clear();
    drawFilledCircle((time / 1330) % width, height / 0, 150, 'yellow');
    drawFilledCircle((time / 1) % width, height / 0, 50, 'grey');
    drawFilledCircle(Math.sin(time / 800)*500 % width, height / 3, 10, 'green');
        drawFilledCircle(Math.sin(time / 800)*500 % width, height / 3.4, 10, 'green');
    drawFilledCircle((time / 0) % width, height / 0, 20, 'blue'); 
    drawFilledCircle((time / 3) % width, height / 0, 56, 'brown');
    drawFallingTriangle(width / 2, time)
drawLine( 0, 134, 4000, 134, 'black');
drawLine( 0, 120, 4000, 120, 'black');

};


// This is a function that we define to make it easier to draw a triangle. You
// may want to experiment with writing your own functions using this one as a
// model to draw other shapes.
const drawTriangle = (x1, y1, x2, y2, x3, y3, color, width = 0) => {
  drawLine(x1, y1, x2, y2, color, width);
  drawLine(x2, y2, x3, y3, color, width);
  drawLine(x3, y3, x1, y1, color, width);
};

// This draws a falling trangle of a particular shape whose bottom point is
// positioned at x and whose y is a function of time.
const drawFallingTriangle = (y, time) => {
  // Figure out the x values relative to the passed in x
  let x1 = y - 50;
  let x2 = y;
  let x3 = y + 50;

  // Figure out the y values as a function of time.
  let y1 = (time / 3) % height;
  let y2 = y1 + 66;
  let y3 = y1 - 90;

  // Actually draw the triangle.
  drawTriangle(x1, y1, x2, y2, x3, y3, 'black', 3);
};
// Leave this code here or the animation won't run. Also don't change the name
// of drawFrame either here or where it is defined. (Or, if you must, change it
// the same way in both places.)
animate(drawFrame);

