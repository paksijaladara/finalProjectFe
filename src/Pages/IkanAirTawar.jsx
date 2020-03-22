import React, { Component } from "react";
import Axios from "axios";
import { API, APIIMAGE } from "../API";
import { Link } from "react-router-dom";
// import { Button } from "reactstrap";

class IkanAirTawar extends Component {
  // komponen did mount
  componentDidMount() {
    Axios.get(`${API}/home_product/get-data?kategoriId=1`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  // local state
  state = {
    data: [],
    readmoreselected: false
  };

  // function render data
  renderData = () => {
    return this.state.data.map((val, index) => {
      if (val.kategoriId === 1) {
        return (
          <div className="card" style={{ width: "21rem" }} key={index}>
            <img
              src={APIIMAGE + val.colomImage}
              className="card-img-top"
              alt="ikan"
            />
            <div className="card-body">
              <h3 className="card-title" style={{ height: "40px" }}>
                {val.nama}
              </h3>
            </div>
            <div>
              <Link to={`/ProductDetail/${val.id}`}>
                <button className="btn btn-outline-primary btn-sm">
                  Detail
                </button>
              </Link>
            </div>
          </div>
        );
      } else {
        return null;
      }
    });
  };

  render() {
    return (
      <div style={{ display: "flex" }}>
        <div className="cardTawar">{this.renderData()}</div>
      </div>
    );
  }
}

export default IkanAirTawar;
