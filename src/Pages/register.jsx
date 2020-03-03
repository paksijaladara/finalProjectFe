import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody
} from "mdbreact";
import { registerUser } from "../redux/actions";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

export class Register extends Component {
  btnRegister = () => {
    var userName = this.userName.value;
    var email = this.email.value;
    var password = this.password.value;
    var repassword = this.repassword.value;

    if (password === repassword) {
      this.props.registerUser({
        userName,
        email,
        password,
        repassword
      });
    }

    console.log("button");
  };

  renderError = () => {
    if (this.props.error === "") {
      return null;
    } else {
      return (
        <p
          className="block-example border border-danger"
          style={{
            width: "90%",
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
    // if (this.props.register) {
    //   return <Redirect to="/login" />;
    // }
    if (this.props.statusRegister) {
      return <Redirect to="/login" />;
    }
    return (
      <MDBContainer className="Register" style={{ marginTop: "80px" }}>
        <MDBRow className="Register-container">
          <MDBCol md="6 mx-auto">
            <MDBCard>
              <MDBCardBody className="mx-4">
                <div>
                  <p className="h4 text-center py-4">Sign up</p>
                  <div className="grey-text">
                    <MDBInput
                      label="Your name"
                      icon="user"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                      inputRef={ref => (this.userName = ref)}
                    />
                    <MDBInput
                      label="Your email"
                      icon="envelope"
                      group
                      type="email"
                      validate
                      inputRef={ref => (this.email = ref)}
                    />
                    <MDBInput
                      label="Your password"
                      icon="lock"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      inputRef={ref => (this.password = ref)}
                    />
                    <MDBInput
                      label="Confirm your password"
                      icon="exclamation-triangle"
                      group
                      type="password"
                      validate
                      error="wrong"
                      success="right"
                      inputRef={ref => (this.repassword = ref)}
                    />
                  </div>
                  <div className="text-center py-4 mt-3">
                    <MDBBtn
                      onClick={this.btnRegister}
                      color="cyan"
                      type="submit"
                    >
                      Register
                    </MDBBtn>
                  </div>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

const MapStateToProps = state => {
  return {
    error: state.LoginRegister.error,
    register: state.LoginRegister.error,
    LoginRegister: state.LoginRegister,
    statusRegister: state.LoginRegister.statusregister
  };
};

export default connect(MapStateToProps, { registerUser })(Register);
