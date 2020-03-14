import React from 'react';
import { render, fireEvent, cleanup, waitForDomChange } from '@testing-library/react';
import Provider from './context/Provider';
import App from './App';
import dateTime from './service';

describe('testing initialized page', () => {
  afterEach(cleanup);
  test('when initialize page, should have no li', () => {
    const { getByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );
    expect(getByTestId('container-posts').innerHTML).toBe('WAITING TO SELECT');
  });

  test('when initialize page, selected and last-update should be waiting', () => {
    const { getByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );
    expect(getByTestId('selected').innerHTML).toBe('SELECTED: waiting');
    expect(getByTestId('last-update').innerHTML).toBe('LAST UPDATE: waiting');
  });

  test('when initializa page, button refresh should do nothing', () => {
    const { getByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );
    expect(getByTestId('container-posts').innerHTML).toBe('WAITING TO SELECT');
    expect(getByTestId('selected').innerHTML).toBe('SELECTED: waiting');
    expect(getByTestId('last-update').innerHTML).toBe('LAST UPDATE: waiting');
    const buttonRefresh = getByTestId('btn-refresh');

    fireEvent.click(buttonRefresh);

    expect(getByTestId('selected').innerHTML).toBe('SELECTED: waiting');
    expect(getByTestId('last-update').innerHTML).toBe('LAST UPDATE: waiting');
    expect(getByTestId('container-posts').innerHTML).toBe('WAITING TO SELECT');
  });
});

describe('after select ReactJs option, page should change', () => {
  afterEach(cleanup);
  test('expect list of posts of frontend to be in the document', async () => {
    const { getByTestId, queryByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );
    const selectOptions = getByTestId('select-options');
    const containerPosts = getByTestId('container-posts');
    const containerUl = queryByTestId('ul-container');
    const lastUpdate = getByTestId('last-update');
    const selected = getByTestId('selected');
    expect(containerPosts.innerHTML).toBe('WAITING TO SELECT');
    expect(containerUl).not.toBeInTheDocument();
    expect(lastUpdate.innerHTML).toBe(`LAST UPDATE: waiting`)

    fireEvent.change(selectOptions, { target: { value: 'frontend' } });
    expect(containerPosts.innerHTML).toBe('LOADING...');
    expect(selected.innerHTML).toBe('SELECTED: frontend');

    await waitForDomChange();
    expect(containerPosts.innerHTML).not.toBe('LOADING...');
    expect(queryByTestId('ul-container')).toBeInTheDocument();
    expect(lastUpdate.innerHTML).toBe(`LAST UPDATE: ${dateTime()}`);
  });

  test('after click in refresh, page should be updated', async () => {
    const { getByTestId, queryByTestId } = render(
      <Provider>
        <App />
      </Provider>,
    );
    const selectOptions = getByTestId('select-options');
    const containerPosts = getByTestId('container-posts');
    const selected = getByTestId('selected');
    const lastUpdate = getByTestId('last-update');
  
    fireEvent.change(selectOptions, { target: { value: 'reactjs' } });
    expect(containerPosts.innerHTML).toBe('LOADING...');
    expect(selected.innerHTML).toBe('SELECTED: reactjs');

    await waitForDomChange();

    expect(queryByTestId('ul-container')).toBeInTheDocument();
    const time = dateTime();
    expect(lastUpdate.innerHTML).toBe(`LAST UPDATE: ${time}`);

    fireEvent.click(getByTestId('btn-refresh'));

    await waitForDomChange();
    
    expect(lastUpdate.innerHTML).toBe(`LAST UPDATE: ${dateTime()}`);
  });
});
