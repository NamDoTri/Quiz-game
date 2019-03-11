import React, { Component } from 'react';

export default class MainPage extends Component{
    render(){
        return (
            <React.Fragment>
                <h2>The Quiz game</h2>
                <img alt="class icon"/>
                <p>PROFILE CLASS</p>
                <p>Elixir bar here</p>
                <button onClick={()=>this.props.changeScreen(1)}>Play</button>
                <h4>CURRENT MATCHES</h4>
                <img alt="img here" className="currentMatches"/>
                <img alt="img here" className="currentMatches"/>
                <img alt="img here" className="currentMatches"/>
                <h4>LEADERBOARD</h4>
            </React.Fragment>
        );
    }
}