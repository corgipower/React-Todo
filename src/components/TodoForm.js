import React, {useState} from 'react';

const TodoForm = (props) => {
    const [task, setTask] = useState('');

    const submitForm = (e) => {
        e.preventDefault();
        props.submit(task)

        setTask('');
    }

    return(
        <div>
            <form onSubmit={submitForm}>
                <input type='text' name='task' value={task} onChange={(e) => setTask(e.target.value)} />
                <button type='submit'>Submit</button>
                <button onClick={props.removeCompleted}>Clear completed</button>
            </form>
        </div>
        )
}

export default TodoForm;