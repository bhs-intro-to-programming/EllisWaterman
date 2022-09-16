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



const concentricCircle = (x) => {
  for (let x = 0; x < 45; x++)
    if (x * 5.5 % 2 == 0) {
      drawCircle(width / 2, height / 2, x * 5.5, 'red', 15)
    }
    else {
      drawCircle(width / 2, height / 2, x * 5.5, 'blue', 6)
    }
  if (width > x * 10) {
    drawCircle(width / 2, height / 2, x * 5.5, 'red', 6)
  }
}

//concentricCircle();

const lineOfCircles = () => {

  for (let x = 0; x < 49.5; x++)
    if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, 'red')
}

//lineOfCircles();


const lineOfCirclesAlternatingColors = (x) => {

  for (let x = 0; x < 49.5; x++)
    if (x += 1) {
      if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, 'blue')
    }
    else {
      if (x > length)
      drawFilledCircle(x * 10, height / 2, 5, 'red')
    }
  
}

lineOfCirclesAlternatingColors()