import React, { Component } from "react";
import { APIIMAGE } from "../API/index";
import { getChart } from "../redux/actions";
import { connect } from "react-redux";
import Numeral from "numeral";

class CheckOut extends Component {
  componentDidMount() {
    this.props.getChart();
  }

  // Function Looping Total Harga
  totalHarga = () => {
    var dataCart = this.props.dataCart;
    let total = 0;
    for (let i = 0; i < dataCart.length; i++) {
      total += dataCart[i].harga * dataCart[i].quantity_product;
    }
    return <div>{"Rp " + Numeral(total).format("0,0.00")}</div>;
  };

  renderCheckout = () => {
    var dataCart = this.props.dataCart;
    return dataCart.map((val, index) => {
      return (
        <div className="checkOut">
          <div>
            <img
              className="img-checkOut"
              src={`${APIIMAGE + val.colomImage}`}
              alt="foto"
            />
          </div>
          <div className="checkOutNama">
            <span>{val.nama}</span>
          </div>
          <div style={{ margin: "auto" }}>
            <span>
              {"Rp" +
                Numeral(val.harga * val.quantity_product).format("0,0.00")}
            </span>
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div
          style={{
            height: "100px",
            marginTop: "35px"
          }}
        >
          {" "}
          <h1>PAYMENT</h1>{" "}
        </div>
        <div className="d-flex" style={{ marginBottom: "50px" }}>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column"
            }}
          >
            <h1>Data Customers</h1>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "20px",
                marginBottom: "20px"
              }}
            >
              <p>Your Adress</p>
              <textarea
                className="form-control"
                rows="3"
                style={{
                  width: "60%",
                  margin: "0 auto",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              ></textarea>
              <p style={{ marginTop: "20px", marginBottom: "20px" }}>
                Your Phone
              </p>
              <input
                className="form-control"
                type="text"
                style={{
                  width: "60%",
                  margin: "0 auto",
                  marginTop: "20px",
                  marginBottom: "20px"
                }}
              ></input>
              <div
                style={{
                  width: "60%",
                  margin: "0 auto",
                  marginTop: "25px",
                  marginBottom: "20px"
                }}
              >
                <p>Evidence transfer payments</p>
                <input className="form control" type="file"></input>
              </div>
            </div>
          </div>
          <div className="d-flex" style={{ width: "50%" }}>
            <div
              style={{
                width: "100%",
                display: "flex",
                flexDirection: "column"
              }}
            >
              <h1>Your Order Detail</h1>
              <div style={{ marginBottom: "20px", marginTop: "20px" }}>
                <p>Product</p>
              </div>
              <div>{this.renderCheckout()}</div>
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  width: "100%"
                }}
              >
                <div>Total harga </div>
                <div style={{ margin: "auto" }}>{this.totalHarga()}</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <button className="btn btn-primary"> Buy </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    dataCart: state.TransaksiReducers.dataCart
  };
};
export default connect(mapStateToProps, { getChart })(CheckOut);
