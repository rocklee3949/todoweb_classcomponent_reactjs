import React, { Component } from 'react'
import AddTask from './AddTask'
import TodoList from './TodoList'

const tasks = [
    {
        task: 'Exercises',
        completed: true,
    },
    {
        task: 'Have breakfast',
        completed: false,
    },
    {
        task: 'Make a video',
        completed: false,
    },

]
export default class Main extends Component {
    constructor(props) {
        super(props)
        this.state = { tasks }
    }
    addTask = (task) => {
        if (task.trim() === "") {
            alert("Task can't be Empty")
            return
        }
        tasks.push({ task, completed: false })
        this.setState({ tasks })
    }
    deleteTask = (index) => {
        tasks.splice(index, 1)
        this.setState({ tasks })
    }
    checkTask = (index) => {
        tasks[index].completed = !tasks[index].completed
        this.setState({ tasks })
    }
    saveTask = (task, index) => {
        tasks[index] = task
        this.setState(tasks)
    }
    render() {
        return (
            <div className='container'>
                <h1 className='title-web'>Todo List</h1>
                <AddTask
                    addTask={this.addTask}
                />
                <TodoList
                    tasks={this.state.tasks}
                    deleteTask={this.deleteTask}
                    checkTask={this.checkTask}
                    saveTask={this.saveTask}
                />
            </div>
        )
    }
}
