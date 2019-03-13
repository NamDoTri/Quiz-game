import Question from './question';

export default class Round {
  constructor(topic, numOfQs, currentTurn) {
    let data = require('../../currentMatch.json');
    
    this.topic = topic;
    this.numberOfQuestions = numOfQs;
    this.questions=[];
    for(let i = 0; i<this.numberOfQuestions;i++){
        let qData = data['round1'][i];
        this.questions.push( new Question(qData['question'], qData['correctAnswer'], [qData['option1'], qData['option2'],qData['option3'], qData['option4'] ]));
    }
    this.currentTurn = currentTurn;
  }
  setCurrentTurn = playerName => (this.currentTurn = playerName);
  getCurrentTurn = () => this.currentTurn;
}
