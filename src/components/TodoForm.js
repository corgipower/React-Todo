import React from 'react';

class TodoForm extends React.Component {
    constructor(){
        super();
        this.state={
            task: ''
        }
    }

     submitForm = (e) => {
        e.preventDefault();
        this.props.submit(this.state.task)

        this.setState({
            task: '',
        });
    }

    render(){
        return(
            <div>
                <form onSubmit={this.submitForm}>
                    <input type='text' name='task' value={this.state.task} onChange={(e) => this.setState({task: e.target.value})} />
                    <button type='submit'>Submit</button>
                    <button onClick={this.props.removeCompleted}>Clear completed</button>
                </form>
            </div>
            )
    }
}

export default TodoForm;