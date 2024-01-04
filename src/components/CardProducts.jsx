import React from "react";
import producto1 from '../assets/producto1.jpg'

export const CardProducts = () => {
  return (
    <>
      <div class="card">
        <img src={producto1} className="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text name-product">
            <b>Tarjeta de quince años</b>
          </p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Precio</li>
          <li class="list-group-item">$ 15.500</li>
          <li class="list-group-item"><div className="valoration row"><i class="bi bi-star col-1"></i><i class="bi bi-star col-1"></i><i class="bi bi-star col-1"></i><i class="bi bi-star col-1"></i><i class="bi bi-star col-1"></i></div></li>
        </ul>
        <div class="card-body">
          <a href="#" class="card-link">
            Card link
          </a>
          <a href="#" class="card-link">
            Another link
          </a>
        </div>
      </div>
    </>
  );
};
