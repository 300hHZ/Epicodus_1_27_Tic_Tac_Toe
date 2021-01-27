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
  this.higherScore = 0;
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

function GameBoard(game) {
  this.board = game.generateBoard();
}

GameBoard.prototype.add = function(x, y, mark) {
  this.board[x][y] = mark;
}

GameBoard.prototype.value = function(x, y) {
  return this.board[x][y];
}

let p1 = new Player("O");
let p2 = new Player("X");
let game = new Game();



$(document).ready(function() {

  let currentBoard = new GameBoard(game);

  $("#gameboard>div>div").on("click", function() {
    $(this).addClass("clicked");
    const id = $(this).attr("id");
    const x = parseInt(id[1]);
    const y = parseInt(id[0]);
    currentBoard.add(x, y, "X");
    console.log(`X:${x} Y:${y}`);
    console.log(currentBoard.board);
  });
});