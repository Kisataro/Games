import { Component } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-ttt-game',
  templateUrl: './ttt-game.component.html',
  styleUrls: ['./ttt-game.component.css']
})
export class TttGameComponent {

  playerScore: number = 0;
  computerScore: number = 0;

  playerOverallScore: number = 0;
  computerOverallScore: number = 0;

  isPlayerTurn: boolean = true;
  isComputerTurn: boolean = false;
  isPlayerWinner: boolean = false;
  isComputerWinner: boolean = false;
  isTie: boolean = false;
  tracker: string[] = new Array(9).fill(null);
  isGameOver: boolean = false;

  tiles: Tile[] = [
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''},
    {text: '', cols: 1, rows: 1, color: ''}
  ];


  //checks for win condition (3 X / 3 O)
  checkIfWinner(): boolean {
    if (this.tracker[0] == this.tracker[1] && this.tracker[0] == this.tracker[2] && this.tracker[0] != null ||
        this.tracker[3] == this.tracker[4] && this.tracker[3] == this.tracker[5] && this.tracker[3] != null ||
        this.tracker[6] == this.tracker[7] && this.tracker[6] == this.tracker[8] && this.tracker[6] != null ||
        this.tracker[0] == this.tracker[3] && this.tracker[0] == this.tracker[6] && this.tracker[0] != null ||
        this.tracker[1] == this.tracker[4] && this.tracker[1] == this.tracker[7] && this.tracker[1] != null ||
        this.tracker[2] == this.tracker[5] && this.tracker[2] == this.tracker[8] && this.tracker[2] != null ||
        this.tracker[0] == this.tracker[4] && this.tracker[0] == this.tracker[8] && this.tracker[0] != null ||
        this.tracker[2] == this.tracker[4] && this.tracker[2] == this.tracker[6] && this.tracker[2] != null) {
      return true;
      this.isGameOver = true;
    }
    return false;
  }

  computerMove() {
    let availableMoves: number[] = [];

    for (let i = 0; i < this.tracker.length; i++) {
        if (this.tracker[i] === null) {
            availableMoves.push(i);
        }
    }

    if (availableMoves.length === 0) {
        this.isTie = true;
        alertifyjs.warning("That was a tie!")
    } else {
        let randomIndex = Math.floor(Math.random() * availableMoves.length);
        let moveIndex = availableMoves[randomIndex];
        this.tracker[moveIndex] = "O";
        this.tiles[moveIndex].text = "O";
        this.isPlayerTurn = true;
    }
  }

  playerMove(index: number) {
    if (this.tracker[index] == null && !this.isPlayerWinner && !this.isComputerWinner) {
      this.tracker[index] = 'X';
      this.tiles[index].text = 'X';
      this.isPlayerWinner = this.checkIfWinner();
      this.isPlayerTurn = false;

      if (!this.isPlayerWinner) {
        this.computerMove();
        this.isComputerWinner = this.checkIfWinner();
      }

      if (this.isPlayerWinner) {
        alertifyjs.success("You won! Yay!")
        this.playerScore = ++this.playerScore;
        this.playerOverallScore = ++this.playerOverallScore;
      }

      if (this.isComputerWinner) {
        alertifyjs.error("You lost! :(")
        this.computerScore = ++this.computerScore;
        this.computerOverallScore = ++this.computerOverallScore
      }
    }
  }

  startNewGame() {
    this.isPlayerWinner = false;
    this.isComputerWinner = false;
    this.isTie = false;
    this.isGameOver = false;
    this.tracker = new Array(9).fill(null);
    this.tiles.forEach(tile => {
    tile.text = '';
  });
  }
}
