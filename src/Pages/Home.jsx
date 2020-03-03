import React, { Component } from "react";
import NewProd from "./newProd";
import CardHome from "./cardHome";
import Carousell from "../support/carousel";
import Footer from "./footer";

class Home extends Component {
  render() {
    return (
      <div>
        <Carousell />
        <NewProd />
        <CardHome />
        <Footer />
      </div>
    );
  }
}

export default Home;
