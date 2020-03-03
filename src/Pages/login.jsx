import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBBtn,
  MDBModalFooter
} from "mdbreact";
import { loginAction } from "../redux/actions";
import { connect } from "react-redux";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { Redirect } from "react-router-dom";

class Login extends Component {
  btnLogin = () => {
    var userName = this.userName.value;
    var password = this.password.value;

    this.props.loginAction({
      userName,
      password
    });
  };
  renderError = () => {
    if (this.props.error === "") {
      return null;
    } else {
      return (
        <p
          className="block-example border border-danger"
          style={{
            width: "100%",
            marginLeft: "1cm",
            color: "#dd3c3c",
            fontSize: "12px",
            paddingTop: "11px"
          }}
        >
          {" "}
          <AiOutlineExclamationCircle
            size={20}
            className="mr-2"
            style={{ marginTop: "-5px" }}
          />{" "}
          {this.props.error}{" "}
        </p>
      );
    }
  };

  render() {
    if (this.props.loginstatus) {
      return <Redirect to="/" />;
    }
    return (
      <MDBContainer className="Login" style={{ marginTop: "100px" }}>
        <MDBRow className="login-container">
          <MDBCol md="6 mx-auto">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div className="text-center">
                  <h3 className="dark-grey-text mb-5">
                    <strong>Sign in</strong>
                  </h3>
                </div>
                <MDBInput
                  label="Your username"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  inputRef={ref => (this.userName = ref)}
                />
                <MDBInput
                  label="Your password"
                  group
                  type="password"
                  validate
                  containerClass="mb-0"
                  inputRef={ref => (this.password = ref)}
                />
                <p className="font-small blue-text d-flex justify-content-end pb-3">
                  Forgot
                  <a href="#!" className="blue-text ml-1">
                    Password?
                  </a>
                </p>
                <div className="text-center mb-3">
                  <MDBBtn
                    type="button"
                    gradient="blue"
                    rounded
                    className="btn-block z-depth-1a"
                    onClick={this.btnLogin}
                  >
                    Sign in
                  </MDBBtn>
                </div>
              </MDBCardBody>
              <MDBModalFooter className="mx-5 pt-3 mb-1">
                <p className="font-small grey-text d-flex justify-content-end">
                  Not a member?
                  <a href="/register" className="blue-text ml-1">
                    Sign Up
                  </a>
                </p>
              </MDBModalFooter>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
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
export default connect(mapStateToProps, { loginAction })(Login);
