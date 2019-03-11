import React, { Component } from 'react';

export default class MainPage extends Component{
    render(){
        return (
            <React.Fragment>
                <h2>The Quiz game</h2>
                <button onClick={()=>this.props.changeScreen(1)}>Change</button>
            </React.Fragment>
        );
    }
}