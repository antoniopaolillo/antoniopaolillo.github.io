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

  // psychic = () => {
  //   const array = [];
  //   Dados.forEach(function(dado, index) {
  //     if (dado.type === "Psychic") {
  //       array.push(index);
  //     }
  //   });

  //   if (array.includes(this.state.pokemon)) {
  //     if (this.state.pokemon === array[array.length - 1]) {
  //       this.setState({ pokemon: array[0] });
  //     } else {
  //       this.setState({ pokemon: array[1] });
  //     }
  //   } else {
  //     this.setState({ pokemon: array[0] });
  //   }
  // };

  render() {
    const fire = (type) => {
      const array = [];
      Dados.forEach(function(dado, index) {
        if (dado.type === type) {
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

    return (
      <div className="App">
        <header className="App-header">
          <Pokemon passed={Dados[this.state.pokemon]} />
          <input
            type="button"
            value="Próximo"
            onClick={this.passarPokemon}
          ></input>
          <input type="button" value="Fire" onClick={fire("Fire")}></input>
          <input
            type="button"
            value="Psychic"
            onClick={fire("Psychic")}
          ></input>
        </header>
      </div>
    );
  }
}

export default App;
