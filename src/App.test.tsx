import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

test('renders all todo items', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(screen.getAllByTestId('card')).not.toStrictEqual([]);
});
