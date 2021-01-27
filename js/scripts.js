//------Example code
// let testPlayer = new Player("X");
// testPlayer.mark(); // returns "X"

// let board = new Board();
// let testSpace = board.find(1, 2); // board.find(1,2) returns a Space object

// testSpace.xCoordinate(); // returns 1
// testSpace.yCoordinate(); // returns 2

// testSpace.mark(testPlayer);
// testSpace.markedBy(); // returns testPlayer or "X"

// board.gameOver(); // returns a boolean


// function Gameboard() {
//   board = [];
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       board[i][j] = "#";

//     }
//   }
// }

// function cleanGameboard() {
//   board = [[],[],[]];
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       board[i][j] = "";
//     }
//   }
//   return board;
// }

function Player(mark) {
  this.score = 0;
  this.mark = mark;
}

function Game() {
  this.players = {};
  this.higherScore = higherScore;
  this.status = true;
  this.turn = "O";
}

Game.prototype.generateBoard = function() {
  board = [
    [],
    [],
    []
  ];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i][j] = "";
    }
  }
  return board;
}

function GameBoard() {
  this.board = board;
}

GameBoard.prototype.add = function(x, y, mark) {
  this.board[x][y] = mark;
}

GameBoard.prototype.value = function(x, y) {
  return this.board[x][y]
}