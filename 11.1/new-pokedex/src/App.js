import React from "react";
import "./App.css";
import Dados from "./data";
import Pokemon from "./pokemon";
import Button from "./button";
import Pokedex from "./pokedex";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: 1,
      arrPosition: 0
    };
  }

  passarPokemon = () => {
    if (this.state.pokemon === Dados.length - 1) {
      this.setState({ pokemon: 0 });
    } else {
      this.setState(state => ({
        pokemon: state.pokemon + 1
      }));
    }
  };

  findType = type2 => {
    const array = [];
    Dados.filter((dado, index) => {
      if (dado.type === type2) {
        array.push(index);
      }
      return 0;
    });
    if (array.includes(this.state.pokemon)) {
      if (this.state.pokemon === array[array.length - 1]) {
        this.setState({ pokemon: array[0], arrPosition: 0 });
      } else {
        this.setState(state => ({
          arrPosition: state.arrPosition + 1
        }));
        this.setState({ pokemon: array[this.state.arrPosition + 1] });
      }
    } else {
      this.setState({ pokemon: array[0] });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Pokemon passed={Dados[this.state.pokemon]} />
        </header>
        <Button onClick={this.passarPokemon} value={"All"} />
        <Pokedex dados={Dados} func={this.findType} />
      </div>
    );
  }
}

export default App;
