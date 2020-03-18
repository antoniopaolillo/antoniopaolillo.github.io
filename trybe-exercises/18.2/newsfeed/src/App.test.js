import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForDomChange,
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

  test('the endpoint should be top-headlines', () => {
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
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('been-updating').innerHTML).not.toBe('Updating...');
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
    expect(
      getByText('Space Photos of the Week: Perfectly Safe Celestial Coronas'),
    ).toBeInTheDocument();
    expect(queryByTestId('loading')).not.toBeInTheDocument();
    expect(queryByTestId('been-updating').innerHTML).not.toBe('Updating...');
  });

  test('all elements from data should be in the document', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { queryByText, getByAltText } = render(<App />);
    await waitForDomChange();
    for (let i = 0; i < result.articles.length; i++) {
      expect(queryByText(result.articles[i].title)).toBeInTheDocument();
      expect(queryByText(result.articles[i].author)).toBeInTheDocument();
      expect(queryByText(result.articles[i].publishedAt)).toBeInTheDocument();
      expect(queryByText(result.articles[i].description)).toBeInTheDocument();
      expect(getByAltText(result.articles[i].urlToImage)).toBeInTheDocument();
    }
  });

  test('click on radio button should call function getData', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { getByTestId } = render(<App />);
    const buttonEverything = getByTestId('radio-btn-everything');
    expect(api.getData).toHaveBeenCalledTimes(1);
    expect(buttonEverything.checked).toBe(false);

    fireEvent.click(buttonEverything);
    expect(buttonEverything.checked).toBe(true);
    await waitForDomChange();

    expect(api.getData).toHaveBeenCalledTimes(2);
  });

  test('click on everything and then top-headlines should call function getData', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { getByTestId } = render(<App />);
    const buttonEverything = getByTestId('radio-btn-everything');
    const buttonTopHeadlines = getByTestId('radio-btn-top-headlines');
    expect(api.getData).toHaveBeenCalledTimes(1);
    expect(buttonEverything.checked).toBe(false);
    expect(buttonTopHeadlines.checked).toBe(true);

    fireEvent.click(buttonEverything);
    await waitForDomChange();
    expect(buttonEverything.checked).toBe(true);
    expect(buttonTopHeadlines.checked).toBe(false);
    expect(api.getData).toHaveBeenCalledTimes(2);
    
    fireEvent.click(buttonTopHeadlines);
    await waitForDomChange();
    expect(buttonEverything.checked).toBe(false);
    expect(buttonTopHeadlines.checked).toBe(true);
    expect(api.getData).toHaveBeenCalledTimes(3);

  });

  test('change value of input text should change the page and call getData', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { getByTestId } = render(<App />);
    const inputToSearch = getByTestId('search-input');
    const btnInputSearch = getByTestId('btn-input-search');

    expect(api.getData).toHaveBeenCalledTimes(1);
    expect(inputToSearch.value).toBe('');
    fireEvent.change(inputToSearch, { target: { value: 'flamengo' } });
    fireEvent.click(btnInputSearch);

    await waitForDomChange();
    expect(api.getData).toHaveBeenCalledTimes(2);
  });

  test('in case value of input text be empty, button should do nothing', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { getByTestId } = render(<App />);
    const inputToSearch = getByTestId('search-input');
    const btnInputSearch = getByTestId('btn-input-search');

    expect(api.getData).toHaveBeenCalledTimes(1);
    expect(inputToSearch.value).toBe('');
    fireEvent.click(btnInputSearch);

    await waitForDomChange();
    expect(api.getData).toHaveBeenCalledTimes(1);
  });

  test('click on button update should stop or resume the loading', async () => {
    jest.mock('./api');
    api.getData = jest.fn().mockResolvedValue(result);
    const { getByTestId, queryByTestId } = render(<App />);
    const buttonUpdate = getByTestId('btn-update');
    expect(queryByTestId('been-updating').innerHTML).not.toBe('Updating...');
    expect(buttonUpdate.innerHTML).toBe('UPDATE: Stop');
    fireEvent.click(buttonUpdate);
    expect(buttonUpdate.innerHTML).toBe('UPDATE: Resume');
  });
});
