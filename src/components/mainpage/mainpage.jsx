import React, { Component } from 'react';

export default class MainPage extends Component{
    state={
        rank: "COnquereR",
        matches: this.props.matches,
    }
    enterMatch(index){
        this.props.openMatch(index)
    }
    render(){
        return (
            <React.Fragment>
                <h2>CWEEEEZY</h2>
                <img alt="class icon" src="https://d3dxqwkfasz293.cloudfront.net/images/icons/tier/Rank_Icon_07_master.png" width="30%"/>
                <p>{this.state.rank.toUpperCase()}</p>
                <p id="eliBar">2500/3000</p>
                <button onClick={()=>alert('this opens up a list of friends')} id="playBtn">NEW MATCH!</button>
                <h4 style={{textAlign:'left',marginLeft:'10%'}}>CURRENT MATCHES</h4>
                <img alt="img here" className="currentMatches" onClick={()=>this.enterMatch(0)}/>
                <img alt="img here" className="currentMatches" onClick={()=>this.enterMatch(1)}/>
                <img alt="img here" className="currentMatches" onClick={()=>this.enterMatch(2)}/>
                <h4 style={{textAlign:'left',marginLeft:'10%'}}>LEADERBOARD</h4>
            </React.Fragment>
        );
    }
}