import React, { Component } from 'react';

class Todo extends Component {
    render() {
        return(
                <p onClick={() => this.props.toggleItem(this.props.todo.id)} className={this.props.todo.completed ? 'completed' : ''}>{this.props.todo.task}</p>
        )
    }
}

export default Todo;