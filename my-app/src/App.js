import React from "react";
import { GitHubUser } from "./GitHubUser";
import { GitHubUserList } from "./GitHubUserList";

export default class App extends React.Component {

  render() {
    return (
    <div>
        <GitHubUserList/>
        <GitHubUser username="Kforkiller"/>
    </div>
    )
  }
}
