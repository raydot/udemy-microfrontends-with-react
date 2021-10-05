import { mount } from 'auth/AuthApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      // This gets passed to bootstrap
      initialPath: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      //onSignIn: () => {
      //console.log('User signed in.');
      onSignIn,
      //},
    });

    history.listen(onParentNavigate);
  }, []); // [] == only run when first loaded...

  return <div ref={ref} />;
};

/**
 * Most of this is copied from MarketingApp.js, which still has comments and explanations.
 * Which demonstrates the effectiveness of this interface.
 */
