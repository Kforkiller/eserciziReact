import React from "react";
export class Login extends React.Component{
    state = {
        name: "",
        password: "",
        checkbox: false    
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
/*     componentDidUpdate(){
        console.log(this.state)
    } */
    buttonCheck = () =>{
        return !(this.state.name && this.state.password)
    }
    render(){
        return (
            <div>
                <input type="text" name="name" value={this.state.name} onChange={this.ChangingEvent}/>
                <input type="password" name="password" value={this.state.password} onChange={this.ChangingEvent}/>
                <input type="checkbox" name="checkbox" checked={this.state.checked} onChange={this.ChangingEvent}/>
                <button disabled={this.buttonCheck()} onClick={(event) => {event.preventDefault()
                this.props.onlogin(this.state)}}>Login</button>
            </div>
        )
    }
}