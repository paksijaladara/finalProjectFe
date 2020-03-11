import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import IkanAirTawar from "./Pages/IkanAirTawar";
import ikanAirLaut from "./Pages/IkanAirLaut";
import Login from "./Pages/login";
import Register from "./Pages/register";
import ManageUser from "./Pages/manageAdmin/manageProduct";
import ProductDetail from "./Pages/productDetail";
import ManageAdmin from "./Pages/manageAdmin/manageAdmin";
import BuyProduct from "./Pages/buyProduct";
import Notfound from "./Pages/notFound";
import Aquarium from "./Pages/aquarium";
import Utilities from "./Pages/utilities";
import Axios from "axios";
import { API } from "./API";
import { connect } from "react-redux";
import { getChart, reLogin } from "./redux/actions";
import Cart from "./Pages/cart";

class App extends Component {
  state = { loading: true };

  componentDidMount() {
    var id = localStorage.getItem("id");

    if (id) {
      Axios.get(`${API}/LoginRegister/login/${id}`)
        .then(res => {
          console.log("res", res);

          this.props.reLogin(res.data.result);
          console.log("masuk");
        })
        .catch(err => {
          console.log(err);
        });
    }
    this.setState({ loading: false });
  }

  // componentDidMount() {
  //   this.props.getChart();
  // }

  render() {
    // if (this.state.loading) {
    //   return <div>Loading... </div>;
    // }
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path={"/"} exact>
              <Home />
            </Route>
            <Route path={"/"} component={Home} exact />
            <Route path={"/ikanAirTawar"} component={IkanAirTawar} exact />
            <Route path={"/ikanAirLaut"} component={ikanAirLaut} exact />
            <Route path={"/login"} component={Login} exact />
            <Route path={"/register"} component={Register} exact />
            <Route path={"/manageProduct"} component={ManageUser} exact />
            <Route path={"/manageAdmin"} component={ManageAdmin} exact />
            <Route path={"/buyProduct"} component={BuyProduct} exact />
            <Route path={"/notfound"} component={Notfound} exact />
            <Route path={"/notfound"} component={Notfound} exact />
            <Route path={"/aquarium"} component={Aquarium} exact />
            <Route path={"/utilities"} component={Utilities} exact />
            <Route path={"/cart"} component={Cart} exact />
            <Route
              path={"/ProductDetail/:productId"}
              component={ProductDetail}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    userName: state.LoginRegister.userName,
    loading: state.LoginRegister.loading,
    error: state.LoginRegister.error,
    loginStatus: state.LoginRegister.loginStatus
  };
};

export default connect(mapStateToProps, { getChart, reLogin })(App);
