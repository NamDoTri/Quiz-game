import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/mainpage/mainpage";
import MatchData from "./components/matchdata/matchdata";
import Gameplay from "./components/gameplay/gameplay";

class App extends Component {
  state = {
    screens: ["main", "match result", "gameplay"],
    currentScreen: 0
  };

  changeScreen = screenIndex=>{
    console.log('screen changed');
    let currentScreen = screenIndex;
    this.setState({currentScreen : currentScreen})
  }
  render() {
    return (
      <React.Fragment>
        {this.state.currentScreen == 0 ? (
          <MainPage changeScreen={this.changeScreen}/>
        ) : this.state.currentScreen == 1 ? (
          <MatchData changeScreen={this.changeScreen}/>
        ) : (
          <Gameplay changeScreen={this.changeScreen}/>
        )}
      </React.Fragment>
    );
  }
}

export default App;
