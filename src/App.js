import React from "react";

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Form from "./components/Form"
import List from "./components/List"


class App extends React.Component {
  constructor() {
    super()

    this.state = {
      tasks: [],
    }

    this.addTask = this.addTask.bind(this) 
    this.deleteTask = this.deleteTask.bind(this) 
    this.changeTask = this.changeTask.bind(this) 
  }

  addTask(str) {
    console.log("test",str)
    const task = {
      description: str,
      status: "To do", 
    }
    this.setState({ 
      tasks: [ task, ...this.state.tasks ] 
    })
  }

  deleteTask(index) {
    this.state.tasks.splice(index, 1);
  
    this.setState({
      tasks: this.state.tasks
    })
  }

  changeTask() {
  }

  render() {
    console.log("tableau",this.state.tasks)
    return (
      <div className="container">
       <h1>To do list</h1>
       <Form addTask={this.addTask} />
       <List tasks={this.state.tasks} handleDelete={this.deleteTask} handleChange={this.changeTask} />
      </div>
    )
  }

}

export default App;
