import React, { useState } from 'react';
import myContext from './context';
import dateTime from '../service';

function Provider({ children }) {
  const [data, setData] = useState();
  const [currentSearch, setCurrentSearch] = useState();
  const [currentTime, setCurrentTime] = useState();

  async function getData(endpoint) {
    await fetch(`https://www.reddit.com/r/${endpoint}.json`)
      .then((response) => response.json())
      .then((data) => setData(data.data.children));
    setCurrentTime(dateTime());
  }

  const context = {
    currentSearch,
    setCurrentSearch,
    data,
    setData,
    getData,
    currentTime,
  };

  return <myContext.Provider value={context}>{children}</myContext.Provider>;
}

export default Provider;
