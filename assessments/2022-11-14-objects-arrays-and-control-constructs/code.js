// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width * rect.height
};

const higherPaid = (e1, e2) => {
  let highest = { salary: 0 }
  if (e1.salary > e2.salary) {
    highest.salary = e1.salary
  } else {
    highest.salary = e2.salary
  }
  return highest
};

const isSamePoint = (p1, p2) => {
  if ((p1.x === p2.x) && (p1.y === p2.y)) {
    return true
  } else {
    return false
  }
};

const totalWithTip = (bill, tipPercentage) => {
  let finalBill = { subtotal: 0, tip: 0, total: 0 }
  finalBill.subtotal = bill.subtotal
  finalBill.tip = bill.subtotal * tipPercentage.tip
  finalBill.total = finalBill.subtotal + finalBill.tip
  return finalBill
};

const isWinner = (player) => {
  if (player.score > 100) {
    return true
  } else {
    return false
  }
};

const updateWins = (players) => {
  for (let i = 0; i < players.length; i++) {
    if (players[i].score > 100) {
      players['wins'].wins++
    }
  }
  console.log(players[2].wins)
};

const bigWinners = (players) => {
  for(let i = 0; i < players.length; i++) {
    if (players[i].wins > 10) {
      return players[i]
    }
  }
};

const fillTimesTable = (table) => {

};

const sums = (n) => {
};

const rule110 = (cells) => {
};
