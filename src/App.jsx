import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";
import { data } from "../src/assets/data/data"

function App() {
  const datos = data
  return (
    <div className="background">
      <h1 className="title">Venta de pastillas de freno</h1>

      {/* <!--slider-------------------> */}
      {/* <ul id="autoWidth" className="cs-hidden"> */}
      {/* <!--1------------------------------> */}
      <div className="container">
        {/* <li className="item-a"> */}
        {/* <!--slider-box--> */}
        <Carousel
          howArrows={true}
          centerMode={true}
          autoFocus={true}
          autoPlay={true}
          emulateTouch={true}
          infiniteLoop={true}
          showThumbs={false}
          // width={"25%"}
          useKeyboardArrows={true}
          // onChange={onChange}
          // onClickItem={onClickItem}
          // onClickThumb={onClickThumb}
        >

          {datos.map ((dato, index) => (
          <div className="box" key={index}>
            <p className="marvel">{dato.brand + " " + dato.model} </p>
            {/* <!--model--> */}
            <img
              src={dato.img}
              className="model"
            />
            {/* <!--details--> */}
            <div className="details">
              {/* <!--logo-character--> */}
              <img
                src="https://images.squarespace-cdn.com/content/v1/5ea84fc273b84e6a6a29ca5a/1591139961533-M0PI19YPPL5P5IT9AX1R/barco.png?format=1000w"
                className="logo"
                width="100px"
                style={{ height: "auto" }}
              />
              {/* <!--character-details--> */}
              {/* <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p> */}
            </div>
          </div>


          ))}        </Carousel>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;
