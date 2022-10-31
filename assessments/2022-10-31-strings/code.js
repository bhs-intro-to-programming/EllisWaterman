/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton and more credit for a skeleton with a
// reasonable argument list. To get full credit you need to write a correct
// function but you can get partial credit for a function that is basically
// correct even if contains small mistakes.


const firstHalf = (s) => {
  return s.substring(0,s.length/2)
}

const secondHalf = (s) => {
  return s.substring(s.length/2)
}

const upDown = (s) => {
 return s.substring().toUpperCase()+s
}

const firstFewEveryOther = (s) => {
 return s.substring(0,1)+s.substring(2,3)+s.substring(4,5)
}

const upDownLastCharacter = (s) => {
  return s.substring(s.length-1).toUpperCase()+s.substring(s.length-1)
}

const firstAndLast = (s) => {
  return s.substring(0,1)+s.substring(s.length-1)
}

const swapFrontAndBack =(s) => {
  return s.substring(s.length-1)+s.substring(1,s.length-1)+s.substring(0,1)
}

const simplePigLatin = (s) => {
  return s.substring(s.search(/[aeiou]/))+s.substring(0,1)+'ay'
}

const randomCharacter = (s) => {
  let random = rand(s.length)
  return s.substring(random, random+1)
}

const randomCharacterUpDown = (s) => {
  let random = rand(s.length)
  return s.substring(random, random+1).toUpperCase()+ s.substring(random, random+1)
}

const isAllUpperCase = (s) => {
  if (s == s.toUpperCase())
  return true
  else
  return false
}

const sameIgnoringCase = (s1,s2) => {
  if (s1.toLowerCase() == s2.toLowerCase())
  return true
  else
  return false
}

const firstName = (s) => {
  return s.substring(0,s.indexOf(' ')
}

