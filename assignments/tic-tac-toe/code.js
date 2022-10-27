// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
//drawLine(x1, y1, x2, y2, color, lineWidth)

//drawText('#', width/3, height, 'black', Math.min(width, height) * 1.5)
let clickCount = -1
let shape = 'O'
let colour = 'red'
let xs = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
  ]
registerOnclick((x, y) => {
  clickCount++
  if (clickCount % 2 === 0)
    shape = 'O'
  else
    shape = 'X'
  if (clickCount % 2 === 0)
    colour = 'blue'
  else
    colour = 'red'
  //top left
  if (y < height / 3 && x < width / 3) {
    drawText(shape, width * 1 / 6 - 50, height * 1 / 6 + 25, colour, Math.min(width, height) * 0.3);
    xs[0][0] = shape
  }
  //middle left

  else if (y < (height / 3) * 2 && x < width / 3) {
    drawText(shape, width * 1 / 6 - 50, height * 3 / 6 + 25, colour, Math.min(width, height) * 0.3);
    xs[1][0] = shape
  }
  //bottom left

  else if (y < height && x < width / 3) {
    drawText(shape, width * 1 / 6-50 , height - 10, colour, Math.min(width, height) * 0.3); 
    xs[2][0] = shape
  //top middle
  }
  else if (y < height / 3 && x < width / 3 * 2) {
    drawText(shape, width * 3 / 6 - 50, height * 1 / 6 + 25, colour, Math.min(width, height) * 0.3);
    xs[0][1] = shape
  }
  //middle middle
  else if (y < height / 3 * 2 && x < width / 3 * 2) {
    drawText(shape, width * 3 / 6 - 50, height * 3 / 6 + 25, colour, Math.min(width, height) * 0.3);
  xs[1][2] = shape
  }
//bottom middle
  else if (y < height && x < width / 3 * 2) {
    drawText(shape, width * 3 / 6 -50, height - 10, colour, Math.min(width, height) * 0.3);
    xs[2][1] = shape
  }
  //top right
  else if (y < height / 3 && x < width) {
    drawText(shape, width -150, height * 1 / 6 + 25, colour, Math.min(width, height) * 0.3);
    xs[2][0] = shape
  }
//middle right
  else if (y < height / 3 * 2 && x < width) {
    drawText(shape, width - 150, height * 3 / 6 + 25, colour, Math.min(width, height) * 0.3);
      xs[1][2] = shape
  }
//bottom right
  else if (y < height && x < width) {
    drawText(shape, width - 150, height - 10, colour, Math.min(width, height) * 0.3);
    xs[2][2] = shape
  }
  console.log(xs)
});


const drawFrame = () => {
  drawLine(width / 3, height, width / 3, 0, 'black', 10)
  drawLine(width / 3 * 2, height, width / 3 * 2, 0, 'black', 10)
  drawLine(width, height / 3, 0, height / 3, 'black', 10)
  drawLine(width, height / 3 * 2, 0, height / 3 * 2, 'black', 10)
}
drawFrame()




