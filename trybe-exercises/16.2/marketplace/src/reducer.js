export const initialState = [];

export function reducer(state = initialState, action) {
  if (action.type === 'ADICIONAR') {
    return [...state.filter(product => product.name !== action.value.name), action.value];
  } else if (action.type === 'REMOVER') {
    return [...state.filter(product => product.name !== action.value.name), action.value];
  }
  return state;
}
