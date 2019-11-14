import React from 'react';

class Pokemon extends React.Component{
    render(){
        const {name, type, averageWeight, image} = this.props.passed;
        return <div className="pokemons">
            <p>{name}</p>
            <p>{type}</p>
            <p>{averageWeight.value}{averageWeight.measurementUnit}</p>
            <img src={image}></img>
        </div>
    }
}

export default Pokemon;
