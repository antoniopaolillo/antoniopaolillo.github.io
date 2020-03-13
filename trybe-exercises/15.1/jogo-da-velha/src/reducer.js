export const initialState = {
  data: Array(9).fill(null),
};

export function reducer(state = initialState, action) {
  if (action.type === 'JOGAR') {
    return action;
  }
  return state;
}
