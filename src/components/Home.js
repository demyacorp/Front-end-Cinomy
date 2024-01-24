import React from "react";
import "../css/App.css";
import SliderComponent from "./SliderComponent";
import Carousel from "./Carousel";
import DefaultLayout from "../layout/DefaultLayout.tsx";
import ImageBanner from "./imageBanner.js"
import Footer from "./footer"
import CarouselEstrenos from "./CarouselEstrenos.js";

function Home() {
  return (
    <DefaultLayout>
      <div className="App">
        <div className="MainBanner">
          <SliderComponent />
        </div>

        <div className="Carousel-Cartelera">
          <h1>Cartelera</h1>
          <Carousel />
          <br></br>
        </div>

        <div className="banner">
          <ImageBanner />
        </div>

        <div className="Carousel-Estrenos">
          <h1>Estrenos</h1>
          <CarouselEstrenos/>
          <br>
          </br>
        </div>

        <Footer/>
      </div>
    </DefaultLayout>
  );
}

export default Home;
