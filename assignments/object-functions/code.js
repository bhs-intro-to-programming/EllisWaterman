const getX =(object) => {
  return object.x
}

const point = (x, y) => {
  return {x: x, y: y}
}

const emptyObject = () => {
  return {}
}

const distance = (x1, y1, x2, y2) => {
  return Math.sqrt((x1 - y1)**2+(x2 - y2)**2)
}