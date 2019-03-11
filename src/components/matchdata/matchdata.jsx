import React, { Component } from "react";
class MatchData extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        This is the match data
        <button onClick={()=>this.props.changeScreen(2)}>Change</button>
      </React.Fragment>
    );
  }
}

export default MatchData;
