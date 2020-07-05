import React, { Fragment } from 'react';
import Header from './header';
import Navigation from './Navigation';

const Layout = ({ children }) => {
  return (
    <Fragment>
      <Header/>
      <div className="wrapper">
        <Navigation/>
        <main>{children}</main>
      </div>
    </Fragment>
  );
};

export default Layout;