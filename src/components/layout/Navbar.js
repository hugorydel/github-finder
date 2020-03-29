/** @format */
import React from 'react';
//impt shortcut
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//can import with rce
const Navbar = ({ icon, title }) => {
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={icon} /> {title}
      </h1>
      <ul>
        <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
      </ul>
    </nav>
  );
};

//defaultProps is an actual property that gets overwritten by existing .props.x if they exist.
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar;
