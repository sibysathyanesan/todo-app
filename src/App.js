import './App.css';
import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';

class App extends Component {

  state = {
    todos: []
  }

  componentDidMount() {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({todos: res.data}))
  }

  // Toggle complete
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
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id }`)
      .then(res => this.setState({ todos: [...this.state.todos.filter( todo => todo.id !== id )] }))
  }

  // Add todo
  addTodo = (title) => {
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false
    })
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }))
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