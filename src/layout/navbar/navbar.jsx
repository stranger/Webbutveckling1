import "./navbar.css";

import { useState } from "react";

import { Burger } from "../../assets/icons.jsx";

export default function Navbar() {
  const [clicked, setClick] = useState(false);

  return (
    <nav className="nav">
      <h1 className="nav-title">EYECANDY</h1>
      <ul className={`nav-links ${clicked ? "nav-active" : "nav-inactive"}`}>
        <a href="">
          <li>Store</li>
        </a>
        <a href="">
          <li>Account</li>
        </a>
      </ul>
      <button className="navbar-toggle" onClick={() => setClick(!clicked)}>
        {clicked ? <h1>X</h1> : <Burger />}
      </button>
    </nav>
  );
}
