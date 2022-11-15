const WHITE_KING = '♔';
const WHITE_QUEEN = '♕';
const WHITE_ROOK = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN = '♙';
const BLACK_KING = '♚';
const BLACK_QUEEN = '♛';
const BLACK_ROOK = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN = '♟';

// Example of drawing one of the pieces


const pieceArray = [
  [0, 35 * 1], [0, 35 * 2], [0, 35 * 3], [0, 35 * 4], [0, 35 * 5], [0, 35 * 6], [0, 35 * 7], [0, 35 * 8]
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8],
  // [p1, p2, p3, p4, p5, p6, p7, p8]
]
const stupidfuction = (pieceArray) => {
  for (let i = 0; i < 8; i++) {
    drawText(BLACK_PAWN, pieceArray[1][i], pieceArray[0][i], 'black', 64);
  }
}
stupidfuction()

const board = () => {
  let s = 35
  let colsize = Math.floor(9)
  let rowsize = Math.floor(8)
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize; cols++) {
      let color = (cols % 2 === 0) ? 'grey' : 'transparent';
      if (rows % 2 === 0)
        drawFilledRect(rows * s, cols * s, s, s, color)
      else
        drawFilledRect(rows * s, cols * s - s, s, s, color)
    }
  }
}
board()