import React from 'react';
import ReactDOM from 'react-dom';
import { createMemoryHistory, createBrowserHistory } from 'history';
import App from './App';

// Mount function to start the app
// This looks basic, but it's actually super important as it allows container to
// simply call "mount", and not have to worry about what the actual marketing
// app technology stack is.

// onNavigate is a navigation callback set up on container/components/MarketingApp.js
const mount = (el, { onSignIn, onNavigate, defaultHistory, initialPath }) => {
  //   ReactDOM.render(<h1>Hello from Marketing</h1>, el);
  // Create our own memory history for use in sub-applications
  const history =
    defaultHistory ||
    createMemoryHistory({
      // Have to set an initial path, because otherwise the app thinks we're at '/'
      // and doesn't load anything.
      initialEntries: [initialPath],
    });

  if (onNavigate) {
    history.listen(onNavigate);
  }

  ReactDOM.render(<App onSignIn={onSignIn} history={history} />, el);

  // Give us a handle on the marketing app
  return {
    //onParentNavigate(location) {
    //console.log('CONTAINER SO NAVIGATED');
    //console.log(location);
    onParentNavigate({ pathname: nextPathname }) {
      const { pathname } = history.location;
      //console.log(location);
      if (pathname !== nextPathname) {
        history.push(nextPathname);
      }
    },
  };
};

// If in dev and isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_auth-dev-root');

  if (devRoot) {
    mount(devRoot, { defaultHistory: createBrowserHistory() });
  }
}

// If not, we must be in container, so export mount
export { mount };
