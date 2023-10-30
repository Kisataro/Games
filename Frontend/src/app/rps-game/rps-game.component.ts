import { Component } from '@angular/core';
import * as alertifyjs from 'alertifyjs';

@Component({
  selector: 'app-rps-game',
  templateUrl: './rps-game.component.html',
  styleUrls: ['./rps-game.component.css']
})
export class RpsGameComponent {

  playerScore: number = 0;
  computerScore: number = 0;

  playerOverallScore!: number;
  computerOverallScore!: number;

  ngOnInit() {

  }

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
    this.computerOverallScore = ++this.computerOverallScore
  } else {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
    this.playerOverallScore = ++this.playerOverallScore
  }
}

clickedPaper() {
  const playerSelection = "rock";
  const computerSelection = this.getComputerSelection();

  if (computerSelection == "rock") {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
    this.playerOverallScore = ++this.playerOverallScore
  } else if (computerSelection == "paper") {
    alertifyjs.warning("That was a tie!")
  } else {
    alertifyjs.error("You lost! :(")
    this.computerScore = ++this.computerScore;
    this.computerOverallScore = ++this.computerOverallScore
  }
}

clickedScissors() {
  const playerSelection = "rock";
  const computerSelection = this.getComputerSelection();

  if (computerSelection == "rock") {
    alertifyjs.error("You lost! :(")
    this.computerScore = ++this.computerScore;
    this.computerOverallScore = ++this.computerOverallScore
  } else if (computerSelection == "paper") {
    alertifyjs.success("You won! Yay!")
    this.playerScore = ++this.playerScore;
    this.playerOverallScore = ++this.playerOverallScore
  } else {
    alertifyjs.warning("That was a tie!")
  }
}
}
