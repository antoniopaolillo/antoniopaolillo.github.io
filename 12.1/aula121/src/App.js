import React, { Component } from "react";
import Top from "./top";
class App extends Component {
  render() {
    return (
      <div>
        <Top
          array={[
            { id: 0, item: "Hoje" },
            { id: 1, item: "tem" },
            { id: 2, item: "gol" },
            { id: 3, item: "do" },
            { id: 4, item: "gabigol" }
          ]}
        />
      </div>
    );
  }
}

export default App;
