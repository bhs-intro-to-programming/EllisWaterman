

const CELLSIZE = 13;
const cellArray = new Array(Math.floor(width / CELLSIZE)).fill().map(() =>
  new Array(Math.floor(height / CELLSIZE)).fill({ health: 'dead' }));


const cells = () => {
  let xsize = width / CELLSIZE
  let ysize = height / CELLSIZE
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23)) {
      drawFilledRect(xposition * CELLSIZE, yposition * CELLSIZE, CELLSIZE, CELLSIZE, 'black')
     
      }
    }
  }
}
//animate(cells)
cells()
//make a delay possibly


//drawText('START', 0 ,0,'black', 20)
registerOnclick((x, y) => {
let col = Math.floor(x)
let row = Math.floor(y)
drawFilledRect(row, col, CELLSIZE, CELLSIZE, 'black');
 cellArray[col][row] = {health : 'alive'}
});