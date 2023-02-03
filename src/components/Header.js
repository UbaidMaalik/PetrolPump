import React, { Fragment } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router";
import { logout } from "../actions/auth";
import "../styles/header.css";
const Header = ({ loading, user, logout }) => {
  let history = useHistory();

  const logUserOut = () => {
    logout();

    history.push("login"); // redirect to login
  };
  return (
    <Fragment>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <p>
            <label for="menu">
              <span class="fa fa-bars"></span>
            </label>
          </p>
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a className="nav-link" href="#" onClick={logUserOut}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/*  */}
    </Fragment>
  );
};

export default connect(null, { logout })(Header);
