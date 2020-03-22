import React, { Component } from "react";
// import { FaInstagram } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Contact us</h6>
                <br></br>
                <p className="text-justify">
                  Customer service kami dapat dihubungi 7 hari dalam seminggu.
                  <br />
                  Hari kerja antara pukul: 08.00 - 21.00 akhir pekan pukul:
                  10.00 - 21.00. <br />
                  Call Center : 0811 2342 2342
                </p>
              </div>
              <div className="col-xs-6 col-md-6">
                <h6>Categories</h6>
                <br></br>
                <ul className="footer-links">
                  <li>
                    <a href="/ikanAirTawar">Ikan Air Tawar</a>
                  </li>
                  <li>
                    <a href="/ikanAirLaut">Ikan Air Laut</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      Utilities
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Aquarium
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div style={{ textAlign: "center" }}>
              <p className="copyright-text">
                Aqua Davida © 2020 All Rights Reserved by Paksi
              </p>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
