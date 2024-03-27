import "./Navbar.css";

import { useState } from "react";

import { Burger } from "../../assets/icons.jsx";

export default function Navbar() {
  // förklarat mesta i BlogPost
  const [clicked, setClick] = useState(false);

  return (
    <header className="header">
      <nav className="nav">
        <a onClick={() => setClick(!clicked)} href="#intro">
          <h1 className="nav-title">WLOGG</h1>
        </a>
        <ul className={`nav-links ${clicked ? "nav-active" : "nav-inactive"}`}>
          <a onClick={() => setClick(!clicked)} href="#intro">
            <li>Hem</li>
          </a>
        </ul>
        <button
          className="navbar-toggle"
          onClick={() => setClick(!clicked)}
          type="button"
          aria-expanded={clicked}
          aria-label="Öppna eller stäng navigation meny"
        >
          {/* aria-hidden för att screen-readers inte ska ikonen, dom har redan knappen */}
          {clicked ? <span aria-hidden="true">&times;</span> : <Burger />}
        </button>
      </nav>
    </header>
  );
}
