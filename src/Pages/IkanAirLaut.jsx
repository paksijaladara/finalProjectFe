import React, { Component } from "react";
import Axios from "axios";
import { API } from "../API";

class IkanLaut extends Component {
  // conponent did mount
  componentDidMount() {
    Axios.get(`${API}/data_product/get-data`)
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
      if (val.kategoriId === 2) {
        return (
          <div className="card" style={{ width: "18rem" }} key={index}>
            <img
              src="https://i1.wp.com/nakamaaquatics.id/wp-content/uploads/2018/11/Bentuk-fisik-hiu-karang-blacktip.png?resize=365%2C236"
              className="card-img-top"
              alt="ikan"
            />
            <div className="card-body">
              <h3 className="card-title">{val.nama}</h3>
              {this.state.readmoreselected === index ? (
                <p className="card-text">
                  {val.deskripsiAwal}
                  <br />
                  <span
                    style={{ color: "blue" }}
                    onClick={() => this.setState({ readmoreselected: -1 })}
                  >
                    Read Less
                  </span>
                </p>
              ) : (
                <p className="card-text">
                  {val.deskripsiAwal
                    .split("")
                    .filter((val, index) => index <= 100)}
                  ...
                  <br />
                  <span
                    style={{ color: "blue" }}
                    onClick={() => this.setState({ readmoreselected: index })}
                  >
                    Read More
                  </span>
                </p>
              )}
              <a href="/" className="btn btn-primary">
                Detail
              </a>
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
        <div className="cardLaut">{this.renderData()}</div>
      </div>
    );
  }
}

export default IkanLaut;
