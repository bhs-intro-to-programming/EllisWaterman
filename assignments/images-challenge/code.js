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

/*drawFilledCircle(250,300, 250, 'red')
drawFilledCircle(250,300, 230, 'blue')
drawFilledCircle(250,300, 210, 'red')
drawFilledCircle(250,300, 190, 'blue')
drawFilledCircle(250,300, 170, 'red')
drawFilledCircle(250,300, 150, 'blue')
drawFilledCircle(250,300, 130, 'red')
drawFilledCircle(250,300, 110, 'blue')
drawFilledCircle(250,300, 90, 'red')
drawFilledCircle(250,300, 70, 'blue')
drawFilledCircle(250,300, 50, 'red')
drawFilledCircle(250,300, 30, 'blue')
*/


const concentricCircle = () => {
  for (let x = 0; x < 100; x++)
   drawCircle(x+250, x+300, x, 'red', 1)
}

concentricCircle();


