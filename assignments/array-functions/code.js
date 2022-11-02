const countTens = (xs) => {
  return xs.filter((x) => x == 10).length
}

const sum = (xs) => {
  return xs.reduce((x) => x++)
}

const evens =(xs) => {
  return xs.filter((x) => x % 2 === 0)
}

function anyOverOneHundred(x) {
  return x.map( x > 100)
}



const pyramid = (xs) => {
  return xs.filter((x) => x+x)
}
