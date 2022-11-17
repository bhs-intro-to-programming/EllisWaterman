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
  pieces: [{ piece: WHITE_KING, row: 5, col: 8 },
  {piece: WHITE_KNIGHT, row: 1, col: 4 },
  {piece: WHITE_BISHOP, row: 1, col: 1 }, 
  {piece: WHITE_ROOK, row: 1, col: 1 },
  {piece: WHITE_QUEEN, row: 1, col: 1 },
  {piece: WHITE_PAWN, row: 1, col : 1}
  ]
}

const playerBLACK = {
 pieces: [{ piece: BLACK_KING, row: 5, col: 8 },
 {piece: BLACK_KNIGHT, row: 1, col: 4 },
 {piece: BLACK_BISHOP, row: 1, col: 1 },
 {piece: BLACK_ROOK, row: 1, col: 1 },
 {piece: BLACK_QUEEN, row: 1, col: 1 },
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 {piece: BLACK_PAWN, row: 1, col : 1},
 ]
}




const board = () => {
  let s = 35
  let colsize = 9
  let rowsize = 8
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
const placePawns = () => {
  for (let i = 0; i < 8; i++) {
    drawText(playerWhite.pieces[5], playerWhite.pieces[i].row * 35, playerWhite.pieces[i].row, 'black', 50);
  }
}
//drawText(BLACK_KING, x, y, 'black', size);


drawText('COLS', width/2, height/2, 'black', 64);
