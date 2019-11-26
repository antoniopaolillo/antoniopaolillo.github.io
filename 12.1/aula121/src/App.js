import React, { Component } from 'react';
import Top from "./top";
class App extends Component {
  
  render() {
    return (
      <div>
        <Top array={[{id: 0, item: "flamengo"}, {id: 1, item: "eh"}, {id: 2, item: "foda"}]} />
      </div>
    )
  }
}

export default App;
