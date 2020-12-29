import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <h1>Todo Manager</h1>
        <AddTodo />
        <Todos />
      </Router>
    )
  }
}

export default App;
