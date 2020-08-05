import React from 'react';

const TodoForm = (props) => {
    return(
        <div>
            <form onSubmit={props.submit}>
                <input type='text' name='task' value={props.task} onChange={props.change} />
                <button type='submit'>Submit</button>
                <button onClick={props.removeCompleted}>Clear completed</button>
            </form>
        </div>
        )
}

export default TodoForm;