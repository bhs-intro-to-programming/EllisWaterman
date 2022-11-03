const countTens = (xs) => {
  return xs.filter((x) => x == 10).length
}

const sum = (xs) => {
  return xs.reduce((x0,x1) => x0+x1, 0)
}

const evens =(xs) => {
  return xs.filter((x) => x % 2 === 0)
}

function anyOverOneHundred(xs) {
  return xs.filter((x) => x > 100).length > 0
}



const pyramid = (n) => {
  return Array(n).fill(n)
}
