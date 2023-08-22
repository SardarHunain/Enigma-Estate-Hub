import React from "react";

export default function Carousel() {
  return (
    <section className=" ">
      <h1 className="text-4xl text-yellow-600">
        <b>Best Choices</b>
      </h1>

      <h4 className="text-3xl text-blue-600">
        <b>Popular Residencies</b>
      </h4>

      <div>
        <div id="carouselExampleDark" class="carousel carousel-fade carousel-light slide  w-50 m-auto">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <img src="./Img/r1.png" class="d-block w-100" alt="home1" />
              <div class="carousel-caption d-none d-md-block">
                <h3>Aliva Priva Jardin</h3>
                <h4>
                  $ 47,043
                </h4>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img src="./Img/r2.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block">
                <h3>Asatti Garden City</h3>
                <h4>
                  $ 66,353
                </h4>
              </div>
            </div>

            
            <div class="carousel-item">
              <img src="./Img/r3.png" class="d-block w-100" alt="..." />
              <div class="carousel-caption d-none d-md-block ">
                <h3 text->Citralan Puri Serang</h3>
                <h4>
                   $ 35,853
                </h4>
              </div>
            </div>

            
          </div>
          <button
            class="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </section>
  );
}
