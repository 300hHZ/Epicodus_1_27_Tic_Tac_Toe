## Tic Tac Toe game
#### *Epicodus Practice lesson #24 (Week 4) on 1/27/-1/28/ 2021*
***By Daniel Adeyemi, Jonah Johansen,  Woo Jin Kim***
___
## *Description:*
### *Are you up for some Tic Tac Toe? Let's play!* 
This game design for 2 players (also knowon as noughts and crosses (Commonwealth English), or Xs and Os/“X’y O’sies” (Ireland)), is a paper-and-pencil game for two players, X and O, who take turns marking the spaces in a 3×3 grid. The player who succeeds in placing three of their marks in a diagonal, horizontal, or vertical row is the winner. It is a solved game with a forced draw assuming best play from both players. If Player 1 won - Player 2 will start next game. If it's a tie - Player who forced the tie will move second.

## *Whiteboarding of bussiness logic*
![img](img/whiteboard.png)

## *Tests*

**Describe: `constractor Player(mark) {score and mark}`**      
**Describe: `constractor GameBoard() {this board = 2D array}`**   
**Describe: `constractor Game(player1, player2) {players, higher score, game Board, turn}`**      

#### Test 1:
**Describe: `GameBoard.prototype.newBoard()`**   
**Test:** *Return an empty 2D array*   
**Expect:** *game.generateBoard.toEqual([[],[],[]])* ✅   
#### Test 2:  
**Describe: `GameBoard.prototype.value(x,y)`**    
**Test:** *Return a position inside an array(aka gameboard)*     
**Expect:** *gameBoard.add(1,2).toEqual(this.board[1][2])* ✅   
#### Test 3:
**Describe: `checkIfWin(gameBoard, mark)`**   
**Test:** *Will return 'win' if player has winning combination, 'no' if game still in progress(empty squares still in a grid) or 'tie' if the board is full and no one has winning combination*   
**Expect:** *checkIfWin(board,X).toEqual('no')*   ✅   
**Expect:** *checkIfWin(board,X).toEqual('win')*  ✅   
**Expect:** *checkIfWin(board,X).toEqual('tie')*  ✅   
#### Test 4:
**Describe: `Player.prototype.upScore()`**   
**Test:** *Update score for player who just won*   ✅   
**Expect:** *Player.upScore().toEqual(this.score+=1)* ✅    
#### Test 5:   
**Describe: `GameBoard.prototype.add(x, y, mark)`**   
**Test:** *Add mark of this player into the clicked square*      
**Expect:** *GameBoard.add(0, 1, X).toEqual(this.board[0][1] === 'X')*    ✅   
**Expect:** *GameBoard.add(1, 2, O).toEqual(this.board[1][2] === 'O')*    ✅   
## *Setup instructions:*
#### From the web:
* Go to my GitHub repository, using following [URL](https://github.com/DanielAdeyemi/Epicodus_1_27_Tic_Tac_Toe.git).
* Click the "Code" and click the 'Download zip' option.
* Unzip the file, navigate to the root directory.
* open ***'index.html'*** file with your web browser.
#### From the terminal: 
* Clone my repository from GitHub using `git clone https://github.com/DanielAdeyemi/Epicodus_1_27_Tic_Tac_Toe.git`
* Navigate to the downloaded folder using ***cd*** command
* Execute **code .** command in your terminal and it will open all source code in your code editor.    
*Note: please, make sure that you are inside project directory!*
#### GitHub pages:
*Click [this link](https://danieladeyemi.github.io/Epicodus_1_27_Tic_Tac_Toe) to open GitHub page*

## *Tecnologies used:*
* HTML
* CSS
* Java Script
* JQuery
* Bootstrap *v5.0.0 beta*
* Git and GitHub

## *Known bugs:*
This project is not storing user's data and set all score back to 0 if page was refreshed.

## *License and copyright:*

> ***© Daniel Adeyemi, Jonah Johansen,  Woo Jin Kim, 2021***   
> *Licensed under [MIT license](https://mit-license.org/)*