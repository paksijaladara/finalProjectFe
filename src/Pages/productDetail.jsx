import React, { Component } from "react";
import Axios from "axios";
import { API } from "../API/index";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { addCart } from "../redux/actions";
// import { useParams } from "react-router-dom";
import { Modal, ModalBody, ModalFooter } from "reactstrap";
import Numeral from "numeral";

class ProductDetail extends Component {
  state = {
    detailProduct: undefined,
    quantity_product: 1,
    beli: false,
    belumlogin: false,
    openModal: false,
    totalHarga: []
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
  handleQuantityProduct = e => {
    const { value } = e.target;
    this.setState({ quantity_product: value });
  };

  btnBeliProduct = () => {
    var dataCart = {
      id_product: this.state.detailProduct.id,
      quantity_product: this.state.quantity_product
    };
    this.props.addCart(dataCart);
    this.setState({ openModal: true });
  };

  renderHargaQuantity = () => {
    var jumlahQuantity = this.state.quantity_product;
    var Price = jumlahQuantity * this.state.detailProduct.harga;
    return <div> {"Rp" + Numeral(Price).format("0,0.00")}</div>;
  };

  render() {
    console.log(this.props.loginstatus);

    if (!this.props.loginstatus) {
      return <Redirect to={"/login"} />;
    }
    if (this.state.detailProduct === undefined) {
      return <div> Loading ... </div>;
    }

    return (
      <div>
        <Modal isOpen={this.state.openModal}>
          <ModalBody>Product berhasil di tambahkan ke Cart</ModalBody>
          <ModalFooter>
            <Link to="/">
              <button
                onClick={() => this.setState({ openModal: false })}
                className="btn btn-primary"
                style={{ color: "white" }}
              >
                OK
              </button>
            </Link>
          </ModalFooter>
        </Modal>

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
                    {"Rp" +
                      Numeral(this.state.detailProduct.harga).format("0,0.00")}
                    {/* Rp. {this.state.detailProduct.harga} */}
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
                      min={1}
                      name="quantity_product"
                      max={this.state.detailProduct.stock}
                      defaultValue={1}
                      onChange={this.handleQuantityProduct}
                    />
                  </td>
                </tr>
                <tr>
                  <th>Total</th>
                  <td className="detailProduct">
                    {this.renderHargaQuantity()}
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
