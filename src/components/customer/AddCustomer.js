import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import "../../styles/styles.css";
import { newCustomer } from "../../actions/customer";
import Alert from "../global/Alert";
import SidebarCopy from "../SidebarCopy";
import Header from "../Header";

const AddCustomer = ({ newCustomer }) => {
  const [state, setState] = useState({
    name: "",
    phone: "",
    nic: "",
    address: "",
  });
  const { name, phone, nic, address } = state;
  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();

    // add
    newCustomer(state);

    setState({
      name: "",
      phone: "",
      nic: "",
      address: "",
    });
  };

  return (
    <Fragment>
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-2 dashSidebar px-0">
            <SidebarCopy />
          </div>
          <div className="col-md-10 dasMain px-0">
            <Header />
            <div className="mainContent">
              <div className="col-md-12">
                <form onSubmit={onSubmit} className="customers-page">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">NAME</label>
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          onChange={onChange}
                          value={name}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">
                          PHONE NUMBER
                        </label>
                        <input
                          type="text"
                          className="form-control"
                          name="phone"
                          id="phone"
                          onChange={onChange}
                          value={phone}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">NIC NUMBER</label>
                        <input
                          type="text"
                          className="form-control"
                          name="nic"
                          id="nic"
                          onChange={onChange}
                          value={nic}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="form-control-label">ADDRESS</label>
                        <input
                          type="text"
                          className="form-control"
                          name="address"
                          id="address"
                          onChange={onChange}
                          value={address}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 loginbttm">
                    <div className="col-lg-12 login-btm login-button">
                      <button type="submit" className="btn btn-outline-primary">
                        SUBMIT
                      </button>
                    </div>
                  </div>
                </form>
                <div className="message">
                  <Alert />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default connect(null, { newCustomer })(AddCustomer);
