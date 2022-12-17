const CELLSIZE = 15;
const rows = Math.floor(height / CELLSIZE)
const cols = Math.floor(width / CELLSIZE)

const current =
  Array(rows).fill().map(() =>
    Array(cols).fill().map(() => (false)));

const next =
  Array(rows).fill().map(() =>
    Array(cols).fill().map(() => (false)));

const originalCells = () => {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (Math.random() > (1 - .23)) {
        drawFilledRect(x * CELLSIZE, y * CELLSIZE, CELLSIZE, CELLSIZE, 'green');
        current[y][x] = true
      }
    }
    drawFilledRect(0, 0, 100, 50, 'lightBlue')
    drawText('+1 Generation', 0, 30, 'black', 15)
  }
};

const doTheyLive = () => {
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let locations = [0, 45, 90, 135, 180, 225, 270, 315];
      let idx;
      if (i === 0) {
        locations.splice(locations.indexOf(315), 1)
        locations.splice(locations.indexOf(0), 1)
        locations.splice(locations.indexOf(45), 1)
      }
      if (i === rows) {
        locations.splice(locations.indexOf(225), 1)
        locations.splice(locations.indexOf(180), 1)
        locations.splice(locations.indexOf(135), 1)
      }
      if (i === cols) {
        if (idx = locations.indexOf(45) > 0)
          locations.splice(idx, 1)
        locations.splice(locations.indexOf(90), 1)
        if (idx = locations.indexOf(135) > 0)
          locations.splice(locations.indexOf(135), 1)
      }
      if (j === 0) {
        if (idx = locations.indexOf(315) > 0)
          locations.splice(locations.indexOf(315), 1)//
        locations.splice(locations.indexOf(270), 1)
        if (idx = locations.indexOf(225) > 0)
          locations.splice(locations.indexOf(225), 1) //
      }
      console.log("foo")
      console.log(locations)
      return;
    }
  }
}
originalCells()
//make a delay possibly


registerOnclick((x, y) => {
  if (x < 150 && y < 50) {
    //animate(doTheyLive)
    doTheyLive()
  }
});