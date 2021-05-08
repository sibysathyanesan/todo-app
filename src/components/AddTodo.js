import React, { Component } from 'react'

export class AddTodo extends Component {
    
    state = {
        title: ''
    }

    handleOnChange = (e) => {
            // if state variable and input:type name are different 
            // this.setState({ title: e.target.value });

        // if state variable and input:type name are same 
        this.setState({ [e.target.name]: e.target.value });
    }

    handleOnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({ title: '' });
    }

    render() {
        return (
            <form style={{ display: 'flex' }}  onSubmit={this.handleOnSubmit} >
                <input type="text" name="title" placeholder="Add to do" style={{ flex: '10', padding: '6px'}} value={this.state.title} onChange={this.handleOnChange} />
                <input type="submit" value="Submit" style={{ flex:'2' }} className="btn"/>
            </form>
        )
    }
}

export default AddTodo;
