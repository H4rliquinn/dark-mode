import React from 'react';
import {useDarkMode} from '../hooks/useDarkMode';
import {Link} from "react-router-dom";

const Navbar = (props) => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  // console.log("NavDS",localStorage.getItem('darkMode'),darkMode);
  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <Link to="/" onClick={()=>props.cb("/")} className="navLink">Top 10 Coins</Link>
      <Link to="/doge" onClick={()=>props.cb("/doge")} className="navLink">Dogecoin</Link>
      <Link to="/abyss" onClick={()=>props.cb("/abyss")} className="navLink">Abyss</Link>
      <Link to="/mithril" onClick={()=>props.cb("/mithril")} className="navLink">Mithril</Link>
      <Link to="/bitcoen" onClick={()=>props.cb("/bitcoen")} className="navLink">Bitcoen</Link>
      <div className={`dark-mode__toggle`}>
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
