import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Link} from "react-router-dom";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/">Top 10 Coins</Link>
      <Link to="/doge">Dogecoin</Link>
      <Link to="/abyss">Abyss</Link>
      <Link to="/mithril">Mithril</Link>
      <Link to="/bitcoen">Bitcoen</Link>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
