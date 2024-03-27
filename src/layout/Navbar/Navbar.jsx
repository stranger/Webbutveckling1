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
          <h2 className="nav-title">WLOGG</h2>
        </a>
        <ul className={`nav-links ${clicked ? "nav-active" : "nav-inactive"}`}>
          <li>
            <a onClick={() => setClick(!clicked)} href="#intro">
              Hem
            </a>
          </li>
        </ul>
        <button
          className="navbar-toggle"
          onClick={() => setClick(!clicked)}
          type="button"
          aria-expanded={clicked}
          aria-label="Öppna eller stäng navigation meny"
        >
          {/* aria-hidden för att screen-readers inte ska se ikonen, dom har redan knappen */}
          {clicked ? <span aria-hidden>&times;</span> : <Burger />}
        </button>
      </nav>
    </header>
  );
}
