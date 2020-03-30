import React from 'react';
import Tasks from './components/Tasks';
import CompletedTasks from './components/CompletedTasks';
import uuid1 from 'uuid/v4';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';


import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      tasksToDo: [],
      tasksDone: [],
      toShow: false,
      alert: false
    }
  }


  handleAddTask = () => {
    let Task = document.getElementById("inputTask").value
    // console.log(Task)
    let totalTasks = this.state.tasksToDo
    if (this.state.tasksToDo.indexOf(Task) !== -1) {
      this.setState({
        alert: true
      })
    }
    setTimeout(() => {
      this.setState({
        alert: false
      })
    }, 1000)
    if (Task.length >= 1 && totalTasks.indexOf(Task) === -1) {
      totalTasks.push(Task)
      this.setState({
        tasksToDo: totalTasks
      })
    }
    // console.log(this.state.tasksToDo)
    document.getElementById("inputTask").value = ""
  }

  handleTaskClick = (e) => {
    let textC = e.target.textContent
    // console.log(e.target.keyforme)
    // e.target.style={
    //   color:"green"
    // }
    // console.log(e.target.classList)
    e.target.classList.remove('h3');
    e.target.classList.add('strikeit', 'text-success', 'h2');
    // console.log(e.target.classList)
    // console.log(textC)
    setTimeout(() => {
      let filteredTask = this.state.tasksToDo.filter(function (ele) {
        return ele !== textC
      })
      // console.log(filteredTask)
      let selectedData = this.state.tasksDone
      selectedData.push(textC)
      this.setState({
        tasksToDo: filteredTask,
        tasksDone: selectedData
      })
      // console.log(this.state.tasksDone)
    }, 200)

  }

  handleDelete = (e) => {
    let toDelete = e.target.previousSibling.textContent
    let realTask = this.state.tasksToDo.filter(function (ele) {
      return ele !== toDelete
    })
    this.setState({
      tasksToDo: realTask
    })

  }

  handleShowCompleted = () => {
    // console.log(this.state.tasksDone)
    if (this.state.toShow === false) {
      this.setState({
        toShow: true
      })
    }
    else {
      this.setState({
        toShow: false
      })
    }
  }
  handleEnter = (e) => {
    if (e.key === "Enter") {
      this.handleAddTask()
    }
  }
  render() {
    return (
      <div>
        {(this.state.alert) ? <div class="alert alert-danger">
          <strong className="mr-2">Alert!</strong> This task already exists.</div>
          : <p></p>}
        <div className="row my-2">
          <div className="mx-auto mt-5">
            <p className="text-center display-4 mb-5">My_Todo_List</p>
            <div className="input-group ">
            <TextField id="" label="Add Tasks here !" variant="outlined"  onKeyPress={this.handleEnter} id="inputTask" className="form-control mb-3" type="text"   />
              <div className="input-group-append">
              <Button variant="contained" color="primary" onClick={this.handleAddTask} type="button" className="btn btn-info">
        Add
      </Button>
                {/* <button onClick={this.handleAddTask} type="button" className="btn btn-info">Add</button> */}
              </div>
            </div>
          </div>
        </div>
        {(this.state.tasksToDo.length >= 1) ? this.state.tasksToDo.map((e) => {
          return <Tasks selectX={this.handleTaskClick} selectD={this.handleDelete} key={uuid1()} taskName={e} />
        })
          : <div className="container"><div className="row"><p className="mx-auto text-danger">Nothing todo</p></div></div>}
        <div className="row">
          {(this.state.toShow === false) ? <Button variant="contained" color="primary" onClick={this.handleShowCompleted} type="button" className="col-md-3 col-lg-2 col-sm-4 col-6 btn btn-outline-info mx-auto my-2">Show completed tasks</Button> : <Button variant="contained" color="secondary" onClick={this.handleShowCompleted} type="button" className="col-md-3 col-lg-2 col-sm-4 col-6 btn btn-outline-info mx-auto my-2">Hide completed tasks</Button>}
        </div>
        {this.state.toShow ? (this.state.tasksDone.length >= 1) ?
          this.state.tasksDone.map((e) => {
            return <CompletedTasks key={uuid1()} xtaskName={e} />
          }) : <div className="container"><div className="row"><p className="mx-auto text-danger">No completed task found !</p></div></div>
          : <p></p>}
      </div>
    )
  }

}
export default App;
