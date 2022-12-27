import React, { Component } from 'react';
import './Die.css'
class Die extends Component {
    render() {
        const roll=`fas fa-dice-${this.props.roll} fa-10x`
        return (
            <div className='Die'>
                <i className={roll}></i>

            </div>
        )
    }

}


export default Die;