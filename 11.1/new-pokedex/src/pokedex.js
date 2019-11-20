import React from "react";
// import Pokemon from './pokemon';
import Button from "./button";

class Pokedex extends React.Component {
  render() {
    const { dados, func } = this.props;
    const pokemons = dados.map(poke => poke.type);
    const types = pokemons.filter(
      (type, index) => pokemons.indexOf(type) === index
    );
    return types.map(poke => (
      <Button onClick={() => func(poke)} value={poke} />
    ));
  }
}

export default Pokedex;
