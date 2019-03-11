export default class Round{
    constructor(topic, question, ...options){
        this.topic = topic;
        this.question = question;
        this.options = options;
        this.answer = this.options[0];
    }
}