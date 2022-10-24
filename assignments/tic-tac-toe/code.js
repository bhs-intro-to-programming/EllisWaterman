// This is a bit of a new thing. registerOnclick is a function provided by the
// framework. But the argument we're passing to it is *another* function. Notice
// how the argument here looks like what we normally put on the righthand side
// of the equals sign in our normal `const foo = ...` function definition. This
// is called an anonymous function. We'll discuss this in more detail in a few
// weeks but for now you can just adapt this code.
//drawLine(x1, y1, x2, y2, color, lineWidth)

//drawText('#', width/3, height, 'black', Math.min(width, height) * 1.5)
let clickCount = -1
drawLine(width, 0, width/2, height/2, 'black', 5)
registerOnclick((x, y) => {
  clickCount++
   if (clickCount % 2 === 0)
  drawText('X', x, y, 'black', Math.min(width, height) * 0.3);
  else
  drawText('O', x, y, 'black', Math.min(width, height) * 0.3);
});



