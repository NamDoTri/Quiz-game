import Round from "./round";

class Match {
  constructor(date, opponent, bounty,matchdata=[]) {
    //match data is a json file
    this.dateStarted = date;
    this.opponent = opponent;
    this.reward = bounty;
    this.currentRound = 0;
    this.roundData = matchdata;
    this.rounds = Array(this.roundData.length).fill(null);
    for (let i = 0; i < this.rounds.length; i++) {
      if (this.rounds[i] == null)
        this.rounds[i] = new Round(this.roundData[i].questions[0].categoryTitle, this.roundData[i].questions.length, 'you',this.roundData[i]);
    }
  }
  getDate = () => this.date;
  getOpponent = () => this.opponent;
  getReward = () => this.reward;

  setCurrentRound = index => (this.currentRound = index);
  getCurrentRound = () => this.currentRound;
  fillRounds = () => {
    
  };
}


export default Match;
