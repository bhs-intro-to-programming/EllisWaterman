

const CELLSIZE = 13;
const cellArray =
  Array(Math.floor(height / CELLSIZE)).fill().map(() =>
    Array(Math.floor(width / CELLSIZE)).fill().map(() => ({ health: 'dead' })));


const originalCells = () => {
  let xsize = width / CELLSIZE
  let ysize = height / CELLSIZE
  for (let y = 0; y < ysize; y++) {
    for (let x = 0; x < xsize; x++) {
      if (Math.random() > (1 - .23)) {
        drawFilledRect(x * CELLSIZE, y * CELLSIZE, CELLSIZE, CELLSIZE, 'green');
        cellArray[y][x] = { health: 'alive' };
      }
    }
  }
};

const doTheyLive = () => {
  for (let i = 0; i < cellArray.length; i++) {
    for(let j = 0; j < 10; j++) {

    }
    if (cellArray[i][0]) {}
  }
}
//animate(cells)
originalCells()
//make a delay possibly


registerOnclick((x, y) => {
  if (x < 150 && y < 50) {
    animate(doTheyLive)
  } else {
    //drawFilledRect(Math.floor(x), Math.floor(y), CELLSIZE, CELLSIZE, 'black');
    //cellArray[Math.floor(y / CELLSIZE)][Math.floor(x / CELLSIZE)] = { health: 'alive' }
  }
});