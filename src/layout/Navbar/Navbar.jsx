import "./Navbar.css";

import { useState } from "react";

import { Burger } from "../../assets/icons.jsx";

export default function Navbar() {
  const [clicked, setClick] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <h1 className="nav-title">WLOGG</h1>
        <ul className={`nav-links ${clicked ? "nav-active" : "nav-inactive"}`}>
          <a href="#intro">
            <li>Hem</li>
          </a>
        </ul>
        <button className="navbar-toggle" onClick={() => setClick(!clicked)}>
          {clicked ? <h1>X</h1> : <Burger />}
        </button>
      </nav>
    </header>
  );
}
