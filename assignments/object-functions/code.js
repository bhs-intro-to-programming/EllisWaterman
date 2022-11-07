const getX =(object) => {
  return object.x
}

const point = (x, y) => {
  return {x: x, y: y}
}

const emptyObject = () => {
  return {}
}

const distance = (x1, x2, y1, y2) => {
  return Math.sqrt(Math.abs((x1['x'] - y1['y'])**2)
  +Math.sqrt(Math.abs(x2['x'] - y2['y']))**2)
}

const midpoint = () => {
  return
}