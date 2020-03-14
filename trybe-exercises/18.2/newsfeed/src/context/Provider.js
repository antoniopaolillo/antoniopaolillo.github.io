import React, { useState } from 'react';
import context from './context';

function Provider({ children }) {
  const [endpoint, setEndpoint] = useState('top-headlines');
  const [textSearch, setTextSearch] = useState();

  const obj = {
    endpoint,
    setEndpoint,
    textSearch,
    setTextSearch,
  };

  return <context.Provider value={obj}>{children}</context.Provider>;
}

export default Provider;
