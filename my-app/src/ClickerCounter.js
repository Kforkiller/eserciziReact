import React from "react";

export default class ClickerCounter extends React.Component{
    state = {
        TargetButton: ""
    }
    Targeting = (event) => {
        this.setState({
                TargetButton: event.target.textContent
        })
    }
    render(){
        return (
            <div>
            <button onClick={this.Targeting}>Bottone numero 1</button>
            <button onClick={this.Targeting}>Bottone numero 2</button>
            <button onClick={this.Targeting}>Bottone numero 3</button>
            <h1>Il bottone cliccato è il : {this.state.TargetButton}.</h1>
            </div>
        )
    }
}