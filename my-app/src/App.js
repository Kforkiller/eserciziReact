import React from "react";
import ClickerCounter from "./ClickerCounter";
import { Counter } from "./Counter";
import { Hello }  from "./Hello"
import { InteractiveWelcome } from "./InteractiveWelcome";
import { Login } from "./Login";
import { Welcome } from "./Welcome";

export default class App extends React.Component{
    onlogin(state){
        console.log(state)
    }
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="44" />
                <Counter initialValue = {10} incrementInterval = {10000} incrementAmount = {50} />
                <ClickerCounter/>
                <Login onlogin={this.onlogin}/>
            </div>
        )
    }
}