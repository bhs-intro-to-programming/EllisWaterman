// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  if (e1.salary > e2.salary) {
    return e1
  } else {
    return e2
  }

};

const isSamePoint = (p1, p2) => {
  return (p1.x === p2.x) && (p1.y === p2.y)
};

const totalWithTip = (bill, tipPercentage) => {
  let finalBill = { subtotal: 0, tip: 0, total: 0 }
  finalBill.subtotal = bill.subtotal
  finalBill.tip = bill.subtotal * tipPercentage
  finalBill.total = finalBill.subtotal + finalBill.tip
  return finalBill
};

const isWinner = (player) => {
  return player.score > 100
};

const updateWins = (players) => {
  for (let i = 0; i < players.length; i++) {
    if (isWinner(players[i]))
      players[i].wins++
  }
};

const bigWinners = (players) => {
  let bigWinnerArray = []
  for (let i = 0; i < players.length; i++) {
    if (players[i].wins > 10) {
      bigWinnerArray.push(players[i])
    }
  }
  return bigWinnerArray
};

const fillTimesTable = (table) => {

};

const sums = (n) => {
  Array(n+1)
};

const rule110 = (cells) => {
};