import React, { Component } from 'react';

export default class MainPage extends Component{
    state={
        rank: "COnquereR",
    }
    render(){
        return (
            <React.Fragment>
                <h2>The Quiz game</h2>
                <img alt="class icon" src="https://d3dxqwkfasz293.cloudfront.net/images/icons/tier/Rank_Icon_07_master.png" width="30%"/>
                <p>{this.state.rank.toUpperCase()}</p>
                <p>Elixir bar here</p>
                <button onClick={()=>this.props.changeScreen(1)} id="playBtn">Play</button>
                <h4 style={{textAlign:'left',marginLeft:'10%'}}>CURRENT MATCHES</h4>
                <img alt="img here" className="currentMatches" src="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-1/44117066_381152642424610_5999007953078714368_n.jpg?_nc_cat=107&_nc_ht=scontent.fhel1-1.fna&oh=f88b956ad575a0c2aa08cffb98371c4b&oe=5D1C63B8"/>
                <img alt="img here" className="currentMatches" src="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/49303406_2220746707944037_8672226551938416640_n.jpg?_nc_cat=104&_nc_ht=scontent.fhel1-1.fna&oh=ec55dd6e921c8aa81d2f6afad6ad9b9e&oe=5CDDC46C"/>
                <img alt="img here" className="currentMatches" src="https://scontent.fhel1-1.fna.fbcdn.net/v/t1.0-9/19875451_749369131890530_5986447560579883660_n.jpg?_nc_cat=105&_nc_ht=scontent.fhel1-1.fna&oh=0c2398a709800a9d34638a98b0c396c2&oe=5D1FF671"/>
                <h4 style={{textAlign:'left',marginLeft:'10%'}}>LEADERBOARD</h4>
            </React.Fragment>
        );
    }
}