import React, { Component } from 'react';
import './styles/App.css';
import Input from './components/input.jsx'
import TodoList from './components/todoList.jsx'
import AccomplishedList from './components/accomplishedList'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: {},
      undoneCount: 0,
      doneCount: 0,
    }
    this.handleNewTask = this.handleNewTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
  }

  handleNewTask(task) {
    if(task === '') {
      alert('cannot submit an empty task')
    } else if(this.state.tasks[task] === undefined) {
      this.state.tasks[task] = 'undone'
      this.setState({undoneCount: this.state.undoneCount+=1})
      this.setState({newTask : task})
    } else if (this.state.tasks[task] === 'done'){
      alert('you already accomplished \'' + task + '\' today')      
    } else {
      alert('you already have \'' + task + '\' on your to do list')
    }
  }

  deleteTask(taskName) {
    this.state.tasks[taskName] = 'done'
    this.setState({undoneCount : this.state.undoneCount-=1})
    this.setState({doneCount : this.state.doneCount+=1})
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Todo-List</h1>
        </header>
        <Input handleNewTask={this.handleNewTask}/>
        { this.state.undoneCount > 0 ?
        <TodoList 
          undoneCount={this.state.undoneCount}
          tasks={this.state.tasks}
          deleteTask={this.deleteTask}
        /> : 
        null }

        {this.state.doneCount > 0 ? 
        <AccomplishedList
          tasks={this.state.tasks}
          doneCount={this.state.doneCount}
        /> :
        null }
      </div>
    );
  }
}

