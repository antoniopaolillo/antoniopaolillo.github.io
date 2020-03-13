import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import { reducer, initialState } from './reducer';
import { createStore } from 'redux';
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

describe('when page is loaded, all divs should be empty', () => {
  afterEach(cleanup);
  test('all divs shoud have classname notPlayed', () => {
    const { queryByTestId } = renderWithRedux(<App />);

    for (let i = 0; i < 9; i++) {
      expect(queryByTestId(`div${i}`).className).toBe('notPlayed');
    }
  });
  test('after click on the 3 div, the classname should be play1', () => {
    const { queryByTestId } = renderWithRedux(<App />);

    const firstDiv = queryByTestId('div3');
    fireEvent.click(firstDiv);
    expect(firstDiv.className).toBe('play1');
    expect(queryByTestId('div7').className).toBe('notPlayed');
  });

  test('after click on the 0 and 5 div, the classname should be play1 and play2', () => {
    const { queryByTestId } = renderWithRedux(<App />);

    const firstDiv = queryByTestId('div0');
    const secondDiv = queryByTestId('div5');
    fireEvent.click(firstDiv);
    fireEvent.click(secondDiv);
    expect(firstDiv.className).toBe('play1');
    expect(secondDiv.className).toBe('play2');
    expect(queryByTestId('div7').className).toBe('notPlayed');
  });
  test('after click 2 times in same div0, the classname should be play1', () => {
    const { queryByTestId } = renderWithRedux(<App />);

    const firstDiv = queryByTestId('div0');
    fireEvent.click(firstDiv);
    expect(firstDiv.className).toBe('play1');
    fireEvent.click(firstDiv);
    expect(firstDiv.className).toBe('play1');
  });

  test('testing condition of win', () => {
    const { queryByTestId, getByText } = renderWithRedux(<App />);
    const firstDiv = queryByTestId('div0');
    const secondDiv = queryByTestId('div1');
    const thirdDiv = queryByTestId('div2');
    const fourDiv = queryByTestId('div3');
    const fiveDiv = queryByTestId('div4');
    fireEvent.click(firstDiv);
    fireEvent.click(fourDiv);
    fireEvent.click(secondDiv);
    fireEvent.click(fiveDiv);
    fireEvent.click(thirdDiv);

    expect(getByText('GANHOU')).toBeInTheDocument();
    expect(firstDiv).not.toBeInTheDocument();
    expect(thirdDiv).not.toBeInTheDocument();
    expect(fourDiv).not.toBeInTheDocument();
    expect(fiveDiv).not.toBeInTheDocument();
  });

  test('testing condition of win 2', () => {
    const { queryByTestId, getByText } = renderWithRedux(<App />);
    const firstDiv = queryByTestId('div0');
    const secondDiv = queryByTestId('div1');
    const thirdDiv = queryByTestId('div3');
    const fourDiv = queryByTestId('div4');
    const sixDiv = queryByTestId('div6');
    fireEvent.click(firstDiv);
    fireEvent.click(secondDiv);
    fireEvent.click(thirdDiv);
    fireEvent.click(fourDiv);
    fireEvent.click(sixDiv);

    expect(getByText('GANHOU')).toBeInTheDocument();
    expect(thirdDiv).not.toBeInTheDocument();
    expect(fourDiv).not.toBeInTheDocument();
    expect(sixDiv).not.toBeInTheDocument();
  });

  test('testing condition of win 3', () => {
    const { queryByTestId, getByText } = renderWithRedux(<App />);
    const divZero = queryByTestId('div0');
    const divOne = queryByTestId('div1');
    const divFive = queryByTestId('div5');
    const divThree = queryByTestId('div3');
    const divFour = queryByTestId('div4');
    fireEvent.click(divThree);
    fireEvent.click(divZero);
    fireEvent.click(divFour);
    fireEvent.click(divOne);
    fireEvent.click(divFive);

    expect(getByText('GANHOU')).toBeInTheDocument();
    expect(divOne).not.toBeInTheDocument();
    expect(divZero).not.toBeInTheDocument();
    expect(divThree).not.toBeInTheDocument();
    expect(divFour).not.toBeInTheDocument();
  });
  test('testing condition of win 4', () => {
    const { queryByTestId, getByText } = renderWithRedux(<App />);
    const divZero = queryByTestId('div0');
    const divEight = queryByTestId('div8');
    const divSix = queryByTestId('div6');
    const divSeven = queryByTestId('div7');
    const divFour = queryByTestId('div4');
    fireEvent.click(divSix);
    fireEvent.click(divZero);
    fireEvent.click(divSeven);
    fireEvent.click(divFour);
    fireEvent.click(divEight);

    expect(getByText('GANHOU')).toBeInTheDocument();
    expect(divSix).not.toBeInTheDocument();
    expect(divZero).not.toBeInTheDocument();
    expect(divEight).not.toBeInTheDocument();
    expect(divFour).not.toBeInTheDocument();
  });

  // test('testing condition of win 5', () => {
  //   const { queryByTestId, getByText } = renderWithRedux(<App />);
  //   const divZero = queryByTestId('div0');
  //   const divOne = queryByTestId('div1');
  //   const divSix = queryByTestId('div6');
  //   const divSeven = queryByTestId('div7');
  //   const divFour = queryByTestId('div4');
  //   fireEvent.click(divZero);
  //   fireEvent.click(divOne);
  //   fireEvent.click(divFour);
  //   fireEvent.click(divSix);
  //   fireEvent.click(divSeven);

  //   expect(getByText('GANHOU')).toBeInTheDocument();
  //   expect(divSix).not.toBeInTheDocument();
  //   expect(divZero).not.toBeInTheDocument();
  //   expect(divSeven).not.toBeInTheDocument();
  //   expect(divFour).not.toBeInTheDocument();
  // });
});
