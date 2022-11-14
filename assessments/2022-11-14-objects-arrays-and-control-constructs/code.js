// For a change of pace, I'm providing you with all the function skeletons. This
// should save you some time.

const area = (rect) => {
  return rect.width*rect.height
};

const higherPaid = (e1, e2) => {
  let highest = {salary : 0}
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
  let finalBill = {subtotal : 0, tip : 0, total : 0}
  let finalBill.subtotal === bill.subtotal
  return finalBill
};

const isWinner = (player) => {
};

const updateWins = (players) => {
};

const bigWinners = (players) => {
};

const fillTimesTable = (table) => {
};

const sums = (n) => {
};

const rule110 = (cells) => {
};
