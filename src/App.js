import React from 'react';
import TodoList from './components/TodoList'
import TodoForm from './components/TodoForm';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      taskArr: [{
        task: '',
        id: '',
        completed: false,
      }],
      
    };
  }

  toggle = id => {
    this.setState({
      taskArr: this.state.taskArr.map(item => {
        if(id === item.id) {
          return {
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    })
  }

  removeCompleted = event => {
    event.preventDefault();
    this.setState({
      taskArr: this.state.taskArr.filter(item => item.completed === false)
    })
  }

  changeHandler = event => {
    const date = Date.now();
    this.setState({task: event.target.value,
                  id: date});
  }

  submitHandler = (task) => {
    this.setState({
      taskArr: [
        ...this.state.taskArr,
        {
        task: task,
        id: Date.now(),
        completed: false
        }]
    });
  }

  render() {
    return (
      <div className='wrapper'>
        <h2>Welcome to your Todo App!</h2>
        <TodoForm submit={this.submitHandler} 
                  removeCompleted={this.removeCompleted} />
        <TodoList taskArr={this.state.taskArr} 
                  toggle={this.toggle} />
      </div>
    );
  }
}

export default App;
