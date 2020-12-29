import React, { Component } from 'react';
import TodoItem from './TodoItem';
import Data from '../data/data.json';

export class Todos extends Component {
    render() {
        return Data.map((item) => (
            <TodoItem title={item.title} />
        ))
    }
}

export default Todos
