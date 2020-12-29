import React, { Component } from 'react';
import '../App.css';

export class AddTodo extends Component {
    render() {
        return (
            <div id="addtodoitem">
                <input type="text" placeholder="Add a todo item..."></input>
                <button type="submit">Add</button>
            </div>
        )
    }
}

export default AddTodo
