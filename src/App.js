import React, { Component } from 'react';
import './App.css';
import TaskList from './components/taskList/tasklist-component';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

library.add(faTrash);


class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      taskList : [],
      currentTask : {
        task : '',
        key : ''
      }
    }
    this.handleInput = this.handleInput.bind(this);
    this.addTask = this.addTask.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.editTask = this.editTask.bind(this);
  }

handleInput = e => {
  this.setState({
    currentTask : {
      text: e.target.value,
      key: Date.now()
    }
  })
}

addTask = (e) => {
  e.preventDefault();
  const newTask = this.state.currentTask;  
  if(newTask.text!== ''){
    const newTasks = [...this.state.taskList, newTask];    
    this.setState({
      taskList: newTasks,
      currentTask: {
        text : '',
        key : ''
      }
    })    
  }  
}

deleteTask = (key) => {
   const filterTasks = this.state.taskList.filter( item => item.key!==key);
   this.setState({
     taskList: filterTasks
   })
}

editTask = (text, key) => {
  const items = this.state.taskList;
  items.map(item => {
    if(item.key === key){
      item.text=text;
    }    
  })
  this.setState({
    taskList:items
  })
}


  render(){
    return (
      <div className='App'>
        <header>
          <form id='my-form' onSubmit={this.addTask}>
            <input type='text' placeholder='Enter task' value={this.state.currentTask.text} onChange={this.handleInput}></input>
            <button type='submit' >Add</button>
          </form>
        </header>
        <TaskList taskList={this.state.taskList}  deleteTask={this.deleteTask} editTask={this.editTask}/>
      </div>
    );
  }
}

export default App;
