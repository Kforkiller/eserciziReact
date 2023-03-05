import React from "react";
import { Hello }  from "./Hello"
import { Welcome } from "./Welcome";

export default class App extends React.Component{
    render(){
        return (
            <div>
                <Hello />
                <Welcome name ={<strong>Antonio</strong>} age="137"/>
            </div>
        )
    }
}