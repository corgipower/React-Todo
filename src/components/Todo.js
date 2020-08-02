import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <p>Todo</p>
            {props.taskArr.map(tasks => ( 
                <p key={tasks.id} onDoubleClick={props.doubleClick}>{tasks.task}</p>
            ))}
        </div>
    )
}

export default Todo;