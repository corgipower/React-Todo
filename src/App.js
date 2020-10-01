import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import './components/Todo.css'

const todos = [
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todos,
    }
  }

  addTodo = (todoName) => {
   // e.preventDefault();
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false,
    }
    this.setState({
      ...this.state,
      todos: [...this.state.todos, newTodo],
    })
  }

  toggleItem = itemId => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(itemId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed,
          }
        }
        return todo;
      })
    })
  }

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todos: this.state.todos.filter(todo => !todo.completed),
    })
  }

  render() {
    return (
      <div>
        <TodoForm addTodo={this.addTodo} clearCompleted={this.clearCompleted} />
        <TodoList todos={this.state.todos} toggleItem={this.toggleItem} />
      </div>
    );
  }
}

export default App;
