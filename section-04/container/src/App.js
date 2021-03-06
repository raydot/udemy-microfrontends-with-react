import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';
import { createBrowserHistory } from 'history';

// import MarketingApp from './components/MarketingApp';
// import AuthApp from './components/AuthApp';
import Progress from './components/Progress';
import Header from './components/Header';

// Get the imports working with lazy and Suspense so they only load
// as needed
const MarketingLazy = lazy(() => import('./components/MarketingApp'));
const AuthLazy = lazy(() => import('./components/AuthApp'));
const DashboardLazy = lazy(() => import('./components/DashboardApp'));
// Leftover code that illustrates "the big idea"
// import { mount } from 'marketing/MarketingApp';
// console.log(mount);
/*
    Imports element and logs: 
    ƒ mount(el) {
  //   ReactDOM.render(<h1>Hello from Marketing</h1>, el);
 //  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__/
    //react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMP…
*/ // VERY COOL!

// Fix CSS namespace collision issues by appending prefix for the container
const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

// Using this instead of browserrouter
// Mostly because of the challenge in trying to get the history
// from <BrowserRouter>, as opposed to <Router>
const history = createBrowserHistory();

export default () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  useEffect(() => {
    if (isSignedIn) {
      history.push('/dashboard');
    }
  }, [isSignedIn]);

  return (
    <Router history={history}>
      <StylesProvider generateClassName={generateClassName}>
        <div>
          {/*<h1>Hello from container!</h1>
      <hr />*/}
          <Header
            onSignOut={() => setIsSignedIn(false)}
            isSignedIn={isSignedIn}
          />
          {/*<Suspense fallback={<div>Loading...</div>}>*/}
          <Suspense fallback={<Progress />}>
            <Switch>
              {/*<Route path='/auth' component={AuthApp} />
    <Route path='/' component={MarketingApp} />*/}
              {/*  <Route path='/auth' component={AuthLazy} />*/}

              <Route path='/auth'>
                <AuthLazy onSignIn={() => setIsSignedIn(true)} />
              </Route>
              {/*<Route path='/dashboard' component={DashboardLazy} />
                refactor to handle redirect based on signin state
              */}
              <Route path='/dashboard'>
                {!isSignedIn && <Redirect to='/' />}
                <DashboardLazy />
              </Route>

              <Route path='/' component={MarketingLazy} />
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </Router>
  );
};

/**
 * { mount } is actually doing a heavy lift here.  We could just
 * export a React component from marketing but then the container
 * and the Marketing act are tightly coupled through React.  By
 * instead simply exposing a mount function in Marketing we absolve
 * ourselves of any such coupling and make components easy to swap
 * out in the future.
 */
