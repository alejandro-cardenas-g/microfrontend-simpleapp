import React, { useRef, useLayoutEffect } from "react";
import { mount } from "marketing/MarketingApp";

export const MarketingApp = () => {
  const ref = useRef(null);

  useLayoutEffect(() => {
    mount(ref.current);
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};
