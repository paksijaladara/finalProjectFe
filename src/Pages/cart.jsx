import React, { Component } from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { connect } from "react-redux";
import { getChart, deleteCart } from "../redux/actions";
import { APIIMAGE } from "../API/index";

class Cart extends Component {
  componentDidMount() {
    this.props.getChart();
  }

  // componentDidUpdate() {
  //   this.props.getChart();
  // }

  deleteCart(data) {
    this.props.deleteCart(data);
  }

  renderCart = () => {
    var datacart = this.props.dataCart;
    return datacart.map((val, index) => {
      console.log(val);
      let data = {
        id: val.id,
        id_user: val.id_user
      };
      return (
        <ExpansionPanel>
          <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>
              <div className="dataCart">
                <div>
                  <img
                    className="img-cart"
                    src={`${APIIMAGE + val.colomImage}`}
                    alt="ikan"
                  />
                </div>
                <div>
                  <span>{val.nama}</span>
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
                <span>Rp. {val.harga}</span>
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
        <h1>Cart</h1>
        <div>{this.renderCart()}</div>
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
