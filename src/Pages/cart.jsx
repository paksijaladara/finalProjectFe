import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { getChart, deleteCart } from "../redux/actions";
import { APIIMAGE } from "../API/index";
import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

class Cart extends Component {
  // state = {
  //   cart: useSelector(state => state.TransaksiReducers.addCart)
  // };

  componentDidMount() {
    this.props.getChart();
  }

  deleteCart(data) {
    this.props.deleteCart(data);
  }

  checkOut = () => {};

  renderCart = () => {
    var datacart = this.props.dataCart;
    return datacart.map((val, index) => {
      console.log(val);
      let data = {
        id_detail: val.id_detail
      };
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography style={{ width: "100%" }}>
              <div className="dataCart">
                <div>
                  <img
                    className="img-cart"
                    src={`${APIIMAGE + val.colomImage}`}
                    alt="ikan"
                  />
                </div>
                <div style={{ margin: "auto" }}>
                  <span style={{ textAlign: "center", fontSize: "25px" }}>
                    {val.nama}
                  </span>
                </div>
              </div>
            </Typography>
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <Typography style={{ display: "flex", width: "100%" }}>
              <div
                style={{
                  width: "50%",
                  textAlign: "start"
                }}
              >
                <span>Rp. {val.harga * val.quantity_product}</span>
              </div>
              <div
                style={{
                  width: "50%",
                  textAlign: "end"
                }}
              >
                <div
                  className="btn btn-danger"
                  onClick={() => this.deleteCart(data)}
                >
                  delete
                </div>
              </div>
            </Typography>
          </ExpansionPanelDetails>
        </ExpansionPanel>
      );
    });
  };

  render() {
    return (
      <div className="cartUser">
        <h1 style={{ marginBottom: "30px" }}>Cart</h1>
        <div style={{ marginBottom: "50px" }}>{this.renderCart()}</div>
        <div>
          {this.props.dataCart.length > 0 ? (
            <Link to={"/checkout"}>
              <button>Check Out</button>
            </Link>
          ) : null}
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

export default connect(mapStateToProps, { getChart, deleteCart })(Cart);
