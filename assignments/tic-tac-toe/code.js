// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
//drawLine(x1, y1, x2, y2, color, lineWidth)

//drawText('#', width/3, height, 'black', Math.min(width, height) * 1.5)
let clickCount = -1
registerOnclick((x, y) => {
  clickCount++
   if (clickCount % 2 === 0)
  drawText('X', x-25, y+25, 'red', Math.min(width, height) * 0.3);
  else
  drawText('O', x-25, y+25, 'black', Math.min(width, height) * 0.3);
});
const drawFrame = () => {
drawLine(width/3, height, width/3, 0, 'black', 10)
drawLine(width/3*2, height, width/3*2, 0, 'black', 10)
drawLine(width, height/3, 0, height/3, 'black', 10)
drawLine(width, height/3*2, 0, height/3*2, 'black', 10)
}
drawFrame()
let quad1 = drawFilledRect(0, 0, width/3, width/9, 'black')
let quad2 = drawFilledRect(height/3*2, 0, width/9, 'black')
let quad3
let quad4
let quad5
let quad6
let quad7
let quad8
let quad9




