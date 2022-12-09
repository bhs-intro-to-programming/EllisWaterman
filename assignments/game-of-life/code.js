const CELLSIZE = 13;
const rows = Math.floor(height / CELLSIZE)
const cols = Math.floor(width / CELLSIZE)

const cellArray =
  Array(rows).fill().map(() =>
    Array(cols).fill().map(() => ({ health: 'dead' })));


const originalCells = () => {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (Math.random() > (1 - .23)) {
        drawFilledRect(x * CELLSIZE, y * CELLSIZE, CELLSIZE, CELLSIZE, 'green');
        cellArray[y][x].health = 'alive'
        drawText('START', 0 ,0,'black', 20) + drawFilledRect(0,0, 100, 50, 'blue')
      }
    }
  }
};

const doTheyLive = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (i === 0 || j === 0) {
        return
      } else if ((cellArray[i + 1][j].health === 'alive' &&
        cellArray[i - 1][j].health === 'alive' && cellArray[i - 1][j - 1])) {
        cellArray[i][j] = 'alive'
      }
    }
  }
}
//animate(cells)
originalCells()
//make a delay possibly


registerOnclick((x, y) => {
  if (x < 150 && y < 50) {
    animate(doTheyLive)
  } 
  
});