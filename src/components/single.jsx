import { useParams } from "react-router-dom";
import { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../context/AppContext";

import "../App.css";

export default function Single() {
  let { theId } = useParams();
  const { store, actions } = useContext(Context);
  console.log(theId);
  return (
    <div className="background">
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
            <img src={store.carModels[theId].img} className="model" />
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
