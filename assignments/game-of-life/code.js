const CELLSIZE = .1;
const rows = Math.floor(height / CELLSIZE)
const cols = Math.floor(width / CELLSIZE)

const cellArray =
  Array(rows).fill().map(() =>
    Array(cols).fill().map(() => (false)));


const originalCells = () => {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (Math.random() > (1 - .23)) {
        drawFilledRect(x * CELLSIZE, y * CELLSIZE, CELLSIZE, CELLSIZE, 'green');
        cellArray[y][x] = true
      }
    }
     drawFilledRect(0,0, 100, 50, 'lightBlue')
     drawText('+1 Generation', 0 ,30,'black', 15)
  }
};

const doTheyLive = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let up = cellArray[i-1][j]
      let upleft = cellArray[i-1][j-1]
      let upright = cellArray[i-1][j+1]
      let down = cellArray[i+1][j]
      let downleft = cellArray
      
      if (i === 0 || j === 0) {
      }else if (i === rows || j === cols) {
      }else if ((cellArray[i + 1][j].health === 'alive' &&
        cellArray[i - 1][j].health === 'alive' && cellArray[i - 1][j - 1])) {
        cellArray[i][j] = 'alive'
      }
    }
  }
}
originalCells()
//make a delay possibly


registerOnclick((x, y) => {
  if (x < 150 && y < 50) {
    animate(doTheyLive)
  } 
  
});