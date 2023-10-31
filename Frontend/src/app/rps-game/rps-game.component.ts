import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.css']
})
export class RpsGameComponent {

  playerScore: number = 0;
  computerScore: number = 0;

  constructor(private http: HttpClient) {}

getComputerSelection() {
  let picks = ["rock", "paper", "scissors"];
    const computerChoice = picks[Math.floor(Math.random() * picks.length)];
    return(computerChoice);
}

clickedRock() {
  const playerSelection = "rock";
  const computerSelection = this.getComputerSelection();

  if (computerSelection == "rock") {
    alertifyjs.warning("That was a tie!")
  } else if (computerSelection == "paper") {
    alertifyjs.error("You lost! :(")
    this.computerScore = ++this.computerScore;
  } else {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
  }
}

clickedPaper() {
  const playerSelection = "rock";
  const computerSelection = this.getComputerSelection();

  if (computerSelection == "rock") {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
  } else if (computerSelection == "paper") {
    alertifyjs.warning("That was a tie!")
  } else {
    alertifyjs.error("You lost! :(")
    this.computerScore = ++this.computerScore;
  }
}

clickedScissors() {
  const playerSelection = "rock";
  const computerSelection = this.getComputerSelection();

  if (computerSelection == "rock") {
    alertifyjs.error("You lost! :(")
    this.computerScore = ++this.computerScore;
  } else if (computerSelection == "paper") {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
  } else {
    alertifyjs.warning("That was a tie!")
  }
}
}
