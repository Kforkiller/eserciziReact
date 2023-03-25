import React from "react"

export default class TodoList extends React.Component{
    _input = React.createRef()
    state = {
        items: [
            "Pulire casa",
            "Fare benzina",
            "Fare esercizi Develhope"
        ]
    }

    handleAdd = () => {
        this.setState((state) => {
            return {
                items: [...state.items, this._input.current.value]
            }
        })
    }

    render(){
        return (
            <div>
                <ul>
                    {this.state.items.map((item, index) => {
                        return <li key={index}>{item}</li>
                    })}
                </ul>
                <input ref={this._input} type="text" />
                <button onClick={this.handleAdd}>Add item</button>
            </div>
        )
    }
}