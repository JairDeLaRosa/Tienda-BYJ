import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { CardProducts } from "./components/CardProducts";
import { Footer } from "./components/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <NavBar />
      <div className="container products1">
        <div className="row"><h2 className="h2">Piñatería</h2></div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
            <div class="carousel-item">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
            <div class="carousel-item">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>{" "}
        <br />
        <div className="row"><h2 className="h2">Papeleria</h2></div>
        <div
          id="carouselExampleControls"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
            <div class="carousel-item">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
            <div class="carousel-item">
              <CardProducts />
              <CardProducts />
              <CardProducts />
              <CardProducts />
            </div>
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next "
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>{" "}
        <br />
      </div>
      <Footer/>
    </>
  );
}

export default App;
