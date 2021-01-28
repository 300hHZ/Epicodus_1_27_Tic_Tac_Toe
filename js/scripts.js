// This is first version of our logic

const winArray = [
    [
      [0, 0],
      [0, 1],
      [0, 2]
    ],
    [
      [1, 0],
      [1, 1],
      [1, 2]
    ],
    [
      [2, 0],
      [2, 1],
      [2, 2]
    ],
    [
      [0, 0],
      [1, 0],
      [2, 0]
    ],
    [
      [0, 1],
      [1, 1],
      [2, 1]
    ],
    [
      [0, 2],
      [1, 2],
      [2, 2]
    ],
    [
      [0, 0],
      [1, 1],
      [2, 2]
    ],
    [
      [2, 0],
      [1, 1],
      [0, 2]
    ]
  ]
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


function Player(mark) {
  this.score = 0;
  this.mark = mark;
}

function Game(p1, p2) {
  this.players = [p1, p2];
  this.higherScore = 0;
  //this.status = true;
  this.turn = 0;
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

Game.prototype.win = function() {
  // display who won
  // reset the board
  // update higher score
  //currentBoard.board = game.GameBoard();
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
let game = new Game(p1, p2);

function checkIfWin(gameboard, winArray, symbol) {
  for (i = 0; i < winArray.length; i++) {
    if (gameboard.value(winArray[i][0][0], winArray[i][0][1]) === symbol && gameboard.value(winArray[i][1][0], winArray[i][1][1]) === symbol && gameboard.value(winArray[i][2][0], winArray[i][2][1]) === symbol)
      console.log("Woop")
    game.win()
  }
};


$(document).ready(function() {

  let currentBoard = new GameBoard(game);

  $("#gameboard>div>div").on("click", function() {
    $(this).addClass("clicked");
    const id = $(this).attr("id");
    const x = parseInt(id[1]);
    const y = parseInt(id[0]);
    currentBoard.add(x, y, game.players[game.turn].mark);
    console.log(`X:${x} Y:${y}`);
    console.log(currentBoard.board);
    $(this).html(game.players[game.turn].mark);
    //check if win condition
    checkIfWin(currentBoard, winArray, game.players[game.turn].mark);
    game.turn = (game.turn ? 0 : 1);
  });
});