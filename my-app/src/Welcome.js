import React from "react";
import Age from "./Age";

export class Welcome extends React.Component{
    render(){
        return (
        <div className="welcome">
        <h2>Welcome, {this.props.name}!</h2>
        <Age age={this.props.age}/>
        </div>
        )
    }
}