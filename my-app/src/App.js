import React from "react";
import { Counter } from "./Counter";
import { Hello }  from "./Hello"
import { Welcome } from "./Welcome";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name="John" age="65"/>
                <Counter initialValue = {10} incrementInterval = {1000} incrementAmount = {50} />
            </div>
        )
    }
}