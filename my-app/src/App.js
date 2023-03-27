import React from "react";
import Sum from "./Sum";
import { Welcome } from "./Welcome";

export default class App extends React.Component {

  render() {
    return (
    <div>
        <Sum array = {[1,9,3,7,4,8,5,2,6,4,1]}/>
        <Welcome name= "Antonio"/>
    </div>
    )
  }
}
