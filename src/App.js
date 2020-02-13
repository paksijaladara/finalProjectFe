import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import Carousell from "./support/carousel";
import Home from "./Pages/Home";
import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import IkanAirTawar from "./Pages/IkanAirTawar";
import ikanAirLaut from "./Pages/IkanAirLaut";
import Footer from "./Pages/footer";
import Login from "./Pages/login";
import Register from "./Pages/register";
import ManageUser from "./Pages/manageAdmin/manageProduct";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Switch>
            <Route path={"/"} exact>
              <Carousell />
              <Home />
            </Route>
            <Route path={"/ikanAirTawar"} component={IkanAirTawar} exact />
            <Route path={"/ikanAirLaut"} component={ikanAirLaut} exact />
            <Route path={"/login"} component={Login} exact />
            <Route path={"/register"} component={Register} exact />
            <Route path={"/manageProduct"} component={ManageUser} exact />
          </Switch>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
