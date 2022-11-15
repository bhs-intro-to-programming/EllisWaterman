const WHITE_KING   = '♔';
const WHITE_QUEEN  = '♕';
const WHITE_ROOK   = '♖';
const WHITE_BISHOP = '♗';
const WHITE_KNIGHT = '♘';
const WHITE_PAWN   = '♙';
const BLACK_KING   = '♚';
const BLACK_QUEEN  = '♛';
const BLACK_ROOK   = '♜';
const BLACK_BISHOP = '♝';
const BLACK_KNIGHT = '♞';
const BLACK_PAWN   = '♟';

// Example of drawing one of the pieces
drawText(BLACK_QUEEN, width/2, height/2, 'black', 128);

const board = () => {
    let s = 25
    let colsize = Math.floor(8)
    let rowsize = Math.floor(8)
    for (let rows = 0; rows < rowsize; rows++) {
      for (let cols = 0; cols < colsize; cols++) {
        let color = (cols % 2 === 0) ? 'black' : 'grey';
        if (rows % 2 === 0)
          drawFilledRect(rows * s, cols * s, s, s, color)
        else
          drawFilledRect(rows * s, cols * s - s, s, s, color)
      }
    }
  }
board()