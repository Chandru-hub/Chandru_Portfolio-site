import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from './context/AppContext';
import App from './App';

test('renders portfolio skeleton or brand while hydrating', async () => {
  render(
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  );

  const loading = screen.queryByLabelText(/loading portfolio/i);
  const brand = await screen.findByText(/CS\.dev/i, {}, { timeout: 3000 }).catch(() => null);
  expect(loading || brand).toBeTruthy();
});
