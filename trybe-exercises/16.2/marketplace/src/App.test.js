import React from 'react';
import { render, fireEvent, cleanup, getByText } from '@testing-library/react';
import { Provider } from 'react-redux';
import { reducer, initialState } from './reducer';
import { createStore } from 'redux';
import data from './data';
import App from './App';

function renderWithRedux(
  ui,
  { initialState, store = createStore(reducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    store,
  };
}

describe('testing comportament', () => {
  test('container div should have 5 children', () => {
    const { getByTestId } = renderWithRedux(<App />);
    expect(getByTestId('container')).toBeInTheDocument();
    expect(getByTestId('container').childNodes.length).toBe(5);
  });

  test('initial price should be 0.00', () => {
    const { getByTestId } = renderWithRedux(<App />);
    expect(getByTestId('price').innerHTML).toBe('TOTAL PRICE: 0.00');
  });

  test('expect all products from data to be in document', () => {
    const { getByTestId } = renderWithRedux(<App />);
    for (let i = 0; i < data.length; i++) {
      expect(getByTestId(data[i].name)).toBeInTheDocument();
      expect(getByTestId(`${data[i].quantityStock}`)).toBeInTheDocument();
      expect(getByTestId(`${data[i].price}`)).toBeInTheDocument();
    }
  });

  test('expect all buttons to be in the document', () => {
    const { getByTestId } = renderWithRedux(<App />);
    for (let i = 0; i < data.length; i++) {
      expect(getByTestId(`${data[i].name}-button-remove`)).toBeInTheDocument();
      expect(getByTestId(`${data[i].name}-quantity`)).toBeInTheDocument();
      expect(getByTestId(`${data[i].name}-button-add`)).toBeInTheDocument();
    }
  });

  test('after add first product, the price and quantity should changes', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const buttonAddPao = getByTestId('Pão-button-add');
    const price = getByTestId('price');
    const quantity = getByTestId('Pão-quantity');

    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');
    fireEvent.click(buttonAddPao);
    expect(price.innerHTML).toBe('TOTAL PRICE: 1.99');
    expect(quantity.innerHTML).toBe('1');
  });

  test('after add and then remove a product, the quantity and price should be 0', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const buttonAddLuva = getByTestId('luva-button-add');
    const buttonRemoveLuva = getByTestId('luva-button-remove');
    const price = getByTestId('price');
    const quantity = getByTestId('luva-quantity');

    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');

    fireEvent.click(buttonAddLuva);
    expect(price.innerHTML).toBe('TOTAL PRICE: 8.75');
    expect(quantity.innerHTML).toBe('1');

    fireEvent.click(buttonRemoveLuva);
    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');
  });

  test('add diferents products should acrescent the count', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const price = getByTestId('price');
    const buttonAddLivro = getByTestId('Livro-button-add');
    const quantityLivro = getByTestId('Livro-quantity');
    const buttonAddTenis = getByTestId('tenis-button-add');
    const quantityTenis = getByTestId('tenis-quantity');

    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantityTenis.innerHTML).toBe('0');
    expect(quantityLivro.innerHTML).toBe('0');

    fireEvent.click(buttonAddLivro);
    fireEvent.click(buttonAddLivro);
    fireEvent.click(buttonAddLivro);
    fireEvent.click(buttonAddTenis);

    expect(price.innerHTML).toBe('TOTAL PRICE: 75.96');
    expect(quantityTenis.innerHTML).toBe('1');
    expect(quantityLivro.innerHTML).toBe('3');
  });

  test('try to add more than stock quantity should do nothing', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const buttonAddTenis = getByTestId('tenis-button-add');
    const quantityTenis = getByTestId('tenis-quantity');

    expect(quantityTenis.innerHTML).toBe('0');
    fireEvent.click(buttonAddTenis);
    expect(quantityTenis.innerHTML).toBe('1');
    fireEvent.click(buttonAddTenis);
    expect(quantityTenis.innerHTML).toBe('2');
    fireEvent.click(buttonAddTenis);
    expect(quantityTenis.innerHTML).toBe('2');
  });

  test('try to remove a product no add should do nothing', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const buttonRemoveLuva = getByTestId('luva-button-remove');
    const quantity = getByTestId('luva-quantity');
    const price = getByTestId('price');

    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');

    fireEvent.click(buttonRemoveLuva);
    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');
  });

  test('try add and remove a product more times then add should do nothing', () => {
    const { getByTestId } = renderWithRedux(<App />);
    const buttonRemoveLuva = getByTestId('luva-button-remove');
    const buttonAddLuva = getByTestId('luva-button-add');
    const quantity = getByTestId('luva-quantity');
    const price = getByTestId('price');

    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');

    fireEvent.click(buttonAddLuva);
    fireEvent.click(buttonRemoveLuva);
    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');

    fireEvent.click(buttonRemoveLuva);
    expect(price.innerHTML).toBe('TOTAL PRICE: 0.00');
    expect(quantity.innerHTML).toBe('0');
  });
});
