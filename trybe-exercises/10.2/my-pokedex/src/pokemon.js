import React from 'react';

class Pokemon extends React.Component {
    render() {
        const { name, type, averageWeight, image } = this.props.passed;
        const p = (value) => <p>{value}</p>
        return <div className="pokemons">
            {p(name)}
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img src={image} alt="algo"></img>
        </div>
    }
}

export default Pokemon;
