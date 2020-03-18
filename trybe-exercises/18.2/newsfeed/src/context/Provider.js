import React, { useState, useEffect, useRef } from 'react';
import context from './context';
import { getData } from '../api';

function Provider({ children }) {
  const [endpoint, setEndpoint] = useState('top-headlines');
  const [textSearch, setTextSearch] = useState('corona');
  const [data, setData] = useState();
  const [isBeenUpdated, setIsBeenUpdated] = useState(false);
  const [isStoped, setIsStoped] = useState(true);
  const [delay, setDelay] = useState(10000);

  function useInterval(callback, delay) {
    const savedCallback = useRef();
  
    // Remember the latest callback.
    useEffect(() => {
      savedCallback.current = callback;
    }, [callback]);
  
    // Set up the interval.
    useEffect(() => {
      function tick() {
        savedCallback.current();
      }
      if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
      }
    }, [delay]);
  }

  useEffect(() => {
    if(!isStoped) {
      return setDelay(null);
    }
    setDelay(delay !== null ? delay + 1 : 10000);
  }, [isStoped]);

  useInterval(update, delay);

  async function update() {
    setIsBeenUpdated(true);
    await getData(endpoint, textSearch).then(res => setData(res)); 
    setIsBeenUpdated(false);
  }
  useEffect(() => {
    getData(endpoint, textSearch).then(res => setData(res));
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
