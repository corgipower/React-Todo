// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo'

const TodoList = (props) => {
    return (
        <div>
            <p>TodoList</p>
            <TodoForm task={props.task} change={props.change} submit={props.submit} />
            <Todo taskArr={props.taskArr} task={props.task} id={props.id} doubleClick={props.doubleClick} />
        </div>
    )
}

export default TodoList;