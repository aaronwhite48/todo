import React, { Component } from 'react';
import '../App.css';

export class TodoItem extends Component {

    render() {
        return (
            <div id="todoitem">
                <p>{this.props.title}</p>
                <button type="submit">&#10003;</button>
                <button type="reset">X</button>
            </div>
        )
    }
}

export default TodoItem
