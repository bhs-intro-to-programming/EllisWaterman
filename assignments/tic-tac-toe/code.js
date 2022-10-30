// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
//drawLine(x1, y1, x2, y2, color, lineWidth)

//drawText('#', width/3, height, 'black', Math.min(width, height) * 1.5)
let clickCount = 0;
let shape;
let colour;
let size = Math.min(width, height) * 0.3;
let xoffset = width / 3 / 2 - (size / 2);
let yoffset = (height / 3 - 50) / 2;
let xs = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]
const horizontalWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (xs[i][0] != null) {
      if (xs[i][0] == xs[i][1] && xs[i][0] == xs[i][2])
        return xs[i][0];
    }
  }
}
const verticalWinner = () => {
  for (let i = 0; i < 3; i++) {
    if (xs[0][i] != null) {
      if (xs[0][i] == xs[1][i] && xs[0][i] == xs[2][i])
        return xs[0][i];
    }
  }
}
const diagonalWinner = () => {
  console.log(xs);
  if (xs[0][0] == xs[1][1] && xs[0][0] == xs[2][2])
    return xs[0][0];
  if (xs[0][2] == xs[1][1] && xs[0][2] == xs[2][0])
    return xs[0][2]
}


const winner = () => {
  let winnersSymbol;
  if ((winnersSymbol = horizontalWinner()) || (winnersSymbol = verticalWinner()) || (winnersSymbol = diagonalWinner()))
    return winnersSymbol;
}
registerOnclick((x, y) => {
  let col = Math.floor(x / width * 3);
  let row = Math.floor(y / height * 3);
  if (xs[row][col] != null)
    return;
  clickCount++;

  if (clickCount % 2 === 0) {
    shape = 'O'
    colour = 'blue'
  } else {
    shape = 'X'
    colour = 'red'
  }
  drawText(shape,
    col * (width / 3) + xoffset,
    (row + 1) * (height / 3) - yoffset,
    colour,
    size);
  xs[row][col] = shape;
  if (winner() != null)
    drawText(shape + ' WINS', width / 4, height / 2, colour, size);
  if (clickCount == 9) 
    drawText('DRAW', width / 4, height / 2, colour, size);
});


const drawFrame = () => {
  drawLine(width / 3, height, width / 3, 0, 'black', 10)
  drawLine(width / 3 * 2, height, width / 3 * 2, 0, 'black', 10)
  drawLine(width, height / 3, 0, height / 3, 'black', 10)
  drawLine(width, height / 3 * 2, 0, height / 3 * 2, 'black', 10)
}
drawFrame();

