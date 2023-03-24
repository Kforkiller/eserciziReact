import React from "react";
import { UncontrolledLogin } from "./UncontrolledLogin";

export default class App extends React.Component{
    onlogin(state){
        console.log(state)
    }
    render(){
        return (
            <div>
                <UncontrolledLogin/>
            </div>
        )
    }
}