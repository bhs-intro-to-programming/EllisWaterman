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

const playerBlack = {
  pieces: [{ icon: BLACK_KING, row: 0, col: 4 },
  { icon: BLACK_KNIGHT, row: 0, col: 6 },
  { icon: BLACK_KNIGHT, row: 0, col: 1 },
  { icon: BLACK_BISHOP, row: 0, col: 2 },
  { icon: BLACK_BISHOP, row: 0, col: 5 },
  { icon: BLACK_ROOK, row: 0, col: 0 },
  { icon: BLACK_ROOK, row: 0, col: 7 },
  { icon: BLACK_QUEEN, row: 0, col: 3 },
  { icon: BLACK_PAWN, row: 1, col: 0 },
  { icon: BLACK_PAWN, row: 1, col: 1 },
  { icon: BLACK_PAWN, row: 1, col: 2 },
  { icon: BLACK_PAWN, row: 1, col: 3 },
  { icon: BLACK_PAWN, row: 1, col: 4 },
  { icon: BLACK_PAWN, row: 1, col: 5 },
  { icon: BLACK_PAWN, row: 1, col: 6 },
  { icon: BLACK_PAWN, row: 1, col: 7 },
  ]
}

const playerWhite = {
  pieces: [{ icon: WHITE_KING, row: 7, col: 4 },
  { icon: WHITE_KNIGHT, row: 7, col: 6 },
  { icon: WHITE_KNIGHT, row: 7, col: 1 },
  { icon: WHITE_BISHOP, row: 7, col: 2 },
  { icon: WHITE_BISHOP, row: 7, col: 5 },
  { icon: WHITE_ROOK, row: 7, col: 0 },
  { icon: WHITE_ROOK, row: 7, col: 7 },
  { icon: WHITE_QUEEN, row: 7, col: 3 },
  { icon: WHITE_PAWN, row: 6, col: 0 },
  { icon: WHITE_PAWN, row: 6, col: 1 },
  { icon: WHITE_PAWN, row: 6, col: 2 },
  { icon: WHITE_PAWN, row: 6, col: 3 },
  { icon: WHITE_PAWN, row: 6, col: 4 },
  { icon: WHITE_PAWN, row: 6, col: 5 },
  { icon: WHITE_PAWN, row: 6, col: 6 },
  { icon: WHITE_PAWN, row: 6, col: 7 },
  ]
}

const drawBoard = () => {
  let colsize = 8;
  let rowsize = 8;
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize + 1; cols++) {
      let color = (cols % 2 === 0) ? 'transparent' : 'grey';
      drawFilledRect(rows * SQUARE_SIZE,
        cols * SQUARE_SIZE - (SQUARE_SIZE * (rows % 2 === 0 ? 0 : 1)),
        SQUARE_SIZE, SQUARE_SIZE, color);
    }
  }
};

const placePiece = (piece) => {
  drawPiece(piece.icon, piece.col, piece.row)
}

const board = new Array(8).fill(0).map(() => new Array(8).fill(0));

const drawPiece = (icon, col,row) => {
  drawText(icon, col * SQUARE_SIZE,
   row * SQUARE_SIZE + SQUARE_SIZE,
    'black', SQUARE_SIZE);
  board[col][row] = icon
}
const placePieces = () => {
  playerBlack.pieces.forEach(piece => {
    placePiece(piece);
  });
  playerWhite.pieces.forEach(piece => {
    placePiece(piece);
  });
};

drawBoard();
placePieces();
let pieceSelected = null;

registerOnclick((x, y) => {
  let col = Math.floor(x/SQUARE_SIZE)
  let row = Math.floor(y/SQUARE_SIZE)
 if (board[col][row] !== 0 && pieceSelected === null) {
  pieceSelected = {col: col, row: row, icon: board[col][row]}
 } else if (pieceSelected && board[col][row] === 0) {
   drawPiece(pieceSelected.icon, col, row)
   board[col][row] === pieceSelected.icon
   board[pieceSelected.col][pieceSelected.row] = 0
   
   pieceSelected = null
 }
 console.log(pieceSelected.icon)
});