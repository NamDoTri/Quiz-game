import Round from "./round";

class Match {
  constructor(date, opponent, bounty) {
    this.dateStarted = date;
    this.opponent = opponent;
    this.reward = bounty;
    this.currentTurn = opponent;
    this.currentRound = 0;
    this.rounds = Array(5).fill(null);
  }
  getDate = () => this.date;
  getOpponent = () => this.opponent;
  getReward = () => this.reward;

  setCurrentTurn = playerName => (this.currentTurn = playerName);
  getCurrentTurn = () => this.currentTurn;

  setCurrentRound = index => (this.currentRound = index);
  getCurrentRound = () => this.currentRound;
  fillRounds = () => {
    for (let i = 0; i < this.rounds.length; i++) {
      if (this.rounds[i] == null)
        this.rounds[i] = new Round("Sexuality", "What is your sexuality?", [
          "male",
          "female",
          "N/A",
          "Prabhjot"
        ]);
    }
  };
}

export default Match;
