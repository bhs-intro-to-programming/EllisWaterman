const countTens = (xs) => {
  return xs.filter((x) => x == 10).length
}

const sum = (xs) => {
  return xs.reduce((x) => x++)
}

const evens =(xs) => {
  return xs.filter((x) => x % 2 === 0)
}

function anyOverOneHundred(n) {
  return Array(n).fill().flatMap(x > 100)
}



const pyramid = (n) => {
  return Array(n).fill().flatMap((_, i) => [i,i])
}
