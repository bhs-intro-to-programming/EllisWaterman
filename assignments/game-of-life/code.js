

let cellsize = 30;
const cellArray = new Array(Math.floor(width/cellsize)).fill(0).map(() => new Array(Math.floor(height/cellsize)).fill(0));


const cells = () => {
  let xsize = width/cellsize
  let ysize = height/cellsize
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23))
      drawFilledRect(xposition * cellsize, yposition * cellsize, cellsize, cellsize, 'black')
      cellArray[xposition][yposition] = 1
      console.log(xposition,yposition)
    }
  }
}
//animate(cells)
cells()
//make a delay possibly
//find a way to cellArray[x of block][y of block]