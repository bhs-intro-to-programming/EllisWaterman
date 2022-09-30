// You will use this function in one of the problems. You don't need to change
// it or even worry about how exactly it works.
const emit = (a, b, product) => {
  console.log(`${a} times ${b} is ${product}`);
};

// Write your code here ...
const avarageWeight = (totalWeight, numberOfItems) => {
  return totalWeight/numberOfItems
}
// put values in ()
const hypotenuse = (a, b) => {
  return Math.sqrt(a**2+b**2)
}
//plug in a and b value in ()
// ex. hypotenuse(3,4) will return 5

const maxRadius = (heightOfDrawingArea, width) => {
  if (width > heightOfDrawingArea)
  return heightOfDrawingArea/2
  else
  return width/2
}

const numCircles = (radius, width) => {
   return width/(radius*2)
}

const offset = (widthOfArea, widthOfFigure) => {
  if (widthOfFigure < widthOfArea)
  return widthOfArea-widthOfFigure
}

const canSleepIn = (weekday, vacation) => {
  return !weekday || vacation
}

const canGoToProm = (isSenior, invitedBySenior, promExclusionList) => {
 return isSenior || invitedBySenior && !promExclusionList
}

const getsSpeedingTicket = (mph, grouchyCop) => {
  if (grouchyCop == true)
    if (mph > 65)
    return true
    else
    return false
  if (grouchyCop == false)
    if (mph > 70)
    return true
    else
    return false
}

const moreThanTwiceAsLong = (x, y) => {
let  s = 10
let a = s.substring(x)
let b = s.substring(y)
if (2*a > b)
return true
else
return false
}

