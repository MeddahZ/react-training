import React, { Component } from 'react';
import './Clicker.css';

class Clicker extends Component{
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state = {
            click : 0,
            message : <button onClick={this.handleClick}>click me</button>

        }
    }
    handleClick (e) {
        const num = Math.floor(Math.random() * 10);
        this.setState({click: num});
        num === 7 && this.setState({message: <h1>You win!!!</h1>}) 
    }

    render() {
        return(
            <div class="Clicker">
                <h1>{this.state.click}</h1>
                {this.state.message}
            </div>

        )
    }


}

export default Clicker;