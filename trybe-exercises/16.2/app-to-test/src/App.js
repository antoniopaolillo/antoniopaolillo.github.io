import React from "react";
import { createStore } from "redux";
import Counter1 from "./Counter1";
import Counter2 from "./Counter2";
import { Provider } from "react-redux";
import { rootReducer } from './Reducer';

const store = createStore(rootReducer);
function App() {
  return (
    <Provider store={store}>
      <Counter1 />
      <Counter2 />
    </Provider>
  );
}
export default App;
