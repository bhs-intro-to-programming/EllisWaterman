const getX =(object) => {
  return object.x
}

const point = (x, y) => {
  return {x: x, y: y}
}

const emptyObject = () => {
  return {}
}

const distance = (x, y) => {
  return Math.sqrt(Math.abs((x.x - y.y)**2)
        +Math.sqrt(Math.abs(x.x - y.y))**2)
}

const midpoint = () => {
  return
}