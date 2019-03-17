import Question from './question';

export default class Round {
  constructor(topic, numOfQs, currentTurn, roundData) {
    let data = roundData;    
    this.topic = topic;
    this.numberOfQuestions = numOfQs;
    this.questions=[];
    //console.log(data.questions[0])
    for(let i = 0; i<this.numberOfQuestions;i++){
        let qData = data.questions[i];
        this.questions.push( new Question(qData['question'], qData['correctAnswer'], [qData['option1'], qData['option2'],qData['option3']]));
;      }
    this.currentTurn = currentTurn;
  }
  setCurrentTurn = playerName => (this.currentTurn = playerName);
  getCurrentTurn = () => this.currentTurn;
}
