import React, { Component } from "react";
import Round from '../matchdata/round';
class Gameplay extends Component {
  state = {
    currentRound: new Round('Nature',3,'Nam'),
  };
  render() {
    return (
      <React.Fragment>
        <img alt="topic icon"/>
        <div>{this.state.currentRound.questions[0].question}</div>
        <button>{this.state.currentRound.questions[0].options[0]}</button>
        <button>{this.state.currentRound.questions[0].options[1]}</button><br></br>
        <button>{this.state.currentRound.questions[0].options[2]}</button>
        <button>{this.state.currentRound.questions[0].options[3]}</button><br></br>
        <button onClick={()=>this.props.changeScreen(0)}>Change</button>
      </React.Fragment>
    );
  }
}

export default Gameplay;
