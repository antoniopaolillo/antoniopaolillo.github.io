import React, { useState, useEffect } from 'react';
import context from './context';

function Provider({ children }) {
  const [endpoint, setEndpoint] = useState('top-headlines');
  const [textSearch, setTextSearch] = useState('corona');
  const [data, setData] = useState();
  const [isBeenUpdated, setIsBeenUpdated] = useState(false);
  const [isStoped, setIsStoped] = useState(false);

  async function updateData() {
    setIsBeenUpdated(true);
    await getData();
    setIsBeenUpdated(false);
  }

  const startInterval = () => setInterval(updateData, 10000);

  async function getData() {
    await fetch(
      `http://newsapi.org/v2/${endpoint}?q=${textSearch}&apiKey=${localStorage.feedKey}`,
    )
      .then((response) => response.json())
      .then((data) => setData(data));
  }

  useEffect(() => {
    getData();
  }, [endpoint, textSearch]);

  const obj = {
    data,
    endpoint,
    setEndpoint,
    textSearch,
    setTextSearch,
    setData,
    startInterval,
    isBeenUpdated,
    isStoped,
    setIsStoped,
  };

  return <context.Provider value={obj}>{children}</context.Provider>;
}

export default Provider;
