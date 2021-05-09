import './App.css';
import React, { Component } from 'react';
import { /* BrowserRouter as Router, */ Route, HashRouter } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import { v4 as uuidv4 } from 'uuid';

class App extends Component {

  state = {
    todos: [
      {
        id: uuidv4(),
        title: 'complete smartoni guest api',
        completed: true
      },
      {
        id: uuidv4(),
        title: 'doctor appoinment',
        completed: false
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
    if (title) {
      let newTodo = {
        id: uuidv4(),
        title,
        completed: false
      }
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  }


  render() {
    //console.log(this.state.todos);
    return (
      <HashRouter basename='/'>
          <div className="App">
            <div className="container">
              <Header />
              <Route exact path="/" render={props => (
                <React.Fragment>
                  <AddTodo addTodo={this.addTodo} />
                  <Todos todos={this.state.todos}  markComplete={this.markComplete} deleteTodo={this.deleteTodo}/>
                </React.Fragment>
              )} />
              <Route exact path="/about" component={About} />
            </div>
          </div>
      </HashRouter>
    );
  }
}

export default App;