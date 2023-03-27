import React from "react";
import Sum from "./Sum";
import { Welcome } from "./Welcome";

export default class App extends React.Component {

  render() {
    return (
    <div>
        <Sum/>
        <Welcome name= "Antonio"/>
    </div>
    )
  }
}
