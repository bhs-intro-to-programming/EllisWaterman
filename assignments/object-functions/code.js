const getX =(object) => {
  return object.x
}

const point = (x) => {
  let object = {x: 0, y: 0}
  object['x'] = point(1)
  return object
}