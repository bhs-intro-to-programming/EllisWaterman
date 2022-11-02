function countTens(x) {
  let arrayOfTens = x
  let totalTens = 0
  while (arrayOfTens.length > 0) {
    if (arrayOfTens.pop() === 10)
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
  return x.filter(x % 2 === 0)
}
function anyOverOneHundred(x) {
  for (let element of x) {
   if (element > 100)
      return true
  }
  return false
}



function pyramid(x) {
  const xs = []
  for (let i = 0; i <= x; i++)
    for (let j = 0; j < i; j++)
      xs.push(i)
  return xs
}
