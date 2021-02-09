import React from "react";
import { GlobalStyles } from "twin.macro";

const Layout = ({ children, ...rest }) => (
  <div {...rest} id="layout">
    <GlobalStyles />
    {children}
  </div>
);

export default Layout;
