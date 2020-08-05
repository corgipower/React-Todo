import React from 'react';
import './Todo.css'

const Todo = (props) => {
    return(
        <div>
            {props.taskArr.map(tasks => ( 
                <p className={tasks.completed ? 'completed' : ''} 
                   key={tasks.id} 
                   onClick={() => props.toggle(tasks.id)}>{tasks.task}</p>
            ))}
        </div>
    )
}

export default Todo;