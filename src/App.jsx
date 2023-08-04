import { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./App.css";

function App() {
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
          <div className="box">
            <p className="marvel">CABALLERO</p>
            {/* <!--model--> */}
            <img
              src="https://scrubpro.com/cdn/shop/products/MOT019_Top_Bahama.jpg?v=1663960832"
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
          {/* </li> */}
          {/* <!--2------------------------------> */}
          {/* <li className="item-a"> */}
          {/* <!--slider-box--> */}
          <div className="box">
            <p className="marvel">CABALLERO</p>
            {/* <!--model--> */}
            <img
              src="https://scrubser-shop.com/wp-content/uploads/2018/11/ccUjdDMf.jpeg"
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
          {/* </li> */}
          {/* <!--3------------------------------> */}
          {/* <li className="item-a"> */}
          {/* <!--slider-box--> */}
          <div className="box">
            <p className="marvel">DAMA</p>
            {/* <!--model--> */}
            <img
              src="https://barcomade.com/cdn/shop/files/5105_2262_001_300x.jpg?v=1689090201"
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
          {/* </li> */}
          {/* <!--4------------------------------> */}
          {/* <li className="item-a"> */}
          {/* <!--slider-box--> */}
          <div className="box">
            <p className="marvel">DAMA</p>
            {/* <!--model--> */}
            <img
              src="https://barco.scrubsinfashion.com/wp-content/uploads/sites/10/2021/01/BWT012_G.jpg"
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
          {/* </li> */}
          {/* <!--5------------------------------> */}
          {/* <li className="item-a"> */}
          {/* <!--slider-box--> */}
          <div className="box">
            <p className="marvel">DAMA</p>
            {/* <!--model--> */}
            <img
              src="https://parkersclothing.com/cdn/shop/files/MOT002-01Black_3d602aac-13e0-47ed-85f9-92dc9d81ca88.jpg?v=1682971758&width=533"
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
          {/* </li> */}
          {/* <!--6------------------------------> */}
          {/* <li className="item-a"> */}
          {/* <!--slider-box--> */}
          <div className="box">
            <p className="marvel">DAMA</p>
            {/* <!--model--> */}
            <img
              src="https://www.diamonddesigns.ie/media/catalog/product/cache/1e2e4121981a03d4aff4156d0c6c0cf9/b/u/but167_navy.jpg"
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
          {/* </li> */}
        </Carousel>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;
