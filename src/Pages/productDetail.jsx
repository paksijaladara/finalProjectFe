import React, { Component } from "react";
import Axios from "axios";
import { API } from "../API/index";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { addCart } from "../redux/actions";
// import { useParams } from "react-router-dom";
// import { Modal, ModalBody, ModalFooter } from "reactstrap";

class ProductDetail extends Component {
  state = {
    detailProduct: {},
    beli: false,
    belumlogin: false,
    goToLogin: false
  };

  componentDidMount() {
    Axios.get(
      `${API}/data_product/detailProduct/${this.props.match.params.productId}`
    )
      .then(res => {
        this.setState({ detailProduct: res.data.detailProduct });
      })
      .catch(err => {
        console.log(err);
      });
  }

  // Function Untuk Quantity Product Yang Ingin Di Beli Customer
  handleInputProduct = e => {
    const { name, value } = e.target;
    this.setState({ ...this.state.detailProduct, [name]: value });
    console.log(this.state.detailProduct);
  };

  btnBeliProduct = () => {
    // this.props.addCart(this.state.detailProduct);
    console.log(this.state.detailProduct);

    // console.log("ok");
  };

  render() {
    if (this.state.goToLogin) {
      return <Redirect to={"/login"} />;
    }
    if (this.state.beli) {
      return (
        <Redirect
          to={{ pathname: "/buyProduct", state: this.state.detailProduct }}
        />
      );
    }

    return (
      <div className="row p-3 mx-3 my-4" style={{ marginTop: "200px" }}>
        <div className="col-md-5 ">
          <img
            src={API + this.state.detailProduct.colomImage}
            height="300"
            alt="gambar"
          />
          <div className="mt-3" style={{ fontSize: "30px" }}>
            {this.state.detailProduct.nama}
          </div>
        </div>

        <div className="col-md-7">
          <table className="table table-borderless mx-3 my-3">
            <tbody>
              <tr>
                <th scope="row">Nama</th>
                <td className="detailProduct">
                  {this.state.detailProduct.nama}
                </td>
              </tr>
              <tr>
                <th scope="row">Deskripsi </th>
                <td className="detailProduct">
                  {this.state.detailProduct.deskripsiFull}
                </td>
              </tr>
              <tr>
                <th scope="row">Harga</th>
                <td className="detailProduct">
                  {this.state.detailProduct.harga}
                </td>
              </tr>
              <tr>
                <th scope="row">Stock</th>
                <td className="detailProduct">
                  {this.state.detailProduct.stock}
                </td>
              </tr>
              <tr>
                <th scope="row">Kategori </th>
                <td className="detailProduct">
                  {this.state.detailProduct.kategori}
                </td>
              </tr>
              <tr>
                <th scope="row">Quantity</th>
                <td className="detailProduct">
                  <input
                    type="number"
                    min={0}
                    name="quantity_product"
                    max={this.state.detailProduct.stock}
                    // defaultValue={0}
                    onChange={this.handleInputProduct}
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div>
            <button
              className="mr-1 btn btn-primary"
              onClick={this.btnBeliProduct}
            >
              Buy Product
            </button>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    error: state.LoginRegister.error,
    userName: state.LoginRegister.userName,
    loginstatus: state.LoginRegister.loginstatus
  };
};

export default connect(mapStateToProps, { addCart })(ProductDetail);
