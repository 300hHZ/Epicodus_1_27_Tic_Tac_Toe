function checkIfWin(gameboard, winArray, symbol) {
  for (i = 0; i < winArray.length; i++) {
    if (gameboard[winArray[i][0][0]][winArray[i][0][1]] === symbol && gameboard[winArray[i][1][0]][winArray[i][1][1]] === symbol && gameboard[winArray[i][2][0]][winArray[i][2][1]] === symbol)
      console.log("Woop")
  }
};



// raw arrays

winArray = [
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

gameboard = [
  ["", "", ""],
  ["", "", ""],
  ["", "", ""]
]