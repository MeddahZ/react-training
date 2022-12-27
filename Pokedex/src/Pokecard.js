import React, { Component } from 'react';
import './Pokecard.css';

class Pokecard extends Component{
    render() {
        const {pokename, type, id, base_experience} = this.props
        const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
        const img =`https://assets.pokemon.com/assets/cms2/img/pokedex/detail/${padToThree(id)}.png`
        console.log(img)
        return (
            <div className="Pokecard">
                <h1 className="Pokecard-title">{pokename}</h1>
                <div className="Pokecard-image">
                    <img src={img} alt={pokename}/>
                </div>
                <div className='Pokecard-data'>Type: {type}</div>
                <div className='Pokecard-data'>EXP: {base_experience}</div>
            </div>
        )
    }
}

export default Pokecard;

