import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";
import "../../styles/styles.css";
import SidebarCopy from "../SidebarCopy";
import Header from "../Header";
import Alert from "../global/Alert";
import loadImage from "../../images/1494.gif";
import { singleCustomer } from "../../actions/customer";
import { useParams } from "react-router";
import EditCustomerForm from "./EditCustomerForm";

const EditCustomer = ({ singleCustomer, customer }) => {
  let { id } = useParams();

  useEffect(() => {
    singleCustomer(id);
  }, [id]);

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
              <div className="col-md-12 align-items-center">
                {!customer && (
                  <img
                    className="mx-auto mt-5"
                    src={loadImage}
                    style={{
                      maxWidth: "100px",
                      borderRadius: "50%",
                    }}
                  />
                )}

                {customer && <EditCustomerForm customer={customer} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer.customer,
});
export default connect(mapStateToProps, { singleCustomer })(EditCustomer);
