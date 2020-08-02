import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <p>Todo</p>
            <p key={props.id} onDoubleClick={props.doubleClick}>{props.task}</p>
        </div>
    )
}

export default Todo;