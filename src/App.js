import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/mainpage/mainpage";
import MatchData from "./components/matchdata/matchdata";
import CurrentMatches from "./components/matchdata/currentMatches";
import Gameplay from "./components/gameplay/gameplay";
import Match from './components/matchdata/match'

class App extends Component {
  state = {
    currentScreen: 2,
    matches: [
      
    ]
  };

  changeScreen = screenIndex => {
    let currentScreen = screenIndex;
    this.setState({ currentScreen: currentScreen });
  };

  render() {
    //0: main page
    //1:Match result
    //2: Gameplay page
    //3: list of ongoing matches
    return (
      <React.Fragment>
        {this.state.currentScreen == 0 ? (
          <MainPage changeScreen={this.changeScreen} />
        ) : this.state.currentScreen == 1 ? (
          <MatchData changeScreen={this.changeScreen} />
        ) : this.state.currentScreen == 2 ? (
          <Gameplay changeScreen={this.changeScreen} />
        ) : (
          <CurrentMatches />
        )}
      </React.Fragment>
    );
  }
}

export default App;
