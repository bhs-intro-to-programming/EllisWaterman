/*
 * This code is running in an environment the same as simple-draw. Thus you have
 * two variables that will be helpful.
 *
 *  width - the width of the drawing area.
 *  height - the height of the drawing area.
 *
 * And these methods which do the same thing as in simple-draw.
 *
 *  drawLine(x1, y1, x2, y2, color, lineWidth)
 *
 *  drawCircle(x, y, radius, color, lineWidth=1)
 *
 *  drawRect(x, y, w, h, color, lineWidth=1)
 *
 *  drawTriangle(x1, y1, x2, y2, x3, y3, color, lineWidth=1)
 *
 *  drawFilledCircle(x, y, r, color)
 *
 *  drawFilledRect(x, y, width, height, color)
 *
 *  drawFilledTriangle(x1, y1, x2, y2, x3, y3, color)
 *
 *  clear()
 */




const concentricCircle = () => {
  let x = 0
  let colour = 'red'
  while (x < height / 2) {
    drawFilledCircle(width / 2, height / 2, height / 2 - x, colour)
    colour = (colour == 'red' ? 'blue' : 'red')
    x = x + 15
  }
}



const lineOfCircles = () => {
  let numberOfCircles = 20
  let radius = width / numberOfCircles / 2
  for (let x = 0; x < numberOfCircles; x++) {
    drawFilledCircle(x * radius * 2 + radius, height / 2, radius, 'red')
  }
}




const lineOfCirclesAlternatingColors = () => {
  let numberOfCircles = 20
  let radius = width / numberOfCircles / 2
  for (let x = 0; x < numberOfCircles; x++) {
    let colour = (x % 2 === 1) ? 'blue' : 'red';
    drawFilledCircle(x * radius * 2 + radius, height / 2, radius, colour)
  }
}




const fillWithCircles = () => {
  let radius = 25;
  let xsize = Math.floor(width / (radius * 2))
  let ysize = Math.floor(height / (radius * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}

const fillWithRandomlyFilledCircles = () => {
  let radius = 22;
  let xsize = Math.floor(width / (radius * 2))
  let ysize = Math.floor(height / (radius * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      if (Math.random() > (1 - .23))
        drawFilledCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
      else
        drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}





const fillWithRandomlyColoredFilledCircles = () => {
  let radius = 22;
  let xsize = Math.floor(width / (radius * 2))
  let ysize = Math.floor(height / (radius * 2))
  for (let rows = 0; rows < xsize; rows++) {
    for (let cols = 0; cols < ysize; cols++) {
      let color = (rows*cols % Math.floor(Math.random()*7) === 1)
        ? 'red'
        : (rows*cols %  7 == Math.floor(Math.random()*7))
          ? 'orange'
          : (rows*cols %  7 == Math.floor(Math.random()*7))
            ? 'yellow'
            : (rows*cols %  7) == Math.floor(Math.random()*7)
              ? 'green'
              : (rows*cols %  7 == Math.floor(Math.random()*7))
                ? 'blue'
                : (rows*cols %  7 == Math.floor(Math.random()*7))
                  ? 'indigo'
                  : (rows*cols % Math.floor(Math.random()*7))
                    ? 'violet'
                    : (rows*cols % Math.floor(Math.random()*7))
      if (Math.random() > (1 - .23))
        drawFilledCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, color, 1)
      else
        drawCircle(rows * (radius * 2) + radius, cols * radius * 2 + radius, radius, 'blue', 1)
    }
  }
}
 


  const myDrawCircle = (r, rows, cols) => {
    drawCircle(rows * (r * 2) + r, cols * r * 2 + r, r, 'blue', 1)
  }
  const squareOfCircles = () => {
    let r = 20;
    let xsize = Math.floor(width / (r * 2))
    let ysize = Math.floor(height / (r * 2))
    for (let rows = 0; rows < xsize; rows++) {
      for (let cols = 0; cols < ysize; cols++) {
        if (cols == ysize - 1)
          myDrawCircle(r, rows, cols)
        if (cols < 1)
          myDrawCircle(r, rows, cols)
        if (rows == xsize - 1)
          myDrawCircle(r, rows, cols)
        if (rows < 1)
          myDrawCircle(r, rows, cols)
      }
    }
  }
 


  const checkerboard = () => {
    let s = 25
    let colsize = Math.floor(width / s)
    let rowsize = Math.floor(height / s)
    for (let rows = 0; rows < rowsize; rows++) {
      for (let cols = 0; cols < colsize; cols++) {
        let color = (cols % 2 === 0) ? 'blue' : 'red';
        if (rows % 2 === 0)
          drawFilledRect(rows * s, cols * s, s, s, color)
        else
          drawFilledRect(rows * s, cols * s - s, s, s, color)
      }
    }
  }



  const notReallyCurved = () => {
    let a = 25
    let s = 15
    for (let y = 0; y < a; y++) {
      for (let x = 0; x < a; x++) {
        drawLine(0, y * s, y * s, height - 1, 'black', 1)
      }
    }
  }

  const colorfulCurve = () => {
    let a = 25
    let s = 15
    for (let y = 0; y < a; y++) {
      for (let x = 0; x < a; x++) {
        let color = (y % 7 === 1)
          ? 'red'
          : (y % 7 == 2)
            ? 'orange'
            : (y % 7 == 3)
              ? 'yellow'
              : (y % 7 == 4)
                ? 'green'
                : (y % 7 == 5)
                  ? 'blue'
                  : (y % 7 == 6)
                    ? 'indigo'
                    : 'violet';
        drawLine(0, y * s, y * s, height - 1, color, 1)
      }
    }

  }

const drawPlatformerGameRandomGenLevel = () => {
  let blockSize = 25;
  let xsize = width/blockSize
  let ysize = height/blockSize
  for (let yposition = 0; yposition < ysize; yposition++) {
    for (let xposition = 0; xposition < xsize; xposition++) {
      if (Math.random() > (1 - .23))
      drawFilledRect(xposition * blockSize, yposition * blockSize, blockSize, blockSize, 'black')
    }
  }
}

const drawPyramid = () => {
  for(let i = 0; i < 200; i++) {
    for(let pos = 0; pos < i; pos++) {
      drawFilledRect(pos*20+width/2, pos*20, 25,25,'black');
      drawFilledRect(-pos*20+width/2, pos*20, 25,25,'black');
      drawFilledRect(pos*20+15, 310-15, 25,25,'black');


    }
  }
}
drawPyramid()
//drawPlatformerGameRandomGenLevel();
// colorfulCurve();
// concentricCircle();
// lineOfCirclesAlternatingColors();
// fillWithCircles();
// fillWithRandomlyFilledCircles();
// squareOfCircles();
// checkerboard();
// notReallyCurved();
// fillWithRandomlyColoredFilledCircles()