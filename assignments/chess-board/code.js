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
const SQUARE_SIZE = 45;

// Example of drawing one of the pieces

const playerWhite = {
  pieces: [{ piece: WHITE_KING, row: 1, col: 4 },
  { icon: WHITE_KNIGHT, row: 1, col: 4 },
  { icon: WHITE_KNIGHT, row: 1, col: 4 },
  { icon: WHITE_BISHOP, row: 1, col: 1 },
  { icon: WHITE_BISHOP, row: 1, col: 1 },
  { icon: WHITE_ROOK, row: 1, col: 1 },
  { icon: WHITE_ROOK, row: 1, col: 1 },
  { icon: WHITE_QUEEN, row: 1, col: 3 },
  { icon: WHITE_PAWN, row: 2, col: 0 },
  { icon: WHITE_PAWN, row: 2, col: 1 },
  { icon: WHITE_PAWN, row: 2, col: 2 },
  { icon: WHITE_PAWN, row: 2, col: 3 },
  { icon: WHITE_PAWN, row: 2, col: 4 },
  { icon: WHITE_PAWN, row: 2, col: 5 },
  { icon: WHITE_PAWN, row: 2, col: 6 },
  { icon: WHITE_PAWN, row: 2, col: 7 },
  ]
}

const playerBlack = {
  pieces: [{ piece: BLACK_KING, row: 7, col: 4 },
  { icon: BLACK_KNIGHT, row: 7, col: 6 },
  { icon: BLACK_KNIGHT, row: 8, col: 6 },
  { icon: BLACK_BISHOP, row: 1, col: 1 },
  { icon: BLACK_BISHOP, row: 1, col: 1 },
  { icon: BLACK_ROOK, row: 7, col: 0 },
  { icon: BLACK_ROOK, row: 7, col: 7 },
  { icon: BLACK_QUEEN, row: 7, col: 3 },
  { icon: BLACK_PAWN, row: 6, col: 0 },
  { icon: BLACK_PAWN, row: 6, col: 1 },
  { icon: BLACK_PAWN, row: 6, col: 2 },
  { icon: BLACK_PAWN, row: 6, col: 3 },
  { icon: BLACK_PAWN, row: 6, col: 4 },
  { icon: BLACK_PAWN, row: 6, col: 5 },
  { icon: BLACK_PAWN, row: 6, col: 6 },
  { icon: BLACK_PAWN, row: 6, col: 7 },
  ]
}




const board = () => {
  let colsize = 8;
  let rowsize = 8;
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize-1; cols++) {
      let color = (cols % 2 === 0) ? 'grey' : 'transparent';
      if (rows % 2 === 0)
        drawFilledRect(rows * SQUARE_SIZE, cols * SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE, color)
      else
        drawFilledRect(rows * SQUARE_SIZE, cols * SQUARE_SIZE - SQUARE_SIZE, SQUARE_SIZE, SQUARE_SIZE, color)
    }
  }
};

board();

const placePiece = (piece) => {
  drawText(piece.icon, piece.col * SQUARE_SIZE, piece.row * SQUARE_SIZE, 'black', SQUARE_SIZE);
}


const placePieces = () => {
  playerBlack.pieces.forEach(piece => {
    placePiece(piece);
  });
};

placePieces();