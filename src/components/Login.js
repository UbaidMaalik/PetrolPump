import React, { useState, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import Dashboard from "./Dashboard";

import { login } from "../actions/auth";
import { connect } from "react-redux";

import loginStyles from "../styles/login.css";
import Alert from "./global/Alert";

const Login = ({ login, auth }) => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { email, password } = state;
  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });

  const onSubmit = (e) => {
    e.preventDefault();

    // Create account
    login(email, password);

    setState({
      email: "",
      password: "",
    });
  };

  if (!auth.loading && auth.isAuthenticated) {
    return <Redirect to={Dashboard} />;
  }
  return (
    <div className="form">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-2"></div>
          <div className="col-lg-6 col-md-8 login-box">
            <div className="col-lg-12 login-key">
              <i className="fa fa-key" aria-hidden="true"></i>
            </div>
            <div className="col-lg-12 login-title">ADMIN PANEL</div>

            <div className={`col-lg-12 ${loginStyles.login_form}`}>
              <div className="col-lg-12 login_form">
                <form onSubmit={onSubmit}>
                  <div className="form-group">
                    <label className="form-control-label">USERNAME</label>
                    <input
                      type="email"
                      className="form-control"
                      onChange={onChange}
                      name="email"
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-control-label">PASSWORD</label>
                    <input
                      type="password"
                      className="form-control"
                      onChange={onChange}
                      name="password"
                    />
                  </div>

                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-12 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        LOGIN
                      </button>
                    </div>
                  </div>
                </form>
                <Alert />
              </div>
            </div>
            <div className="col-lg-3 col-md-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { login })(Login);
