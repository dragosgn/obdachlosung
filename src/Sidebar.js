// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu right>
      <a className="menu-item" href="/">
        Info
      </a>
    </Menu>
  );
};