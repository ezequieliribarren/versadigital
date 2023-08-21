import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <span className="imgSmall">
          <img src="/images/imgSmall.webp" alt="Logo" />
        </span>
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <div className="flexNav">
                <li className="nav-item">
                  <Link smooth to="/#servicios" className="nav-link">
                    servicios
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="/#clientes" className="nav-link">
                    clientes
                  </Link>
                </li>
              </div>
              <a className="nav-link" href="#">
                <img className="versaNav" src="/images/logoNav.png" alt="Logo" />
              </a>
              <div className="flexNav">
                <li className="nav-item">
                  <Link smooth to="/#nosotros" className="nav-link">
                    nosotros
                  </Link>
                </li>
                <li className="nav-item">
                  <Link smooth to="/#contacto" className="nav-link contact">
                    contacto
                  </Link>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;