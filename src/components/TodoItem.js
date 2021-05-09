import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {

    getStyle = () => {
        return {
            backgroundColor: '#ffff3a73',
            padding: '15px',
            border: '1px solid #6f6f1e73',
            margin: '5px',
            borderRadius: '7px',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    render() {
        const {id, title, completed} = this.props.todo;
        return (
            <div /* style={this.getStyle()} */ className={completed ? 'todo-item strike' : 'todo-item'}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this, id)} defaultChecked={completed} /> {' '} { title }
                    <button style={btnStyle} onClick={this.props.deleteTodo.bind(this, id)}>X</button>
                </p>
            </div>
        )
    }
}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: '#ff0000',
    color: '#fff',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    float: 'right',
    cursor: 'pointer'
}

export default TodoItem;
