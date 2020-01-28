import React, { useState } from 'react';
import listContext from './ListContext';
function Provider({ children }) {
  const [tasks, changeTasks] = useState([]);
  const context = { tasks, changeTasks };
  return (
    <listContext.Provider value={context}>{children}</listContext.Provider>
  );
}

export default Provider;
