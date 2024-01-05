import React from "react";
import logo from "../assets/logo.jpg";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  const navigate=useNavigate()
  const login=()=> navigate('/Login')

  return (
    <>
      <nav className="navbar">
        <div className="col-2">
          <img src={logo} alt="Logo" className="logo" />
        </div>
        <div className="col-3">
          <form class="d-flex">
            <input
              class="form-control me-2 "
              type="search"
              placeholder="Buscar producto"
              aria-label="Search"
            />
            <button class="btn btn-secondary search" type="submit">
            <i class="bi bi-search"></i>
            </button>
          </form>
        </div>
        <div className="col-1 col-nav">
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
                  Escolar
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Modistería
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Papeles
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Fiestas
                </a>
              </li><li>
                <a class="dropdown-item" href="#">
                  regalos
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Carnavales
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Navidad
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Halloween                
                  </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1 col-nav">
          <button className="btn btn-outline-light">Papelería <i class="bi bi-book"></i></button>
        </div>
        <div className="col-1 col-nav">
          <button className="btn btn-outline-light">Piñatería <i class="bi bi-gift"></i></button>
        </div>
        <div className="col-1 col-nav">
          <button className="btn btn-outline-light">Tu carrito <i class="bi bi-cart3"><span className="cant-carrito">2</span><i class="bi bi-circle-fill"></i></i></button>
        </div>
        <div className="col-1 col-nav">
          <button className="btn btn-outline-light">Login <i class="bi bi-person" ></i></button>
        </div>
        
      </nav>
    </>
  );
};
