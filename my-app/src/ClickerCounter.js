import React from "react";

export default class ClickerCounter extends React.Component{
    state = {
        countclick: 0
    }
    Increment = () => {
        this.setState((state) => {
            return {
                countclick: state.countclick + 1
            }
        })
    }
    render(){
        return (
            <div>
            <button onClick={this.Increment}>Bottone</button>
            <h3>Il bottone è stato cliccato: {this.state.countclick} volte.</h3>
            </div>
        )
    }
}