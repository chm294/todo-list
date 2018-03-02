import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/input.jsx'
import TodoList from './components/todoList.jsx'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {},
    }
    this.handleNewTask = this.handleNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleNewTask(task) {
    if(this.state.tasks[task] === undefined) {
      this.state.tasks[task] = 'undone'
      this.setState({newTask : task})
    } else {
      alert('you already have \'' + task + '\' on your to do list')
    }
  }

  deleteTask(taskName) {
    this.state.tasks[taskName] = 'done'
    this.forceUpdate()
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo-List</h1>
        </header>
        <Input handleNewTask={this.handleNewTask}/>
        <TodoList 
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        />
      </div>
    );
  }
}

