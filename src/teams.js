//Every team has the following main characteristics
/*
1. Team Dice 
2. Team Start 
3. Team End 
4. Team pawns
*/
class Team {
  constructor(dice, start, end, pawns) {
    this.dice = dice;
    this.start = start;
    this.end = end;
    this.pawns = pawns;
  }
   // Needed methods : 
   // 1. method to start play 
   // 2. method to eat 
   // 3. Method to get the pawn out of prison 
   // 4. method to get the player get Started 
   // 5. Method to finish the game . 
}
// The red team
const redDice = document.getElementById("redDice");
const redEye = document.getElementById("redEye");
const redEnd = document.getElementById("redEnd");
const redPawns = document.querySelectorAll(".redPawn");
const redTeam = new Team(redDice, redEye, redEnd, redPawns);

// The green Team

const greenDice = document.getElementById("redDice");
const greenEye = document.getElementById("greenEye");
const greenEnd = document.getElementById("greenEnd");
const greenPawns = document.querySelectorAll(".greenPawn");
const greenTeam = new Team(greenDice, greenEye, greenEnd, greenPawns);

// The blue Team
const blueDice = document.getElementById("blueDice");
const blueEye = document.getElementById("blueEye");
const blueEnd = document.getElementById("blueEnd");
const bluePawns = document.querySelectorAll(".bluePawn");
const blueTeam = new Team(blueDice, blueEye, blueEnd, bluePawns);

//The Yellow Team
const yellowDice = document.getElementById("yellowDice");
const yellowEye = document.getElementById("yellowEye");
const yellowEnd = document.getElementById("yellowEnd");
const yellowPawns = document.querySelectorAll(".yellowPawn");
const yellowTeam = new Team(yellowDice, yellowEye, yellowEnd, yellowPawns);
