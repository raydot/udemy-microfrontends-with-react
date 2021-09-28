import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';

// Very reusable approach!  Should work with most frameworks
export default () => {
  const ref = useRef(null);

  // using useEffect to make sure it's called only once.
  useEffect(() => {
    mount(ref.current);
  });

  return <div ref={ref} />;
};
