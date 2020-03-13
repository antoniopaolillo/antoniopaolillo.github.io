import React from "react";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducers";
import logger from 'redux-logger';
import Info from './Info';
import thunk from 'redux-thunk';
import UserAgent from './UserAgent';

const store = createStore(reducer, applyMiddleware(logger, thunk));
function App() {
  return (
    <Provider store={store}>
      <div>
        <Info />
        <UserAgent />
      </div>
    </Provider>
  );
}

export default App;
