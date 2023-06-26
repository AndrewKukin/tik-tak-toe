let players = ['x', 'o'];
let activePlayer = 0;

let board;

function startGame() {
  
  activePlayer = Math.round(Math.random());
  
  if (activePlayer === 0) {
    activePlayer = players[0];
  } else {
    activePlayer = players[1];
  };

  board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  renderBoard(board);
};

function click(row, col) {
  
  if (board[row][col] === '') {
    board[row][col] = activePlayer;
    renderBoard(board);
  };

  for (let i = 0; i < board.length; i++) {
    if (
      board[i][0] === activePlayer &&
      board[i][1] === activePlayer &&
      board[i][2] === activePlayer
    ) {
      showWinner(players.indexOf(activePlayer)); 
    }
  }

  for (let i = 0; i < board[0].length; i++) {
    if (
      board[0][i] === activePlayer &&
      board[1][i] === activePlayer &&
      board[2][i] === activePlayer
    ) {
      showWinner(players.indexOf(activePlayer)); 
    };
  };

  if (
    board[0][0] === activePlayer &&
    board[1][1] === activePlayer &&
    board[2][2] === activePlayer
  ) {
      showWinner(players.indexOf(activePlayer)); 
  };

  if (
    board[0][2] === activePlayer &&
    board[1][1] === activePlayer &&
    board[2][0] === activePlayer
  ) {
    showWinner(players.indexOf(activePlayer)); 
  }

  if (activePlayer === 'x') {
    activePlayer = 'o';
  } else if (activePlayer === 'o') {
    activePlayer = 'x';
  }; 
};