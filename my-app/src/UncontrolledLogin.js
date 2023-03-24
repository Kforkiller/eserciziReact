import React from "react";

export class UncontrolledLogin extends React.Component {
    HandleFormSumbit = (event) => {
        event.preventDefault()
        const username = event.target.elements.username.value
        const password = event.target.elements.password.value
        const remember = event.target.elements.remember.checked

        console.log({
            username,
            password,
            remember
        })
    }

    render() {
        return (
            <div>

                <h2>Uncontrolled form.</h2>

                <form onSubmit={this.HandleFormSumbit}>
                    <input name="username"/>
                    <input name="password" type="password"/>
                    <input name="remember" type="checkbox" />
                    <button type="submit">Submit</button>
                    <button type="reset">RESET</button>
                </form>
            </div>
        )
    }
}