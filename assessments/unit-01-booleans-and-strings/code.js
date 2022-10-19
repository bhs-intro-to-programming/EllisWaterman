/*
 * You will need this function for some of the problems. It returns a random
 * number between 0, inclusive, and n, exclusive. Thus rand(3) could possibly
 * return 0, 1, or 2 but will not return 3.
 */
const rand = (n) => Math.floor(Math.random() * n);

// Write your code here. Remember that you get partial credit for a
// syntactically correct function skeleton, more credit for a skeleton with a
// reasonable argument list, yet more credit for a working function, and full
// credit for a clear and simple working function.

const fireAlarm = (fireAlarmPulled, smokeDetected, plannedDrill) => {
  return fireAlarmPulled || smokeDetected || plannedDrill
}

const canBePresident = (age, naturalBornCitizen, yearsInUS) => {
  let is35 = age >= 35;
  let livedInUsFor14Years = yearsInUS >= 14;
  return is35 && naturalBornCitizen && livedInUsFor14Years
}

const willSeeTweet = (blockedOGTweeter, followTweeter, followedSomoneWhoReTweeted) => {
  return !blockedOGTweeter && (followTweeter || followedSomoneWhoReTweeted)
}

const evenGreaterThanZero = (x) => {
  if (x > 0 && x % 2 === 0)
    return true
  return false
}

const isLeapYear = (year) => {
  if (year % 400 === 0)
    return true
  if (year % 100 === 0)
    return false
  if (year % 4 === 0)
    return true
  else
    return false
}

const firstAndLast = (s) => {
  if (s.length > 1)
    return s.substring(0, 1) + s.substring(s.length - 1)
}

const swapFrontAndBack = (s) => {
  return s.substring(s.length / 2) + s.substring(0, s.length / 2)
}

const simplePigLatin = (s, posOfFirstVowel) => {
  return s.substring(posOfFirstVowel) + s.substring(0, posOfFirstVowel) + 'ay'
}

const randomCharacter = (s) => {
  return s.substring(rand(s.length), rand(s.length + 1))
  //unfinished
}

const randomCharacterUpDown = (s) => {
  if (rand())
    return s.substring(rand(s.length), rand(s.length + 1)).toUpperCase()
  else
    return s.substring(rand(s.length), rand(s.length + 1)).toLowerCase()
  //unfinished
}

const isAllUpperCase = (s) => {
  if (s.substring(0) == s.substring(0).toUpperCase())
    return true
  else
    return false
}

const sameIgnoringCase = (s1, s2) => {
}