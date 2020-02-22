// sidebar.js

import React from 'react';
import { slide as Menu } from 'react-burger-menu';

export default props => {
  return (
    <Menu right>
      <a className="menu-item title" href="/">
        Obdachlösung
      </a>

      <span className="description">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In porta elit a dui congue elementum eget vitae purus. Aenean eget ornare libero. Ut suscipit sodales arcu, id efficitur lectus fringilla quis. Fusce nec nunc vitae neque pellentesque interdum. Phasellus dictum bibendum lectus, sed maximus sem tincidunt eget.
      </span>
    </Menu>
  );
};