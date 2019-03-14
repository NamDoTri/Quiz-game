import React, { Component } from "react";
class MatchResult extends Component {
  state = {
    match: this.props.currentMatch,
  };
  render() {
    return (
      <React.Fragment>
        <h2>VS {this.state.match.opponent}</h2>
        <button onClick={()=>this.props.changeScreen(2)}>Play</button>
        <button onClick={()=>this.props.changeScreen(0)} >Back</button>
      </React.Fragment>
    );
  }
}

export default MatchResult;
