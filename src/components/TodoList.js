import React, { Component } from 'react'

export default class TodoList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            editTask: {
                task: "",
                completed: false,
            },
            index: false
        }
    }
    deleteTask = (index) => {
        this.props.deleteTask(index)
    }
    checkTask = (index) => {
        this.props.checkTask(index)
    }
    setEditing = (index, task) => {
        this.setState({ editTask: task, index })
    }
    handleChange = (event) => {
        const taskContent = event.target.value
        this.setState({ editTask: { task: taskContent, completed: false } })
    }
    saveTask = () => {
        this.props.saveTask(this.state.editTask, this.state.index)
        this.setState({ editTask: { task: "", completed: false }, index: false })
    }
    render() {
        return (
            <ul className='todo-list'>
                {this.props.tasks.map((task, index) => {
                    return (
                        <li key={index}>
                            {this.state.index === index ?
                                (<>
                                    <input type="text" value={this.state.editTask.task} onChange={this.handleChange} />
                                    <div className="buttons">
                                        <button className='btn-edit' onClick={this.saveTask}>Save</button>
                                        <button className='btn-delete' onClick={() => this.setEditing(false, { task: "", completed: false })}>Back</button>
                                    </div>
                                </>)
                                :
                                (<>
                                    <p onClick={() => this.checkTask(index)}>
                                        <input type="checkbox" readOnly checked={task.completed} />
                                        <span style={task.completed ? { textDecoration: 'line-through' } : { textDecoration: 'none' }}>{task.task}</span>
                                    </p>
                                    <div className="buttons">
                                        <button className='btn-edit' onClick={() => this.setEditing(index, task)}>Edit</button>
                                        <button className='btn-delete' onClick={() => this.deleteTask(index)}>Delete</button>
                                    </div>
                                </>)
                            }
                        </li>
                    )
                })}
            </ul>
        )
    }
}
