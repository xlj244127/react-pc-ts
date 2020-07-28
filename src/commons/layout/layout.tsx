import React from 'react';
import Header from '../header/header';
import Menus from '../menu/menu';
import './layout.less'

const Layout = (props: any) => {
  return (
    <div className="page-layout">
      <div>
        <Header />
      </div>
      <div>
        <Menus />
        <div className="content">
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Layout;