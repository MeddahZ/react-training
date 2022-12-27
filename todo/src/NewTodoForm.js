import React, { Component } from 'react';
//import uuid from "uuid/v4";

class NewToDoForm extends Component {

    constructor(props){
        super(props);
        this.state= {
            todo: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    handleSubmit(e){
        // let task = {...this.state, id : uuid()};
        e.preventDefault();
        let task = {...this.state};
        this.props.addTask(task);
        this.setState({
            todo: ''
        })  

    }

    render() {
        return(
            <div className='NewTodoForm'>
                <form onSubmit={this.handleSubmit}>
                    <input id='todo' type='text' name="todo" value={this.state.todo} onChange={this.handleChange}></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default NewToDoForm;