import React, { Component } from "react";
// import { Button } from "reactstrap";
import Fade from "react-reveal/Fade";
import Axios from "axios";
import { API, APIIMAGE } from "../API";
import { Link } from "react-router-dom";

class NewProd extends Component {
  componentDidMount() {
    Axios.get(`${API}/home_product/get-dataHome`)
      .then(res => {
        this.setState({ data: res.data });
      })
      .catch(err => console.log(err));
  }

  state = {
    data: []
  };

  renderDataNew = () => {
    return this.state.data.map((val, index) => {
      console.log(index);
      if (index === 0) {
        return (
          <div>
            <div className="kotak1">
              <div className="a  d-flex" style={{ width: "100%" }}>
                <Fade left delay={500}>
                  <div
                    className="image col-6 text-center"
                    style={{ margin: "auto " }}
                  >
                    <img
                      src={APIIMAGE + val.colomImage}
                      alt="Ikan"
                      style={{ width: "60%" }}
                    />
                  </div>
                  <div className="text col-6" style={{ margin: "auto" }}>
                    <h1
                      style={{
                        fontFamily: "Roboto",
                        letterSpacing: "1px"
                      }}
                    >
                      {val.nama}
                    </h1>
                    <p className="text-center">{val.deskripsiAwal}</p>
                    <Link
                      to={`/ProductDetail/${val.id}`}
                      className="btn btn-primary"
                      color="primary"
                    >
                      Detail
                    </Link>
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        );
      } else {
        return (
          <div>
            <div className="kotak2">
              <div className="a  d-flex" style={{ width: "100%" }}>
                <Fade right delay={300}>
                  <div className="text col-6" style={{ margin: "auto" }}>
                    <h1
                      style={{
                        fontFamily: "Roboto",
                        letterSpacing: "1px"
                      }}
                    >
                      {val.nama}
                    </h1>
                    <p className="text-center">{val.deskripsiAwal}</p>
                    <Link
                      outline
                      color="primary"
                      to={`/ProductDetail/${val.id}`}
                    >
                      Detail
                    </Link>
                  </div>
                  <div
                    className="image col-6 text-center"
                    style={{ margin: "auto" }}
                  >
                    <img
                      src={APIIMAGE + val.colomImage}
                      alt="Ikan"
                      style={{ width: "60%" }}
                    />
                  </div>
                </Fade>
              </div>
            </div>
          </div>
        );
      }
    });
  };

  render = () => {
    return (
      <>
        <div className="container">
          <span>
            <h1>NEW ARRIVALS</h1>
          </span>
          {this.renderDataNew()}
        </div>
      </>
    );
  };
}

export default NewProd;
