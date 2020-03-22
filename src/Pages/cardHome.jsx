import React, { Component } from "react";
import Axios from "axios";
import { API, APIIMAGE } from "../API";
import { Link } from "react-router-dom";

class cardHome extends Component {
  // conponent did mount
  componentDidMount() {
    Axios.get(`${API}/home_product/get-dataCard`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  // local state
  state = {
    data: []
  };

  // function render data
  renderData = () => {
    return this.state.data.map((val, index) => {
      //   if (val.kategoriId === 2) {
      return (
        <div
          className="card"
          style={{ width: "18rem", marginRight: "50px" }}
          key={index}
        >
          <img
            src={APIIMAGE + val.colomImage}
            className="card-img-top"
            alt="ikan"
          />
          <div className="card-body">
            <h3 className="card-title">{val.nama}</h3>
            <Link to={`/ProductDetail/${val.id}`} className="btn btn-primary">
              Detail
            </Link>
          </div>
        </div>
      );
      //   } else {
      //     return null;
      //   }
    });
  };

  render() {
    return (
      <>
        <div>
          <div className="containerHome" style={{ textAlign: "center" }}>
            <h1>Our product</h1>
          </div>
          <div className="cardHome">{this.renderData()}</div>
        </div>
      </>
    );
  }
}

export default cardHome;
