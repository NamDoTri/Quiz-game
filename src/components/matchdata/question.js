export default class Question {
  constructor(question, answer, options) {
    this.question = question;
    this.answer = answer;
    this.options = Array(4).fill(null); //an array with 4 null elements
    this.options[Math.floor(Math.random() * options.length)] = this.answer; // this randomizes the position of correct answer
    for (let i = 0; i < this.options.length; i++) {
      if (this.options[i] == null) this.options[i] = options.splice(Math.floor(Math.random() * 3), 1)[0];
    }
  }
}