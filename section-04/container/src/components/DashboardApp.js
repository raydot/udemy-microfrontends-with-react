import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    mount(ref.current);
  }, []); // [] == only run when first loaded...

  return <div ref={ref} />;
};

/**
 * Most of this is copied from MarketingApp.js, which still has comments and explanations.
 * Which demonstrates the effectiveness of this interface.
 */
