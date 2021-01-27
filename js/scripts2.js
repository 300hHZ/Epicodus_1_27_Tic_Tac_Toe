function checkIfWin(gameboard, winArray, symbol) {
  for (i = 0; i < winArray.length; i++) {

    if (winArray[0] == symbol)

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