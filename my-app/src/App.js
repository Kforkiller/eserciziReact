import React from "react";
import TodoList from "./TodoList";

export default class App extends React.Component {
  createItems = (items, noCallback) => {
    console.log(items);
    return items.map((item, index) => {
      return (
        <li key={index}>
          {item}
          <button
            onClick={() => {
              noCallback(index);
            }}>
            Remove
          </button>
        </li>
      );
    });
  };
  render() {
    return (
      <div>
        <TodoList render={this.createItems} />
      </div>
    );
  }
}
