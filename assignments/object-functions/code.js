const getX =(object) => {
  return object.x
}

const point = (point) => {
  let object = {x: 0, y: 0}
  object.x = point[0]
  object.y = point[1]
  return object
}