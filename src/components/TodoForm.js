import React from 'react';

const TodoForm = (props) => {
    return(
        <div>
            <p>TodoForm</p>
            <form onSubmit={props.submit}>
                <input type='text' name='task' value={props.task} onChange={props.change} />
                <button type='submit'>Submit</button>
            </form>
        </div>
        )
}

export default TodoForm;