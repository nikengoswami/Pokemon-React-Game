import React, { Component } from 'react'
import Pokecard from './Pokecard'
import './Pokedex.css'
class Pokedex extends Component {
    render() {
        let title;
        if (this.props.isWinner) {
            title = <h1 className="Pokedex-Winner">Winning Hand</h1>
        } else {
            title = <h1 className="Pokedex-Loser">Losing Hand</h1>
        }
        return (
            <div className="Pokedex">
                {title}
                <h4>Total Experience: {this.props.exp}
                </h4>
                <div className="Pokedex-cards">{this.props.pokemon.map((p) => (
                    <Pokecard id={p.id} name={p.name} type={p.type} exp={p.base_experience} />
                ))
                }
                </div>
            </div>
        )
    }
}

export default Pokedex;