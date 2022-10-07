// Some constants you will need. No need to do anything to these
const JUPITER_GRAVITY = 24.79;
const EARTH_GRAVITY = 9.8;
const G = 6.6743e-11;

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const itemsLeftOver = (numberOfPeople, numberOfItems) => {
  return numberOfItems % numberOfPeople
}

const areaOfCircle = (radius) => {
  return Math.PI * (radius ** 2)
}

const volumeOfCube = (lengthOfEdge) => {
  return lengthOfEdge ** 3
}

const populationGrowth = (currentSize, growthRate) => {
  return (growthRate * currentSize) + currentSize
}

const earnedRunAvarage = (earnedRuns, inningsPitched) => {
  return (earnedRuns / inningsPitched) * 9
}

const valueOfJewels = (numbDiamonds, numbEmeralds, valueOfDiamondInGold, valueOfEmeraldInGold) => {
  return (numbDiamonds * valueOfDiamondInGold) + (numbEmeralds * valueOfEmeraldInGold)
}

const payWithOvertime = (numberOfHoursWorked, hourlyRate, overtimeRate) => {
  if (numberOfHoursWorked <= 8)
    return numberOfHoursWorked * hourlyRate
  else
    return (numberOfHoursWorked - 8) * overtimeRate + (8 * hourlyRate)

}




const firstClassPostage = (weightOfLetter) => {
  if (Math.ceil(weightOfLetter) == 1)
    return 60
  else
    return 60 + (Math.ceil(weightOfLetter) * 24) - 24
}

const weightOnJupiter = (weightOfPersonOnEarth) => {
  return (JUPITER_GRAVITY / EARTH_GRAVITY) * weightOfPersonOnEarth
}

const gravity = (massOfBody1, massOfBody2, distanceBetweenBodies) => {
 return ((massOfBody1*massOfBody2)/distanceBetweenBodies**2)*G
}