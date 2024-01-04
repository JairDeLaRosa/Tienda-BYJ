import React from "react";
import logo from "../assets/logo.jpg";

export const NavBar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="col-2">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="col-1">
          <div class="dropdown ">
            <button
              class="btn btn-outline-light dropdown-toggle categories"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Categorías
            </button>
            <ul class="dropdown-menu">
              <li>
                <a class="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1">
          <button className="btn btn-outline-light">Papelería</button>
        </div>
        <div className="col-1">
          <button className="btn btn-outline-light">Piñatería</button>
        </div>
        <div className="col-4 search">
          <form class="d-flex">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Buscar producto"
              aria-label="Search"
            />
            <button class="btn btn-secondary" type="submit">
              Buscar
            </button>
          </form>
        </div>
      </nav>
    </>
  );
};
