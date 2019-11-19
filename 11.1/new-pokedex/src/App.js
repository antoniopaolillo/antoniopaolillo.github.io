import React from "react";
import "./App.css";
import Dados from "./data";
import Pokemon from "./pokemon";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: 1
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

  fire = () => {
    const array = [];
    Dados.forEach(function(dado, index) {
      if (dado.type === "Fire") {
        array.push(index);
      }
    });
    if (array.includes(this.state.pokemon)) {
      if (this.state.pokemon === array[array.length - 1]) {
        this.setState({ pokemon: array[0] });
      } else {
        this.setState({ pokemon: array[1] });
      }
    } else {
      this.setState({ pokemon: array[0] });
    }
  };

  psychic = () => {
    const array = [];
    Dados.forEach(function(dado, index) {
      if (dado.type === "Psychic") {
        array.push(index);
      }
    });

    if (array.includes(this.state.pokemon)) {
      if (this.state.pokemon === array[array.length - 1]) {
        this.setState({ pokemon: array[0] });
      } else {
        this.setState({ pokemon: array[1] });
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
          <input
            type="button"
            value="Próximo"
            onClick={this.passarPokemon}
          ></input>
          <input type="button" value="Fire" onClick={this.fire}></input>
          <input type="button" value="Psychic" onClick={this.psychic}></input>
        </header>
      </div>
    );
  }
}

export default App;
