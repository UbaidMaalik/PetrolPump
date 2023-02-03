import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getCustomers, deleteCustomer } from "../../actions/customer";
import Header from "../Header";
import SidebarCopy from "../SidebarCopy";
import loadImage from "../../images/1494.gif";
import { Link } from "react-router-dom";
import currency from "../../utils/currency";
import { getTransections } from "../../actions/transection";
import { useParams } from "react-router";
import Customer from "./Customer";

// import editCustomer from "../customer/EditCustomer";
const Customers = ({
  customer: { loading, customers },
  getCustomers,
  deleteCustomer,
}) => {
  useEffect(() => {
    getCustomers();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 dashSidebar px-0">
          <SidebarCopy />
        </div>
        <div className="col-md-10 dasMain px-0">
          <Header />

          <div className="mainContent">
            <div className="container">
              <div className="row">
                {loading && (
                  <img
                    className="mx-auto mt-5"
                    src={loadImage}
                    style={{
                      maxWidth: "100px",
                      borderRadius: "50%",
                    }}
                  />
                )}

                {!loading &&
                  customers.length &&
                  customers.map((customer) => (
                    <Customer
                      customer={customer}
                      key={customer.id}
                      deleteCustomer={deleteCustomer}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
});

export default connect(mapStateToProps, {
  getCustomers,
  deleteCustomer,
})(Customers);
