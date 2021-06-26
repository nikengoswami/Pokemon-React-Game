import React, { Component } from 'react';
import './Pokecard.css'
// const Poke_Api = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
const Poke_Api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)
class Pokecard extends Component {
    render() {
        let Imgsrc = `${Poke_Api}${padToThree(this.props.id)}.png`;
        return (
            <div className="Pokecard">
                <div className="Pokecard-title">{this.props.name}
                </div>
                <div className="Pokecard-image">
                    <img src={Imgsrc} alt={this.props.name} />
                </div>
                <div className="Pokecard-data">Type:{this.props.type}
                </div>
                <div className="Pokecard-data">EXP:{this.props.exp}
                </div>
            </div>
        );
    }
}
export default Pokecard