const cellArray = new Array(width).fill(0).map(() => new Array(height).fill(0));

const cells = () => {
  let cellsize = 1;
  let xsize = width
  let ysize = height
  for (let i = 0; i < width;i++) {
    for (let j = 0; j < height; j++) {
      if (Math.random() > (1 - .23))
      drawFilledRect(i * cellsize,
       j * cellsize, cellsize, cellsize, 'black')
      console.log(i,j)
    }
  }
}
//animate(cells)
//cells()
//make a delay possibly
//find a way to cellArray[x of block][y of block]