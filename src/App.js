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
import ManageAdmin from "./Pages/manageAdmin";
import BuyProduct from "./Pages/buyProduct";
import Notfound from "./Pages/notFound";
import Aquarium from "./Pages/aquarium";
import Utilities from "./Pages/utilities";
// import Axios from "axios";

class App extends Component {
  render() {
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
            <Route path="/ProductDetail/:productId" component={ProductDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
