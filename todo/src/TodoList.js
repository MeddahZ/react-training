import React, { Component } from 'react';
import Todo from './Todo';
import NewToDoForm from './NewTodoForm';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Todo : []
        }
        this.add = this.add.bind(this);
    }

    add(task){
        this.setState({
            Todo : [...this.state.Todo, task]
        })
    }

    // remove(id) {
    //     this.setState({
    //         Todo : this.state.Todo.filter((task) => (task.id !== id))
    //     })

    // }

    render() {
        const todo = this.state.Todo.map((task) => (
            <Todo 
            task={task.todo}
            key={task.id}
            />
        ));

        return(
            <div className='TodoList'>
                <h1>To-do list</h1>
                {todo}
                <NewToDoForm addTask={this.add} />
            </div>
        )
    }
}

export default TodoList;