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


function gameboard() {
  board = [];
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      board[i, j] = "";
    }
  }
}

function checkIfWin(gameboard, winArray, symbol) {
  for (i = 0; i < winArray.length; i++) {

    if (winArray[0] == symbol)

  }
};