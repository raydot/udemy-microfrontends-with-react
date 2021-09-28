import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Mount functiuon to start the app
const mount = (el) => {
  //   ReactDOM.render(<h1>Hello from Marketing</h1>, el);
  ReactDOM.render(<App />, el);
};

// If in dev and isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_marketing-dev-root');

  if (devRoot) {
    mount(devRoot);
  }
}

// If not, we must be in container, so export mount
export { mount };
