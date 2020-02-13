import React, { Component } from "react";
import { FaInstagram } from "react-icons/fa";

class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Contact us</h6>
                <p className="text-justify">
                  Customer service kami dapat dihubungi 7 hari dalam seminggu.
                  <br />
                  Hari kerja antara pukul: 08.00 - 21.00 akhir pekan pukul:
                  10.00 - 21.00. <br />
                  Call Center : 0811 2342 2342
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Categories</h6>
                <ul className="footer-links">
                  <li>
                    <a href="http://scanfcode.com/category/c-language/">C</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/front-end-development/">
                      UI Design
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/back-end-development/">
                      PHP
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/java-programming-language/">
                      Java
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/android/">Android</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/category/templates/">
                      Templates
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>Quick Links</h6>
                <ul className="footer-links">
                  <li>
                    <a href="http://scanfcode.com/about/">About Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contact/">Contact Us</a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/contribute-at-scanfcode/">
                      Contribute
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/privacy-policy/">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="http://scanfcode.com/sitemap/">Sitemap</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Aqua Davida © 2020 All Rights Reserved by Paksi
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="/">
                      {/* <i className="fa fa-facebook" /> */}
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="/">
                      {/* <i className="fa fa-twitter" /> */}
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a className="instagram" href="/">
                      {/* <i className="fa fa-instagram" /> */}
                      <FaInstagram />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default Footer;
