import React, { Component } from "react";
import "./App.css";
import MainPage from "./components/mainpage/mainpage";
import MatchResult from "./components/matchdata/matchResult";
import CurrentMatches from "./components/matchdata/currentMatches";
import Gameplay from "./components/gameplay/gameplay";
import Match from './components/matchdata/match'

class App extends Component {
  state = {
    currentScreen: 0,
    matches: [
      new Match(Date.now(),"Dummy",10),
      new Match("yesterday","Dima",10),
      new Match("12 March","Dummy2",10),
    ],
    currentMatch: 0,
  };

  changeScreen = screenIndex => {
    //change current showing screen
    let currentScreen = screenIndex;
    this.setState({ currentScreen: currentScreen });
  };
  openMatch = index =>{
    //pass the index of that match here
    this.changeScreen(1);
    let currentMatch = index;
    this.setState({currentMatch})
  }
  createNewMatch = (numOfCate = 3, numOfQs = 1) =>{
    let getData = new XMLHttpRequest();
    getData.addEventListener('load', function(){
      let fetchedData = JSON.parse(this.response);
      let matchData = new Match(Date.now(), 'BLah', 19, fetchedData);
      console.log(matchData);
    })
    getData.open('GET', 'http://159.89.13.37:3000/gameplay/getCategoriesAndQuestions/'+numOfCate+'/'+numOfQs);
    getData.send();
  }
  render() {
    //0: main page
    //1:Match result
    //2: Gameplay page
    //3: list of ongoing matches
    return (
      <React.Fragment>
        {this.state.currentScreen == 0 ? (
          <MainPage changeScreen={this.changeScreen} createNewMatch={this.createNewMatch} matches={this.state.matches} openMatch={this.openMatch}/>
        ) : this.state.currentScreen == 1 ? (
          <MatchResult changeScreen={this.changeScreen} currentMatch={this.state.matches[this.state.currentMatch]}/>
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
