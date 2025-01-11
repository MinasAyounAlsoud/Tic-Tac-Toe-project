import { question } from "readline-sync";
import chalk from "chalk";

class TicTacToe {
  constructor() {
    this.board = [
      [" ", " ", " "],
      [" ", " ", " "],
      [" ", " ", " "],
    ];
    this.currentPlayer = "X";
  }

  printBoard() {
    console.log(chalk.red("   0   1   2"));
    for (let i = 0; i < 3; i++) {
      console.log(chalk.red(i) + "  " + this.board[i].join(" | "));
      if (i < 2) console.log("   ----------");
    }
    console.log("\n");
  }

  checkWin(player) {
    // Check rows
    for (let i = 0; i < 3; i++) {
      if (
        this.board[i][0] === player &&
        this.board[i][1] === player &&
        this.board[i][2] === player
      )
        return true;
    }
    // Check columns
    for (let i = 0; i < 3; i++) {
      if (
        this.board[0][i] === player &&
        this.board[1][i] === player &&
        this.board[2][i] === player
      )
        return true;
    }
    // Check diagonals
    if (
      this.board[0][0] === player &&
      this.board[1][1] === player &&
      this.board[2][2] === player
    )
      return true;
    if (
      this.board[0][2] === player &&
      this.board[1][1] === player &&
      this.board[2][0] === player
    )
      return true;

    return false;
  }

  checkDraw() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (this.board[i][j] === " ") return false;
      }
    }
    return true;
  }

  askForMove() {
    this.printBoard();
    const answer = question(
      `Spieler ${this.currentPlayer}, dein Zug (Reihe Spalte): `
    );
    const [row, col] = answer.split(" ").map(Number);

    if (
      row >= 0 &&
      row < 3 &&
      col >= 0 &&
      col < 3 &&
      this.board[row][col] === " "
    ) {
      this.board[row][col] = this.currentPlayer;
      if (this.checkWin(this.currentPlayer)) {
        this.printBoard();
        console.log(
          chalk.green(
            `Herzlichen Glückwunsch, Spieler ${this.currentPlayer} hat gewonnen!`
          )
        );
      } else if (this.checkDraw()) {
        this.printBoard();
        console.log(chalk.yellow("Unentschieden!"));
      } else {
        this.currentPlayer = this.currentPlayer === "X" ? "O" : "X";
        this.askForMove();
      }
    } else {
      console.log(chalk.cyan("Ungültiger Zug, versuche es nochmal."));
      this.askForMove();
    }
  }

  startGame() {
    console.log(chalk.blue(" \n             Willkommen zu Tic-Tac-Toe!  \n"));
    this.askForMove();
  }
}

const game = new TicTacToe();
game.startGame();
