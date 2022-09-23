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



const concentricCircle = () => {
  for (let x = 0; x < 45; x++) {
    let colour = (x % 2 === 1) ? 'blue' : 'red';
    drawCircle(width / 2, height / 2, x * 5.5, colour, 1)
    if (x > length)
      drawCircle(width / 2, height / 2, x * 5.5, colour, 6)
  }


}

//concentricCircle();

const lineOfCircles = () => {

  for (let x = 0; x < 49.5; x++)
    if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, 'red')
}
//lineOfCircles();



const lineOfCirclesAlternatingColors = () => {

  for (let x = 0; x < 49.5; x++) {
    let colour = (x % 2 === 1) ? 'blue' : 'red';
    if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, colour)
  }
}


//lineOfCirclesAlternatingColors()

const fillWithCircles = () => {
  let radius = 25;
  let xsize = width / (radius * 2)
  let ysize = height / (radius * 2)
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}
//fillWithCircles();
const fillWithRandomlyFilledCircles = () => {
  let radius = 25;
  let xsize = width / (radius * 2)
  let ysize = height / (radius * 2)
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      if (Math.random() > (1 - 0.23))
        drawFilledCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
      else
        drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}



//fillWithRandomlyFilledCircles();

const squareOfCircles = () => {
  let r = 25;
  let xsize = width / (r * 2)
  let ysize = height / (r * 2)
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      if (cols - 1 > 9)
        drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
      if (cols < 1)
        drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
      if (rows - 1 > 7)
        drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
      if (rows < 1)
        drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
    }
  }
}
//squareOfCircles();


const checkerboard = () => {
  let s = 25
    for (let rows = 0; rows < s; rows++) {
      for (let cols = 0; cols <  100; cols++) {
        let color = (cols % 2 === 1) ? 'blue' : 'red';
        drawFilledRect(rows*s, cols*s, s, s, color)
      }
    }
  }

checkerboard();