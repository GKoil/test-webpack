import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import store from './store';
import App from './App';
import './styles/styles.css';

export const root = document.getElementById('app');
createRoot(root!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
