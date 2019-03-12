import React, { Component } from "react";
class Gameplay extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <img alt="topic icon"/>
        <div>What is your sexuality?</div>
        <button>Male</button>
        <button>Male</button>
        <button>Male</button>
        <button>Male</button>
        <button onClick={()=>this.props.changeScreen(0)}>Change</button>
      </React.Fragment>
    );
  }
}

export default Gameplay;
