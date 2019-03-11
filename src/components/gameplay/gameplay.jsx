import React, { Component } from "react";
class Gameplay extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        This is the gameplay{" "}
        <button onClick={()=>this.props.changeScreen(0)}>Change</button>
      </React.Fragment>
    );
  }
}

export default Gameplay;
