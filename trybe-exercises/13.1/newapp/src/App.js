import React from 'react';
import './App.css';
import Value from './Value';
function App() {
  return (
    <div className="App">
      <Value valor={['mustan', 'ferrari']}/>
      <Value valor={0} />
      <Value valor={['tipo', 'uno']}/>
      <Value valor={['brasilia', 'fusca']}/>
    </div>
  );
}
export default App;
