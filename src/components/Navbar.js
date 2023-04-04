import React, { useState } from "react";
// import { a } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand nav-head">Gerícht</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse small-nav"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-item">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-item">Pages</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-item">Contact Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-item">Blog</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-item">Landing</a>
              </li>
            </ul>
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link nav-link-item login">
                  Login/Registration
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-link-item">Book Table</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
