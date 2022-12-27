import React, { Component } from 'react';
import './RollDice.css'
import Die from './Die';

class RollDice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            die1 : 'one',
            die2 : 'one',
            rolling : false,
        };
        this.Roll = this.Roll.bind(this);
    };
    Roll (e) {
        const Rolls = ['one', 'two', 'three', 'four', 'five', 'six'];
        const face1 = Math.floor(Math.random() * 6 );
        const face2 = Math.floor(Math.random() * 6 );
        this.setState({die1 : Rolls[face1], die2 : Rolls[face2], rolling : true})
        setTimeout(() => {
            this.setState({rolling : false})
        },1000)
    };
    render() {
        return(
            <div className='RollDice'>
                <div className='RollDice-Dice'>
                    <Die roll={this.state.die1}/>
                    <Die roll={this.state.die2}/>
                </div>
                <button onClick={this.Roll} disabled={this.state.rolling}>{this.state.rolling ? "rolling..." : "roll dice"}</button>

            </div>
        )
    }

}

export default RollDice;