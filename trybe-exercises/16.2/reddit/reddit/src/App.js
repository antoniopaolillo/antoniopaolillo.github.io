import React, { useContext } from 'react';
import './App.css';
import myContext from './context/context';
import ListOfPosts from './ListOfPosts';

function App() {
  const {
    data,
    setData,
    getData,
    currentSearch,
    setCurrentSearch,
    currentTime,
  } = useContext(myContext);

  function updateData(value) {
    setData();
    setCurrentSearch(value);
    getData(value);
  }
  return (
    <div className="App">
      <h1 data-testid="selected">SELECTED: {currentSearch || 'waiting'}</h1>
      <h2 data-testid="last-update">LAST UPDATE: {currentTime || 'waiting'}</h2>
      <select data-testid="select-options" onChange={(e) => updateData(e.target.value)}>
        <option disabled selected>
          Selecione um
        </option>
        <option value="frontend">Frontend</option>
        <option value="reactjs">ReactJs</option>
      </select>
      <button
        data-testid="btn-refresh"
        onClick={currentSearch ? () => updateData(currentSearch) : null}
      >
        REFRESH
      </button>
      <div data-testid="container-posts">
        {currentSearch ? (
          data ? (
            <ListOfPosts data={data} />
          ) : (
            'LOADING...'
          )
        ) : (
          'WAITING TO SELECT'
        )}
      </div>
    </div>
  );
}

export default App;
