/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */




//   for (let x = 0; x < height / 20; x++) {
//     for (let c = 0; c < x; c++) {
//       let colour = (x % 2 === 1 ? 'blue' : 'red')
//       drawCircle(width / 2, height / 2, x * 10, colour, c)
//     }
//   }
// }
const concentricCircle = () => {
  let x = 0
  let colour = 'red'
  while (x < height / 2) {
    drawFilledCircle(width / 2, height / 2, height / 2 - x, colour)
    colour = (colour == 'red' ? 'blue' : 'red')
    x = x + 15
  }
}

//concentricCircle();

const lineOfCircles = () => {
  let screenWidth = width
  let numberOfCircles = 6
  let radius = screenWidth / numberOfCircles / 2
  for (let idx = 0; idx < numberOfCircles; idx++)
    drawFilledCircle(idx * radius * 2 + radius, height / 2, radius, 'red')
}

lineOfCircles();


const lineOfCirclesAlternatingColors = () => {

  for (let x = 0; x < Math.floor(width); x++) {
    let colour = (x % 2 === 1) ? 'blue' : 'red';
    if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, colour)
  }
}


//lineOfCirclesAlternatingColors()

const fillWithCircles = () => {
  let radius = 25;
  let xsize = Math.floor(width / (radius * 2))
  let ysize = Math.floor(height / (radius * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}
//fillWithCircles();
const fillWithRandomlyFilledCircles = () => {
  let radius = 22;
  let xsize = Math.floor(width / (radius * 2))
  let ysize = Math.floor(height / (radius * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      if (Math.random() > (1 - .23))
        drawFilledCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
      else
        drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}



//fillWithRandomlyFilledCircles();
const myDrawCircle = (r, rows, cols) => {
  drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
}
const squareOfCircles = () => {
  let r = 20;
  let xsize = Math.floor(width / (r * 2))
  let ysize = Math.floor(height / (r * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      if (cols == ysize - 1)
        myDrawCircle(r, rows, cols)
      if (cols < 1)
        myDrawCircle(r, rows, cols)
      if (rows == xsize - 1)
        myDrawCircle(r, rows, cols)
      if (rows < 1)
        myDrawCircle(r, rows, cols)
    }
  }
}
//squareOfCircles();


const checkerboard = () => {
  let s = 25
  let colsize = Math.floor(width / s)
  let rowsize = Math.floor(height / s)
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize; cols++) {
      let color = (cols % 2 === 0) ? 'blue' : 'red';
      if (rows % 2 === 0)
        drawFilledRect(rows * s, cols * s, s, s, color)
      else
        drawFilledRect(rows * s, cols * s - s, s, s, color)
    }
  }
}

//checkerboard();

const notReallyCurved = () => {
  let a = 25
  let s = 20
  for (let y = 0; y < a; y++) {
    for (let x = 0; x < a; x++) {
      drawLine(0, y * s, y * s, height - 1, 'black', 1)
    }
  }
}
//notReallyCurved()
