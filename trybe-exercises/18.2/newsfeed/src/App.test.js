import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForDomChange,
  getByText,
} from '@testing-library/react';
import App from './App';
import * as api from './api';
import { firstResult, secondResult, thirdResult, result } from './service';

describe('initial page', () => {
  afterEach(cleanup);
  test('text "ANTONIO NOTICE" shoud be in the page', () => {
    const { getByText } = render(<App />);
    expect(getByText('ANTONIO NOTICES')).toBeInTheDocument();
  });

  test('the endpoint should be top-headlins', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('endpoint').innerHTML).toBe('Endpoint: top-headlines');
  });

  test('the input to search and button to go should be in the document', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('search-input')).toBeInTheDocument();
    expect(getByTestId('btn-input-search')).toBeInTheDocument();
  });

  test('the radio button checked by default should be top-headlines', () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId('radio-btn-top-headlines')).toBeInTheDocument();
    expect(getByTestId('radio-btn-top-headlines').checked).toBe(true);
    expect(getByTestId('radio-btn-everything')).toBeInTheDocument();
  });

  test('expect text Updating... to be in the document', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('been-updating').innerHTML).toBe('Updating...');
  });

  test('expect btn of update text to be UPDATE: Stop', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('btn-update').innerHTML).toBe('UPDATE: Stop');
  });

  test('expect feed returns a text loading...', () => {
    const { getByTestId } = render(<App />);
    expect(getByTestId('loading')).toBeInTheDocument();
  });
});

describe('after page loads', () => {
  test('texts loading... and updating... shoud not be in the document', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(secondResult);
    const { queryByTestId, getByText } = render(<App />);
    expect(queryByTestId('loading')).toBeInTheDocument();
    await waitForDomChange();
    expect(getByText('Space Photos of the Week: Perfectly Safe Celestial Coronas')).toBeInTheDocument();
    expect(queryByTestId('loading')).not.toBeInTheDocument();
    expect(queryByTestId('been-updating').innerHTML).not.toBe('Updating...');
  });

  test('all elements from data should be in the document', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { queryByText, getByAltText } = render(<App />);
    await waitForDomChange();
    for(let i = 0; i < result.articles.length; i++) {
      expect(queryByText(result.articles[i].title)).toBeInTheDocument();
      expect(queryByText(result.articles[i].author)).toBeInTheDocument();
      expect(queryByText(result.articles[i].publishedAt)).toBeInTheDocument();
      expect(queryByText(result.articles[i].description)).toBeInTheDocument();
      expect(getByAltText(result.articles[i].urlToImage)).toBeInTheDocument();
    }
  });

  test('click on radio button should checked', async () => {
    const { getByTestId } = render(<App />);
    const buttonEverything = getByTestId('radio-btn-everything');
    expect(buttonEverything.checked).toBe(false);
    fireEvent.click(buttonEverything);
    expect(buttonEverything.checked).toBe(true);
  });

  test('change value of input text should change the page', async () => {
    const { getByTestId } = render(<App />);
    await waitForDomChange();
    const inputToSearch = getByTestId('search-input');
    const btnInputSearch = getByTestId('btn-input-search');
    expect(inputToSearch.value).toBe('');
    fireEvent.change(inputToSearch, { target: { value: 'flamengo'}});
    fireEvent.click(btnInputSearch);
  });
});
