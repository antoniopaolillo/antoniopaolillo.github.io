import React from 'react';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render () {
        const { dados } = this.props;
        return dados.map(poke => <Pokemon  key={poke.id} passed={poke}/>);
    }
}

export default Pokedex;
