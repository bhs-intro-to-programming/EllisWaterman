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

const fireAlarm = (fireAlarmPulled, smokeDetected,plannedDrill) => {
  return fireAlarmPulled || smokeDetected || plannedDrill
}

const canBePresident = (is35, naturalBornCitizen, livedInUsFor14Years) => {
  return is35 && naturalBornCitizen && livedInUsFor14Years
}

const willSeeTweet = (followTweeter, followedSomoneWhoReTweeted, blockedOGTweeter) => {
  return !blockedOGTweeter || followTweeter || followedSomoneWhoReTweeted 
}

const evenGreaterThanZero = (x) => {
  if (x > 0)
    if (x % 2 === 0)
    return true
    else
     if (x < 0)
    return false
}

const isLeapYear = (year) => {
  if (year % 4 === 0)
    if(year % 400 === 0)
    return true
    else
    if (year % 100)
    return false
}

