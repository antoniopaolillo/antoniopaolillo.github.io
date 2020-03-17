import React from 'react';
import {
  render,
  fireEvent,
  cleanup,
  waitForDomChange,
} from '@testing-library/react';
import Provider from './context/Provider';
import App from './App';
import * as api from './api';
import { firstResult, secondResult, thirdResult } from './service';

// afterEach(() => api.getData.mockReset());

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
    api.getData = jest.fn().mockResolvedValue(firstResult);
    const { queryByTestId } = render(<App />);
    expect(queryByTestId('loading')).toBeInTheDocument();
    await waitForDomChange();
    expect(queryByTestId('loading')).not.toBeInTheDocument();
    expect(queryByTestId('been-updating').innerHTML).not.toBe('Updating...');
  });
});
