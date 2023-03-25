import React from "react";

export default class TodoList extends React.Component {
  _input = React.createRef();
  state = {
    items: ["Pulire casa", "Fare benzina", "Fare esercizi Develhope"],
  };

  handleAdd = () => {
    this.setState((state) => {
      const value = this._input.current.value;
      this._input.current.value = "";
      return {
        items: [...state.items, value],
      };
    });
  };

  handleReset = () => {
    this.setState({
      items: [],
    });
  };

 handleDelete = (index) => {
        this.setState((state) => {
            state.items.splice(index, 1)
            console.log(state)
            return {
                items: state.items
            }
        })
    }

  render() {
    return (
      <div>
        <ul>
          {this.state.items.map((item, index) => {
            return <li key={index}>{item}<button onClick={() => this.handleDelete(index)}>Delete</button></li>;
          })}
        </ul>
        <input ref={this._input} type="text" />
        <button onClick={this.handleAdd}>Add item</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
    );
  }
}
