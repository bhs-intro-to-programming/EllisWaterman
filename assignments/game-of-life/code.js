const cells = () => {
  let cellsize = 25;
  let xsize = width/cellsize
  let ysize = height/cellsize
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .003))
      drawFilledRect(xposition * cellsize, yposition * cellsize, cellsize, cellsize, 'black')
      
    }
  }
}
animate(cells)