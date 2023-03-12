import React from "react";
import { Welcome } from "./Welcome"
export class InteractiveWelcome extends React.Component{
    state = {
        name: ""
    }
    ChangingEvent = (event) => {
        const name = event.target.name
        const value = event.target.value
        const type = event.target.type
        const checked = event.target.checked
        this.setState({
            [name]: type === `checkbox` ? checked : value
    })
}
    componentDidUpdate(){
        console.log(this.state)
    }
    render(){
        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.ChangingEvent}/>
                <input type="password" name="password" value={this.state.password} onChange={this.ChangingEvent}/>
                <input type="checkbox" name="checkbox" checked={this.state.checked} onChange={this.ChangingEvent}/>
                <Welcome name={this.state.name} age="45" />
            </div>
        )
    }
}