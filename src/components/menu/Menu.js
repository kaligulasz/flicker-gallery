import React from 'react';
import { Link } from 'react-router-dom';

import './menu.scss';

const Menu = () => (
  <ul className="menu clearfix">
    <li className="menu__item">
      <Link href="/" className="menu__link" to="/">Gallery list</Link>
    </li>
  </ul>
);

export default Menu;
