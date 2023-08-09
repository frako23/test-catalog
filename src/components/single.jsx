import { useParams, Link } from "react-router-dom";
import { useContext, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../context/AppContext";

import "../App.css";

export default function Single() {
  let { theId } = useParams();
  const { store, actions } = useContext(Context);
  console.log(theId);
  const [added, setAdded] = useState(false)
  const handleAddToCart = (dato) => {
    console.log(dato);
    actions.addToCart(dato)
    console.log(store.cart);
    setAdded(true)
  }
  return (
    <div className="background-single">
      {/* <!--slider-------------------> */}
      {/* <ul id="autoWidth" className="cs-hidden"> */}
      {/* <!--1------------------------------> */}
      <div className="container">
        {/* <li className="item-a"> */}
        {/* <!--slider-box--> */}

        <div className="box">
          <p className="marvel">
            {store.carModels[theId].brand + " " + store.carModels[theId].model}{" "}
          </p>
          <p className="card-price">${store.carModels[theId].price}</p>
          {/* <!--model--> */}
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
            {store.carModels[theId].brakeImgs.map((img,index) => (<div key={index}>
                    <img src={img} />
                </div>))}
            {/* <!--details--> */}
          </Carousel>
          <div className="details">
            <table className="details-table">
              <thead>
                <tr>
                  <th>Modelo</th>
                  <th>Posicion</th>
                  <th>Tipo</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{store.carModels[theId - 1].brakeModel}</td>
                  <td>{store.carModels[theId - 1].position}</td>
                  <td>{store.carModels[theId - 1].type}</td>
                </tr>
                
              </tbody>
            </table>
            <div className="single-buttons">
            <button 
                  className={added ? "done" : "addtocart" }
                  onClick={
                    () => handleAddToCart(store.carModels[theId])
                    }
                    >
                  <div className={added ? "posttext" : "pretext" }>
                    <i className={added ? "fas fa-check" : "fas fa-cart-plus" }></i>{added ? "Agregado" : "Agregar al carrito" } 
                  </div>
                </button>
                <Link to="/">
                <button className="detail">
                  <div className="pretext">
                    Regresar
                  </div>
                </button>
                </Link>
                </div>
            {/* <!--character-details--> */}
            {/* <p>
                Bruce Bayne invite deadpool to kill the enemy how make distrub
                bat To the Kill The Anymens How MaKE him will be ie.
              </p> */}
          </div>
        </div>

        {/* </ul> */}
      </div>
    </div>
  );
}
