import React, { Component } from "react";
import Slider from "react-slick";
import { APIIMAGE } from "../API/index";
import Axios from "axios";

class Carousell extends Component {
  state = {
    gambarProduct: []
  };

  componentDidMount() {
    Axios.get(`${APIIMAGE}/home_product/get-carousell/`)
      .then(res => {
        this.setState({ gambarProduct: res.data });
        console.log(this.state.gambarProduct);
      })
      .catch(err => {
        console.log("masuk error");
        console.log(err);
      });
  }

  renderCarousel = () => {
    var gambarProduct = this.state.gambarProduct;
    console.log("ini state produk", gambarProduct);
    console.log(gambarProduct.length);
    if (gambarProduct.length) {
      return gambarProduct.map(val => {
        console.log(val);

        return (
          <div>
            <img src={`${APIIMAGE + val.colomImage}`} alt="Ikan" />
          </div>
        );
      });
    } else {
      return <h1>loading ...</h1>;
    }
  };

  renderData = () => {
    return this.state.gambarProduct.map((val, index) => {
      console.log("renderData", val);
      if (val.kategoriId === 1 || val.kategoriId === 2) {
        return (
          <div>
            <img
              src={`${APIIMAGE + val.colomImage}`}
              alt="Ikan"
              style={{ width: "100%", height: "500px" }}
            />
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render = () => {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      speed: 4000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };

    if (this.state.gambarProduct < 1) {
      return <h1>Loading...</h1>;
    }

    return (
      <div className="container">
        <div style={{ margin: "50px 0" }}>
          <Slider {...settings}>{this.renderData()}</Slider>
        </div>
      </div>
    );
  };
}

export default Carousell;
