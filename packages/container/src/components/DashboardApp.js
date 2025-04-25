import React, { useRef, useLayoutEffect } from "react";
import { mount } from "dashboard/DashboardApp";

const DashboardApp = () => {
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

export default DashboardApp;
