let clickCount = -1
let shape = 'O'
let colour = 'red'
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
 
 
 if (y < height/3 && x < width/3)
 drawText(shape, width*1/6-50 , height*1/6+25, colour, Math.min(width, height) * 0.3);
 
  else
  if (y < height/3*2 && x < width/3)
 drawText(shape, width*1/6-50 , height*3/6+25 , 'red', Math.min(width, height) * 0.3);
 
    else
  if (y < height && x < width/3)
 drawText(shape, width*1/6-50 , height-10 , 'red', Math.min(width, height) * 0.3);
 
    else
  if (y < height/3 && x < width/3*2)
 drawText(shape, width*3/6-50 , height*1/6+25 , 'red', Math.min(width, height) * 0.3);
 
     else
  if (y < height/3 && x < width/3*2)
 drawText(shape, width*3/6-50 , height*3/6+25 , 'red', Math.min(width, height) * 0.3);
});
 
 
const drawFrame = () => {
drawLine(width/3, height, width/3, 0, 'black', 10)
drawLine(width/3*2, height, width/3*2, 0, 'black', 10)
drawLine(width, height/3, 0, height/3, 'black', 10)
drawLine(width, height/3*2, 0, height/3*2, 'black', 10)
}
drawFrame()
