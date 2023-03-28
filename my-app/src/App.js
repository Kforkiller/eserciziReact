import React from "react";
import { ClickerCounter } from "./ClickerCounter";

export default class App extends React.Component {

  render() {
    return (
    <div>
        <ClickerCounter onClickChange={(click) => console.log("Hai cliccato-"+ click + "-volte")}/>
    </div>
    )
  }
}
