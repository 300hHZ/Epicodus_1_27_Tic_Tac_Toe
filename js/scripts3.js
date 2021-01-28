// // const winArray = [
// [
//   [0, 0],
//   [0, 1],
//   [0, 2]
// ], [
//   [1, 0],
//   [1, 1],
//   [1, 2]
// ], [
//   [2, 0],
//   [2, 1],
//   [2, 2]
// ], [
//   [0, 0],
//   [1, 0],
//   [2, 0]
// ], [
//   [0, 1],
//   [1, 1],
//   [2, 1]
// ], [
//   [0, 2],
//   [1, 2],
//   [2, 2]
// ], [
//   [0, 0],
//   [1, 1],
//   [2, 2]
// ], [
//   [2, 0],
//   [1, 1],
//   [0, 2]
// ]
// ]


function Player(mark) {
  this.score = 0;
  this.mark = mark;
}

function Game(p1, p2) {
  this.players = [p1, p2];
  this.higherScore = 0;
  //this.status = true;
  this.turn = 0;
  this.gameBoard = new GameBoard();
}

// Game.prototype.generateBoard = function() {
//   board = [
//     [],
//     [],
//     []
//   ];
//   for (let i = 0; i < 3; i++) {
//     for (let j = 0; j < 3; j++) {
//       board[i][j] = "";
//     }
//   }
//   return board;
// }

Game.prototype.win = function() {
  //   // display who won
  //   // reset the board
  //   // update higher score
  //   currentBoard.board = game.GameBoard();
}

function GameBoard() {
  // this.board = game.generateBoard();
  this.board = [
    [],
    [],
    []
  ];
}

GameBoard.prototype.newBoard = function() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      this.board[i][j] = "";
    }
  }
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

function checkIfWin(gameBoard, mark) {
  const threeInARow = mark + mark + mark;
  let board = gameBoard.board;
  for (let i = 0; i < 3; i++) {
    if (board[i].join('') === threeInARow ||
      (board[0][i] + board[1][i] + board[2][i]) === threeInARow) {
      return "win";
    }
  }
  if ((board[0][0] + board[1][1] + board[2][2]) === threeInARow ||
    (board[2][0] + board[1][1] + board[0][2]) === threeInARow)
    return "win";

  for (i = 0; i <= 2; i++) {
    for (f = 0; f <= 2; f++) {
      if (gameBoard.value(i, f) === "") { return "no" }
    }
  }
  return "tie";
}


$(document).ready(function() {
  //click handlers for UI
  $("#gametotal").hide();
  $("#win").hide();
  $("#tie").hide();


  $("#startButton").on("click", function(event) {
    $("#start").hide();
    $("#gametotal").show();
  });

  $(".restart").on("click", function(event) {
    $("#tie").hide();
    $("#win").hide();
    $("#gametotal").show();
    $("#gameboard>div>div").removeClass("clicked");
  })

  // let currentBoard = game.newBoard();
  game.gameBoard.newBoard();

  $("#gameboard>div>div").on("click", function() {
    $(this).addClass("clicked");
    const id = $(this).attr("id");
    const x = parseInt(id[0]);
    const y = parseInt(id[1]);
    const mark = game.players[game.turn].mark;
    game.gameBoard.add(x, y, mark);
    console.log(`X:${x} Y:${y}`);
    console.log(game.gameBoard);
    $(this).html(game.players[game.turn].mark);
    // //check if win condition
    // checkIfWin(game.gameBoard, winArray, game.players[game.turn].mark);

    /* can simplify to checkIfWin(game.gameBoard.board, */
    if (checkIfWin(game.gameBoard, mark) === "win") {
      $("#gameboard>div>div").html("");
      $("#gameboard>div>div").removeClass("clicked");
      game.gameBoard.newBoard();
      $("#gametotal").hide();
      $("#win").show();
      // up active player score by 1
      $("#win span").text(game.players[game.turn].mark)

      console.log("Player " + (game.turn + 1) + " wins!");
    }
    game.turn = (game.turn ? 0 : 1);
  });
});