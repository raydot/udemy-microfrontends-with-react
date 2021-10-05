import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Signin from './components/Signin';
import Signup from './components/Signup';

// Randomly generate class names for production so we don't get CSS collisions
const generateClassName = createGenerateClassName({
  productionPrefix: 'au',
});

export default ({ history, onSignIn }) => {
  return (
    <div>
      <Router history={history}>
        <StylesProvider generateClassName={generateClassName}>
          <Switch>
            {/*<Route path='/auth/signin' component={Signin} />
            <Route path='/auth/signup' component={Signup} />*/}
            <Route path='/auth/signin'>
              <Signin onSignIn={onSignIn} />
            </Route>
            <Route path='/auth/signup'>
              <Signup onSignIn={onSignIn} />
            </Route>
          </Switch>
        </StylesProvider>
      </Router>
    </div>
  );
};
