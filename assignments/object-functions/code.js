const getX = (object) => {
  return object.x
}

const point = (x, y) => {
  return { x: x, y: y }
}

const emptyObject = () => {
  return {}
}

const distance = (p1, p2) => {
  return Math.sqrt(Math.abs(p1.x - p2.x) ** 2 + Math.abs(p1.y - p2.y) ** 2)
}

const midpoint = (ob1, ob2) => {
  let result = { x: 0, y: 0 }
  result.x = (ob1.x + ob2.x) / 2
  result.y = (ob1.y + ob2.y) / 2
  return result
}

const sumSalaries = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i].salary
  }
  return sum
}

const newHighScore = (currentHighScore, scores) => {
  const values = scores.values(scores.score);
  for (let i = 0; i < scores.length; i++) {
   currentHighScore = Math.max(values)
  }
  return currentHighScore
}

const summarizeBooks = (books) => {

}