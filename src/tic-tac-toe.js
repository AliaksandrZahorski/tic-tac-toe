class TicTacToe {
    constructor() {
      this.activePlayer = "x";
      this.winner = null;
      this.moves = Array(9).fill(null);;
      this.winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [6,4,2],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8]
      ];
    }

    _toIndex(rowIndex, columnIndex) {
      return rowIndex + 3 * columnIndex;
    }

    _changePlayer() {
      this.activePlayer = this.activePlayer === "x" ? "o" : "x";
    }

    getCurrentPlayerSymbol() {
      return this.activePlayer;
    }

    nextTurn(rowIndex, columnIndex) {
      if (!this.getFieldValue(rowIndex, columnIndex)) {
        this.moves[this._toIndex(rowIndex, columnIndex)] = this.activePlayer;
        this.isFinished();
        this._changePlayer();
      }
    }

    isFinished() {
      for (let i = 0; i < this.winningCombinations.length; i++) {
        if (this.moves[this.winningCombinations[i][0]] == this.activePlayer &&
           this.moves[this.winningCombinations[i][1]] == this.activePlayer &&
           this.moves[this.winningCombinations[i][2]] == this.activePlayer) {
             this.winner = this.activePlayer;
             return true;
        }
      }
      return false;
    }

    getWinner() {
      return this.winner;
    }

    noMoreTurns() {
      for (let i = 0; i < 9; i++) {
        if (!this.moves[i]) {
          return false
        }
      }
      return true;
    }

    isDraw() {
      if( this.noMoreTurns() && !this.getWinner()) {
        return true;
      } else {
        return false;
      }
    }

    getFieldValue(rowIndex, colIndex) {
      return this.moves[this._toIndex(rowIndex, colIndex)];
    }
}

module.exports = TicTacToe;
