import React from 'react';

import './styles.css';

const Navbar = ({ name }) => {
  return (
    <div className="nav">{name}</div>
  );
}

export default Navbar;