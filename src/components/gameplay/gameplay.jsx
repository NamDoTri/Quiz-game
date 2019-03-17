import React, { Component } from "react";

export default class Gameplay extends Component {
  state = {
    result: {
      you: 0,
      opponent: 0
    },
    rounds: this.props.currentMatch.matchData.rounds,
    currentRound: 0,
    currentQ: 0
  };
  validateAnswer = e => {
    console.log(
      e.currentTarget.textContent.trim().localeCompare(
          this.state.rounds[this.state.currentRound].questions[this.state.currentQ].answer
        ) === 0
        ? "Correct"
        : "Incorrect"
    );
    let currentQ = this.state.currentQ;
    currentQ++;
    if (
      currentQ < this.state.rounds[this.state.currentRound].questions.length
    ) {
      this.setState({ currentQ: currentQ });
    } else {
      let currentRound = this.state.currentRound;
      currentRound++;
      if (currentRound < this.state.rounds.length) {
        this.setState({ currentRound: currentRound });
        this.setState({ currentQ: 0 });
      } else {
        this.props.changeScreen(1);
      }
    }
  };
  buttonRenderer = idButton => {
    return this.state.rounds[this.state.currentRound].questions[
      this.state.currentQ
    ].options[idButton];
  };
  render() {
    return (
      <React.Fragment>
        <img
          alt={this.state.rounds[this.state.currentRound].topic + " icon"}
          id="categoryIcon"
        />
        <div id="gameQuestion">
          {
            this.state.rounds[this.state.currentRound].questions[
              this.state.currentQ
            ].question
          }
        </div>
        <button className="gameOptions" onClick={this.validateAnswer}>
          {" "}
          {this.buttonRenderer(0)}{" "}
        </button>
        <button className="gameOptions" onClick={this.validateAnswer}>
          {" "}
          {this.buttonRenderer(1)}{" "}
        </button>
        <br />
        <button className="gameOptions" onClick={this.validateAnswer}>
          {" "}
          {this.buttonRenderer(2)}{" "}
        </button>
        <button className="gameOptions" onClick={this.validateAnswer}>
          {" "}
          {this.buttonRenderer(3)}{" "}
        </button>
        <br />
        <button onClick={() => this.props.changeScreen(0)}>Change</button>
      </React.Fragment>
    );
  }
}
