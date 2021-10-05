import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
// Very reusable approach!  Should work with most frameworks
export default () => {
  const ref = useRef(null);
  const history = useHistory();

  // using useEffect to make sure it's called only once.
  useEffect(() => {
    // We're now able to access this function in the Marketing app:
    const { onParentNavigate } = mount(ref.current, {
      // Set inital path so app doesn't think it's '/'
      initialPath: history.location.pathname,
      // Pathname lives in the listener
      // This is all to send navigation FROM marketing TO container
      // It works with the history object in Marketing's App.js
      onNavigate: ({ pathname: nextPathname }) => {
        // console.log('The container sees you trying to navigate, marketing!');
        //console.log(nextPathname);
        // avoid that infinite nav loop!
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
    });

    // Listen to the container history object
    history.listen(onParentNavigate);
  }, []); // [] == only run when first loaded...

  return <div ref={ref} />;
};
