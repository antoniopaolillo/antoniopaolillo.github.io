import React from 'react';
import Page from './components/Page';
import Provider from './context/Provider';

import './App.css';

function App() {
  return (
    <div>
      <Provider>
      <Page />
      </Provider>
    </div>
  );
}

export default App;
