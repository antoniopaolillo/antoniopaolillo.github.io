import React from "react";
import "./App.css";
import Inputs from "./inputs";
import ComboBox from "./comboBox";

function App() {
  return (
    <div className="App">
      <form>
        <fieldset>
          <Inputs
            type={"text"}
            id={"name"}
            name={"name"}
            maxLength={40}
          />
          <Inputs type={"text"} id={"email"} name={"email"} maxLength={50} />
          <Inputs type={"text"} id={"cpf"} name={"cpf"} maxLength={11} />
          <Inputs type={"text"} id={"endereco"} name={"en"} maxLength={200} />
          <Inputs type={"text"} id={"cidade"} name={"cidade"} maxLength={28} />
          <ComboBox />
          <Inputs type={"radio"} id={"casa"} name={"buttonradio"} />
          <Inputs type={"radio"} id={"apartamento"} name={"buttonradio"} />
        </fieldset>
        <fieldset>
          <textarea
            maxLength={1000}
            id="curriculo"
            name="curriculo"
            required="required"
            placeholder="Resumo do Curriculo"
          ></textarea>
          <textarea
            maxLength={40}
            id="cargo"
            name="cargo"
            required="required"
            placeholder="Cargo"
          ></textarea>
          <textarea
            maxLength={500}
            id="descricao"
            name="descricao"
            required="required"
            placeholder="Descrição do Cargo"
          ></textarea>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
