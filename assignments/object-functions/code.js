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
  return Math.sqrt((p1.x - p2.x) ** 2 + (p1.y - p2.y) ** 2)
}

const midpoint = (p1, p2) => {
return  (x : p1.x + p2.x, y : p1.y + p2.y)
};



const sumSalaries = (array) => {
  let sum = 0
  for (let i = 0; i < array.length; i++) {
    sum += array[i].salary
  }
  return sum
}

const newHighScore = (currentHighScore, scores) => {
  for (let i = 0; i < scores.length; i++) {
   if (currentHighScore < scores[i].score)
   currentHighScore = scores[i].score
  }
  return currentHighScore
}

const summarizeBooks = (books) => {
  let result = {'titles' : [], 'pages' : 0 }
  for(let i = 0; i < books.length; i++) {
    result.titles.push(books[i].title)
    result.pages = result.pages + books[i].pages
  }
  return result
}