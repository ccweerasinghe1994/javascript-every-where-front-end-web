import React from 'react';
import  Logo  from '../img/logo.svg';

const Header = () => {
  return (
    <header>
      <img src={Logo} alt="logo" height='48'/>
      <h1>NoteMe</h1>
    </header>
  );
};

export default Header;