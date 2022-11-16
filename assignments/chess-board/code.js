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

const playerWhite = {
  pieces: [{ K: { row: 5, col: 8 } },
  { KN: { row: 1, col: 4 } },
  { KB: { row: 1, col: 1 } },
  { KR: { row: 1, col: 1 } },
  { Q: { row: 1, col: 1 } },
  { QN: { row: 1, col: 1 } },
  { QB: { row: 1, col: 1 } },
  { QR: { row: 1, col: 1 } },
  { P1: { row: 1, col: 1 } },
  { P2: { row: 1, col: 2 } },
  { P3: { row: 1, col: 3 } },
  { P4: { row: 1, col: 4 } },
  { P5: { row: 1, col: 5 } },
  { P6: { row: 1, col: 6 } },
  { P7: { row: 1, col: 7 } },
  { P8: { row: 1, col: 8 } },
  ]
}

const playerBlack = {
  pieces: [{ K: { row: 1, col: 5 } },
  { KN: { row: 1, col: 4 } },
  { KB: { row: 1, col: 1 } },
  { KR: { row: 1, col: 1 } },
  { Q: { row: 1, col: 1 } },
  { QN: { row: 1, col: 1 } },
  { QB: { row: 1, col: 1 } },
  { QR: { row: 1, col: 1 } },
  {pawnNumber : 1, position: { row: 1, col: 1 } },
  {pawnNumber : 2, position: { row: 2, col: 1 } },
  {pawnNumber : 3, position: { row: 3, col: 1 } },
  {pawnNumber : 4, position: { row: 4, col: 1 } },
  {pawnNumber : 5, position: { row: 5, col: 1 } },
  {pawnNumber : 6, position: { row: 6, col: 1 } },
  {pawnNumber : 7, position: { row: 7, col: 1 } },
  {pawnNumber : 8, position: { row: 8, col: 1 } },
 
  ]
}

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

for (let i = 0; i < 8; i++) {
  drawText(BLACK_PAWN, playerWhite.pieces[i+8].pawnNumber.row*35, playerWhite.pieces[i+8].P1.col*35, 'black', 50);
}
drawText(BLACK_KING, playerWhite.pieces[0].K.row*35, playerWhite.pieces[0].K.col*35, 'black', 50);
