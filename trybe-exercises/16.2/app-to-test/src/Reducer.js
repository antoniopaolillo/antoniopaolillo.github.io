import { combineReducers } from "redux";

const initial1 = {
  value: 0
};
function reducer1(state = initial1, action) {
  switch (action.type) {
    case "increment1":
      return {
        ...state,
        value: state.value + action.value
      };
    case "decrement1":
      return {
        ...state,
        value: state.value - action.value
      };
    default:
      return state;
  }
}

const initial2 = {
  value: 0
};
function reducer2(state = initial2, action) {
  switch (action.type) {
    case "increment2":
      return {
        ...state,
        value: state.value + action.value
      };
    case "decrement2":
      return {
        ...state,
        value: state.value - action.value
      };
    default:
      return state;
  }
}

export const rootReducer = combineReducers({ reducer1, reducer2 });
