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
