import React from "react";
import ClickerCounter from "./ClickerCounter";
import { Counter } from "./Counter";
import { Hello }  from "./Hello"
import { Welcome } from "./Welcome";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="44" />
                <Counter initialValue = {10} incrementInterval = {10000} incrementAmount = {50} />
                <ClickerCounter/>
            </div>
        )
    }
}