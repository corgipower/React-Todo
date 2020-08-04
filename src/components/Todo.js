import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <p>Todo</p>
            {props.taskArr.map(tasks => ( 
                <p key={tasks.id} 
                   onClick={() => props.toggle(tasks.id)}>{tasks.task}</p>
            ))}
            <form onSubmit={props.removeCompleted}>
                <button type='submit'>Clear completed</button>
            </form>
        </div>
    )
}

export default Todo;