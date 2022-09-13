import React, { Component } from 'react'


export default class AddTask extends Component {
    constructor(props) {
        super(props)
        this.state = { task: "" }
    }
    handleChange = (event) => {
        this.setState({ task: event.target.value })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addTask(this.state.task)
        this.setState({ task: "" })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    placeholder='enter your task'
                    value={this.state.task}
                    onChange={this.handleChange}
                    className="add-task-input"
                />
                <button type='submit' className="add-task-btn">Add</button>
            </form>
        )
    }
}
