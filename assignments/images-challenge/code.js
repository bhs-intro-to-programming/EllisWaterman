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
  let xcount = 50
  let ycount = 40 
  let xsize = width/xcount
  let ysize = height/ycount
 
  let xoffset = 10;
  let spacing = 10;
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 1; cols < ysize; cols++) {
      drawCircle((rows * spacing) + xoffset, cols * spacing, 5, 'blue', 1)
    }
  }
}
fillWithCircles();


const fillWithRandomFilledCircles = () => {

  for (let x = 0; x < 50; x++) {
    for (let p = 1; p < 50; p++) {
      if (p < Math.random()*100) {
        if (x > length)
          drawFilledCircle(x * 10, height - p * 12, 5, 'blue')
        else
          for (let x = 0; x < 50; x++) {
            for (let p = 1; p < 50; p++) {
              if (x > length)
                drawCircle(x * 10, height - p * 12, 5, 'blue', 1)
            }
          }
      }
    }
  }
}
//fillWithRandomFilledCircles();

