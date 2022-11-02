const countTens = (x) => {
  return xs.filter((x) => x == 10).length
}

function sum(x) {
  let total = 0
  for (let pos = 0; pos < x.length; pos++) {
    total = total + x[pos]
  }
  return total
}

const evens =(xs) => {
  return xs.filter((x) => x % 2 === 0)
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
