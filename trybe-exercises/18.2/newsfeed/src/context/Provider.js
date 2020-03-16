import React, { useState, useEffect } from 'react';
import context from './context';

function Provider({ children }) {
  const [endpoint, setEndpoint] = useState('top-headlines');
  const [textSearch, setTextSearch] = useState('flamengo');
  const [data, setData] = useState();
  const [isBeenUpdated, setIsBeenUpdated] = useState(false);
  const [isStoped, setIsStoped] = useState(true);
  const [method, setMethod] = useState();

  function interval() {
    if (isStoped) {
      const methodTwo = setInterval(getData, 10000, endpoint, textSearch);
      setMethod(methodTwo);
    } else {
      return clearInterval(method);
    }
  }

  async function getData(endpoint, textSearch) {
    setIsBeenUpdated(true);
    await fetch(
      `http://newsapi.org/v2/${endpoint}?q=${textSearch}&apiKey=${localStorage.feedKey}`,
    )
      .then((response) => response.json())
      .then((data) => setData(data));
    setIsBeenUpdated(false);
  }

  useEffect(() => {
    interval();
  }, [isStoped]);

  useEffect(() => {
    getData(endpoint, textSearch);
  }, [endpoint, textSearch]);

  const obj = {
    data,
    endpoint,
    setEndpoint,
    textSearch,
    setTextSearch,
    setData,
    isBeenUpdated,
    isStoped,
    setIsStoped,
  };

  return <context.Provider value={obj}>{children}</context.Provider>;
}

export default Provider;
