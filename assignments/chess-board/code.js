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
const SQUARE_SIZE = 34;

// Example of drawing one of the pieces



const pieces = [
  { team: 'white', icon: WHITE_KING, row: 7, col: 4 },
  { team: 'white', icon: WHITE_KNIGHT, row: 7, col: 6 },
  { team: 'white', icon: WHITE_KNIGHT, row: 7, col: 1 },
  { team: 'white', icon: WHITE_BISHOP, row: 7, col: 2 },
  { team: 'white', icon: WHITE_BISHOP, row: 7, col: 5 },
  { team: 'white', icon: WHITE_ROOK, row: 7, col: 0 },
  { team: 'white', icon: WHITE_ROOK, row: 7, col: 7 },
  { team: 'white', icon: WHITE_QUEEN, row: 7, col: 3 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 0 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 1 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 2 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 3 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 4 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 5 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 6 },
  { team: 'white', icon: WHITE_PAWN, row: 6, col: 7 },
  { team: 'black', icon: BLACK_KING, row: 0, col: 4 },
  { team: 'black', icon: BLACK_KNIGHT, row: 0, col: 6 },
  { team: 'black', icon: BLACK_KNIGHT, row: 0, col: 1 },
  { team: 'black', icon: BLACK_BISHOP, row: 0, col: 2 },
  { team: 'black', icon: BLACK_BISHOP, row: 0, col: 5 },
  { team: 'black', icon: BLACK_ROOK, row: 0, col: 0 },
  { team: 'black', icon: BLACK_ROOK, row: 0, col: 7 },
  { team: 'black', icon: BLACK_QUEEN, row: 0, col: 3 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 0 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 1 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 2 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 3 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 4 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 5 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 6 },
  { team: 'black', icon: BLACK_PAWN, row: 1, col: 7 },
]


const drawBoard = () => {
  let colsize = 8;
  let rowsize = 8;
  for (let rows = 0; rows < rowsize; rows++) {
    for (let cols = 0; cols < colsize + 1; cols++) {
      let color = (cols % 2 === 0) ? 'white' : 'grey';
      drawFilledRect(rows * SQUARE_SIZE,
        cols * SQUARE_SIZE - (SQUARE_SIZE * (rows % 2 === 0 ? 0 : 1)),
        SQUARE_SIZE, SQUARE_SIZE, color);
    }
  }
};

const placePiece = (piece) => {
  drawPiece(piece.icon, piece.col, piece.row);
  board[piece.col][piece.row] = piece
}

const board = new Array(8).fill(0).map(() => new Array(8).fill(0));

const drawPiece = (icon, col, row) => {
  drawText(icon, col * SQUARE_SIZE,
    row * SQUARE_SIZE + SQUARE_SIZE,
    'black', SQUARE_SIZE);
}
const placePieces = () => {
  pieces.forEach(piece => {
    placePiece(piece);
  });
};
const emptySpace = (piece) => {
  let color = ((piece.col + piece.row * 7) % 2 === 0) ? 'white' : 'grey';
  drawFilledRect(piece.col * SQUARE_SIZE,
    piece.row * SQUARE_SIZE,
    SQUARE_SIZE, SQUARE_SIZE, color);
}
drawBoard();
placePieces();
let pieceSelected = null;
let clickCount = 0

registerOnclick((x, y) => {
  let col = Math.floor(x / SQUARE_SIZE)
  let row = Math.floor(y / SQUARE_SIZE)
  if (board[col][row] !== 0 && pieceSelected === null) {
    pieceSelected = board[col][row]
  } else if (pieceSelected && board[col][row] === 0) {
    drawPiece(pieceSelected.icon, col, row)
    emptySpace(pieceSelected)
    board[pieceSelected.col][pieceSelected.row] = 0
    pieceSelected.row = row
    pieceSelected.col = col
    board[col][row] = pieceSelected
    pieceSelected = null

  }
});