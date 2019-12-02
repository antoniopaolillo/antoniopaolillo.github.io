import React from 'react';
import './App.css'

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.passed;
        const p = (value) => <p>{value}</p>
        return <div className="pokemonTop">
        <div className="pokemons">
            {p(name)}
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
        </div>
            <img width="200em" height="200em" src={image} alt="algo"></img>
        </div>
    }
}

export default Pokemon;
