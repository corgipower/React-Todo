import React from 'react';

const Todo = (props) => {
    return(
        <div>
            <p>Todo</p>
            {props.taskArr.map(tasks => ( 
                <p style={{textDecoration: tasks.completed ? 'line-through' : 'none'}} 
                   key={tasks.id} 
                   onClick={() => props.toggle(tasks.id)}>{tasks.task}</p>
            ))}
        </div>
    )
}

export default Todo;