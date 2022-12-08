

const CELLSIZE = 13;
const cellArray = 
Array(Math.floor(height / CELLSIZE)).fill().map(() =>
  Array(Math.floor(width / CELLSIZE)).fill().map(() => ({health: 'dead' })));


const originalCells = () => {
  let xsize = width / CELLSIZE
  let ysize = height / CELLSIZE
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23)) {
        drawFilledRect(xposition * CELLSIZE, yposition * CELLSIZE, CELLSIZE, CELLSIZE, 'black')
        cellArray[yposition][xposition].health = 'alive';
      }
    }
  }
};

const doTheyLive = () => {

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