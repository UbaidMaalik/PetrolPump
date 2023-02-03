import React, { useState } from "react";
import { connect } from "react-redux";
import Alert from "../global/Alert";
import { updateCustomer } from "../../actions/customer";
import { Redirect, useHistory } from "react-router";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";

const EditCustomerForm = ({ customer, updateCustomer }) => {
  const [state, setState] = useState({
    name: customer.name,
    phone: customer.phone,
    nic: customer.nic,
    address: customer.address,
  });

  const { name, phone, nic, address } = state;

  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();

    updateCustomer(customer.id, state);
  };

  return (
    <div>
      <div className="back">
        <Link to={`/customers`}>
          <MaterialIcon icon="arrow_back" color="#008ea1" />
          Back To Customers Page
        </Link>
      </div>
      <form onSubmit={onSubmit} id="edit-customer">
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
              <label className="form-control-label">PHONE NUMBER</label>
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
              UPDATE
            </button>
          </div>
        </div>
      </form>
      <div className="message">
        <Alert />
      </div>
    </div>
  );
};

export default connect(null, { updateCustomer })(EditCustomerForm);
