import React from 'react';
import TodoList from './components/TodoList'

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskArr: [],
      task: '',
      id: '',
      completed: false,
    };
  }

  doubleClickHandler = event => {
    event.preventDefault();
    this.setState({
      completed: !this.state.completed
    })

    this.state.completed === false ? event.target.style.textDecoration = 'line-through' : event.target.style.textDecoration = 'none';
  };

  changeHandler = event => {
    const date = Date.now();
    this.setState({task: event.target.value,
                  id: date});
  }

  submitHandler = event => {
    event.preventDefault();
    this.setState({
      taskArr: [
        ...this.state.taskArr,
        {
        task: this.state.task,
        id: this.state.id,
        completed: this.state.completed
        }]
    })
    this.setState({
      task: '',
    })
  }

  render() {
    return (
      <div>
        <h2>Welcome to your Todo App!</h2>
        <TodoList taskArr={this.state.taskArr} task={this.state.task} id={this.state.id} change={this.changeHandler} submit={this.submitHandler} doubleClick={this.doubleClickHandler} />
      </div>
    );
  }
}

export default App;
