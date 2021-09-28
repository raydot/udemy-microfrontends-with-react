import React from 'react';
// import { mount } from 'marketing/MarketingApp';
import MarketingApp from './components/MarketingApp';

// console.log(mount);
/*
    Imports element and logs: 
    ƒ mount(el) {
  //   ReactDOM.render(<h1>Hello from Marketing</h1>, el);
 //  react_dom__WEBPACK_IMPORTED_MODULE_1__.render( /*#__PURE__/
    //react__WEBPACK_IMPORTED_MODULE_0__.createElement(_App__WEBPACK_IMP…
*/ // VERY COOL!

export default () => {
  return (
    <div>
      <h1>Hello from container!</h1>
      <hr />
      <MarketingApp />
    </div>
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
