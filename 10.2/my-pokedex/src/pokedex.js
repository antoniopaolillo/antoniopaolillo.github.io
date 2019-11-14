import React from 'react';
import Dados from './data';
import Pokemon from './pokemon';

class Pokedex extends React.Component {
    render () {
        return Dados.map(poke => <Pokemon passed={poke}/>);
    }
}

export default Pokedex;
