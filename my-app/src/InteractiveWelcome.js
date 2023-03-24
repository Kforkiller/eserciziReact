import React from "react";
import { Welcome } from "./Welcome"
export class InteractiveWelcome extends React.Component{
    state = {
        name: ""
    }
    Changing = (event) => {
        this.setState((state) => {
            return {
                name: event.target.value
            }
        })
    }   

    render(){
        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.Changing}/>
                <Welcome name={this.state.name} age="21" />
            </div>
        )
    }
}