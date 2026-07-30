import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store';
import { AppProvider } from './context/AppContext';
import { registerServiceWorker } from './services/serviceWorker/registerSW';
import App from './App';
import './styles/App.css';
import './styles/theme.css';

/**
 * React 18 createRoot enables concurrent Fiber rendering
 * (time slicing, Suspense, startTransition, useDeferredValue).
 */
const container = document.getElementById('root');
if (!container) {
  throw new Error('Root element #root not found');
}

const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppProvider>
        <App />
      </AppProvider>
    </Provider>
  </React.StrictMode>
);

registerServiceWorker({
  onSuccess: () => console.info('[SW] Portfolio cached for offline use'),
  onUpdate: () => console.info('[SW] New content available — refresh to update'),
});
