import { useParams } from "react-router-dom";
import { useContext } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Context } from "../context/AppContext";
import { Link } from "react-router-dom";
import "../App.css";

export default function Single() {
  let { id } = useParams();
  const { store, actions } = useContext(Context);
  console.log(id);
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
            {store.carModels[id].brand + " " + store.carModels[id].model}{" "}
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
            <img src={store.carModels[id].img} className="model" />
            {/* <!--details--> */}
          </Carousel>
          <div className="details">
            <table>
              <thead>
                <tr>
                  <th>header1</th>
                  <th>header2</th>
                  <th>header3</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>text1.1</td>
                  <td>text1.2</td>
                  <td>text1.3</td>
                </tr>
                <tr>
                  <td>text2.1</td>
                  <td>text2.2</td>
                  <td>text2.3</td>
                </tr>
                <tr>
                  <td>text3.1</td>
                  <td>text3.2</td>
                  <td>text3.3</td>
                </tr>
                <tr></tr>
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
