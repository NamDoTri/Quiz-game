import React, { Component } from "react";

class Gameplay extends Component {
  state = {
    result:{
      you:0,
      opponent:0,
    },
    rounds: this.props.currentMatch.matchData.rounds,
    currentRound: 0,
    currentQ: 0,
  };
  validateAnswer = e => {
    alert(e.target.textContent == this.state.rounds[this.state.currentRound].questions[this.state.currentQ].answer ? 'Correct' : "Incorrect");
    let currentQ = this.state.currentQ;
    currentQ++;
    this.setState({currentQ});
  }
  buttonRenderer = idButton => {
    return this.state.rounds[this.state.currentRound].questions[this.state.currentQ].options[idButton];
  }
  render() {
    return (

      <React.Fragment>
        <img alt={this.state.rounds[this.state.currentRound].topic + " icon"} id="categoryIcon"/>
        <div id="gameQuestion" >{this.state.rounds[this.state.currentRound].questions[this.state.currentQ].question}</div>
        <button className="gameOptions" onClick={this.validateAnswer}> {this.buttonRenderer(0)} </button>
        <button className="gameOptions" onClick={this.validateAnswer}> {this.buttonRenderer(1)} </button><br></br>
        <button className="gameOptions" onClick={this.validateAnswer}> {this.buttonRenderer(2)} </button>
        <button className="gameOptions" onClick={this.validateAnswer}> {this.buttonRenderer(3)} </button><br></br>
        <button onClick={()=>this.props.changeScreen(0)}>Change</button>
      </React.Fragment>
    );
  }
}
// look for how to change props of button component
export default Gameplay;
