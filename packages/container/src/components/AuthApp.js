import React, { useRef, useLayoutEffect } from "react";
import { useHistory } from "react-router-dom";
import { mount } from "auth/AuthApp";

const AuthApp = ({ onSignIn }) => {
  const ref = useRef(null);
  const history = useHistory();

  useLayoutEffect(() => {
    const { onParentNavigate } = mount(ref.current, {
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;
        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      initialPath: history.location.pathname,
      onSignIn,
    });
    history.listen(onParentNavigate);
  }, []);

  return (
    <div>
      <div ref={ref}></div>
    </div>
  );
};

export default AuthApp;
