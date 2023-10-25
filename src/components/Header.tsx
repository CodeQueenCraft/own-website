import React from "react";
import "./Header.scss";
import logo from "../assets/logo.svg";

class Header extends React.Component {
  render() {
    return (
      <header className="app-header">
        <div className="header-container-wrap">
          <div className="header-container">
            <a href="/">
              <img id="logo" src={logo} alt="Logo" />
            </a>
            <nav id="mainnavigation">
              <ul className="navbar">
                <li className="navbar-item">
                  <a className="navbar-item-link" id="nav-item-1" href="/">
                    Home
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    className="navbar-item-link"
                    id="nav-item-2"
                    href="/projects"
                  >
                    Projekte
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    className="navbar-item-link"
                    id="nav-item-3"
                    href="/ueber-mich"
                  >
                    Über mich
                  </a>
                </li>
                <li className="navbar-item">
                  <a
                    className="navbar-item-link"
                    id="nav-item-4"
                    href="/kontakt"
                  >
                    Kontakt
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
