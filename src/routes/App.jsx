import { useState, useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../context/AppContext";
import { Link } from "react-router-dom";
import "../App.css";

function App() {
  const { store, actions } = useContext(Context);
  const handleAddToCart = (dato) => {
    console.log(dato);
    actions.addToCart(dato)
    console.log(store.cart);
  }

  console.log(store.carModels);
  return (
    <div className="background">
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
          {store.carModels.map((dato, index) => (
            <div className="box" key={index}>
              <p className="marvel">{dato.brand + " " + dato.model} </p>
              {/* <!--model--> */}
              <img src={dato.img} className="model" />
              {/* <!--details--> */}
              <div className="details">
                {/* <!--logo-character--> */}
                <Link to={`single/${dato.id}`}>
                <button className="detail">
                  <div className="pretext">
                    Más Detalles
                  </div>
                </button>
                </Link>

                <button 
                  className={store.cart.find(model => model.id == dato.id) ? "done" : "addtocart" }
                  onClick={
                    () => handleAddToCart(dato)
                    }
                    >
                  <div className={store.cart.find(model => model.id == dato.id) ? "posttext" : "pretext" }>
                    <i className={store.cart.find(model => model.id == dato.id) ? "fas fa-check" : "fas fa-cart-plus" }></i>{store.cart.find(model => model.id == dato.id) ? "Agregado" : "Agregar al carrito" } 
                  </div>
                </button>
                {/* <!--character-details--> */}
                {/* <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p> */}
              </div>
            </div>
          ))}{" "}
        </Carousel>
        {/* </ul> */}
      </div>
    </div>
  );
}

export default App;
