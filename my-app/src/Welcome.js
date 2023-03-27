import React from "react";

export class Welcome extends React.Component{
    render(){
        return (
        <div className="welcome">
        <h2>Welcome, {this.props.name}!</h2>
        </div>
        )
    }
}