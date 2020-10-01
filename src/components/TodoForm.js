import React, { Component } from 'react';

class TodoForm extends Component {
    constructor() {
        super();
        this.state = {
            newTodo: '',
        }
    }

    changeHandler = e => {
        console.log('todoform', e.target.name, e.target.value);
        this.setState({
            ...this.state,
            [e.target.name]: e.target.value,
        })
    }

    submitHandler = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({
            ...this.state,
            newTodo: '',
        })
    }

    render() {
        return(
            <form onSubmit={this.submitHandler}>
                <input type='text' name='newTodo' value={this.state.newTodo} onChange={this.changeHandler} />
                <button type='submit'>Submit</button>
                <button onClick={this.props.clearCompleted}>Clear Completed</button>
            </form>
        )
    }
}

export default TodoForm;