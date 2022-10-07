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
  while (numberOfHoursWorked <= 8) {
    return numberOfHoursWorked * hourlyRate
      
  }
  while (numberOfHoursWorked > 8) {
    return numberOfHoursWorked*overtimeRate
}
}

const firstClassPostage = (weightOfLetter) => {

}