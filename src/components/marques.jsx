import React, { Component } from "react";
import Slider from "react-slick";
import Nike from "../logo/Nike.png";
import Adidas from "../logo/Adidas.png";
import Reebok from "../logo/Reebok.png";
import Puma from "../logo/Puma.png";
import Asics from "../logo/Asics.png";
import Converse from "../logo/Converse.png";




export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500
    };
    return (
      <div className="MarquesBox">

        <Slider {...settings}>
          <div>
            <div className="Marques">
                <img src={Nike} alt="Nike" className="logo" style={{width: 130}}/>
            </div>
            <h3>Nike</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Adidas} alt="Adidas" className="logo" style={{width: 120}}/>
            </div>
            <h3>Adidas</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Puma} alt="Puma" className="logo" style={{width: 150}}/>
            </div>
            <h3>Puma</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Converse} alt="Converse" className="logo" style={{width: 160}}/>
            </div>
            <h3>Converse</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Asics} alt="Asics" className="logo" style={{width: 180}}/>
            </div>
            <h3>Asics</h3>
          </div>
          <div>
            <div className="Marques">
                <img src={Reebok} alt="Reebok" className="logo" style={{width: 180}}/>
            </div>
            <h3>Reebok</h3>
          </div>
        </Slider>
      </div>
    );
  }
}