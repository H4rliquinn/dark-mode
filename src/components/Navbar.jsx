import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/" onClick={()=>props.cb("/")}>Top 10 Coins</Link>
      <Link to="/doge" onClick={()=>props.cb("/doge")}>Dogecoin</Link>
      <Link to="/abyss" onClick={()=>props.cb("/abyss")}>Abyss</Link>
      <Link to="/mithril" onClick={()=>props.cb("/mithril")}>Mithril</Link>
      <Link to="/bitcoen" onClick={()=>props.cb("/bitcoen")}>Bitcoen</Link>
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
