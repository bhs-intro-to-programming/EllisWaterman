function countTens(x) {
  let totalTens = 0
  while (x.length > 0) {
    if (x.pop() === 10)
      totalTens++
  }
  return totalTens
}

function sum(x) {
  let total = 0
  for (let pos = 0; pos < x.length; pos++) {
    total = total + x[pos]
  }
  return total
}

function evens(x) {
  let xs = x
  let y = 0
  for (let position = 0; position < x.length; position++) {
    if (y % 2)
    xs.pop[y]
    y++

  }
  return xs
}