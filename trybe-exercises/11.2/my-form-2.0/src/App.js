import React from "react";
import "./App.css";
import Inputs from "./inputs";
import ComboBox from "./comboBox";

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      name: "",
      email: "",
      cpf: "",
      endereco: "",
      cidade: "",
      select: "",
      curriculo: "",
      cargo: "",
      descricao: ""
    }
    
  }

  alphabetPosition(event) {
    return event.target.value
      .match(/[a-zA-Z]/g)
      .map(el => el.toLowerCase().charCodeAt() - 96)
      .join(" ");
  }

  componentDidMount() {
    const cidade = document.getElementById("cidade");
    cidade.addEventListener("blur", () => {
       if(cidade.value.substring(0, 1).match(/[0-9]/)){
         cidade.value = "";
       }
    });
  }

  change = event => {
    const { value, id } = event.target
    this.setState({
      [id] : value
    })
  }

  clear = () => {
    Object.keys(this.state).forEach(state => {
      this.setState({
        [state] : ""
      })
    })
    document.getElementById('form').reset();

  }

  render() {
    return (
      <div className="App">
        <form id="form">
          <fieldset>
            <Inputs
              type={"text"}
              id={"name"}
              name={"name"}
              maxLength={40}
              style={{ textTransform: "uppercase" }}
              onChange={this.change}
            />
            <Inputs type={"text"} id={"email"} name={"email"} maxLength={50} onChange={this.change} />
            <Inputs type={"text"} id={"cpf"} name={"cpf"} maxLength={11} onChange={this.change} />
            <Inputs
              type={"text"}
              id={"endereco"}
              name={"en"}
              maxLength={200}
              onChange={this.change}
            />
            <Inputs
              type={"text"}
              id={"cidade"}
              name={"cidade"}
              maxLength={28}
              onChange={this.change}

            />
            <ComboBox id={"select"} onChange={this.change} />
            <Inputs onChange={this.change} type={"radio"} id={"casa"} name={"buttonradio"}  />
            <Inputs onChange={this.change} type={"radio"} id={"apartamento"} name={"buttonradio"} />
          </fieldset>
          <fieldset>
            <textarea
              maxLength={1000}
              id="curriculo"
              name="curriculo"
              required="required"
              placeholder="Resumo do Curriculo"
              onChange={this.change}
            ></textarea>
            <textarea
              maxLength={40}
              id="cargo"
              name="cargo"
              required="required"
              placeholder="Cargo"
              onChange={this.change}
            ></textarea>
            <textarea
              maxLength={500}
              id="descricao"
              name="descricao"
              required="required"
              placeholder="Descrição do Cargo"
              onChange={this.change}
            ></textarea>
          </fieldset>
        </form>
        <div>
         <p>{this.state.name}</p>
         <p>{this.state.email}</p>
         <p>{this.state.cpf}</p>
         <p>{this.state.endereco}</p>
         <p>{this.state.cidade}</p>
         <p>{this.state.select}</p>
         <p>{this.state.curriculo}</p>
         <p>{this.state.cargo}</p>
         <p>{this.state.descricao}</p>
        </div>
        <button onClick={this.clear}>limpar o formulario</button>
      </div>
    );
  }
}

export default App;
