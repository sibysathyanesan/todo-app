import './App.css';
import React, { Component } from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'complete smartoni guest api',
        completed: false
      },
      {
        id: uuidv4(),
        title: 'doctor appoinment',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'meeting with client',
        completed: false
      }
    ]
  }

  markComplete = (id) => {
    this.setState({ todos: this.state.todos.map( todo => {
      if (todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
    });
  }

  // Delete todo
  deleteTodo = (id) => {
    /* this.setState({ todos: this.state.todos.filter( todo => {
      return todo.id !== id;
      })
    }); */
    this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )] }); 
  }

  // Add todo
  addTodo = (title) => {
    let newTodo = {
      id: uuidv4(),
      title,
      completed: false
    }
    this.setState({ todos: [...this.state.todos, newTodo] });
  }


  render() {
    //console.log(this.state.todos);
      return (
          <div className="App">
            <div className="container">
              <Header />
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos}  markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
            </div>
          </div>
      );
  }



}

export default App;