import React, { useEffect, Fragment, useState } from "react";
import { connect } from "react-redux";

import Header from "../Header";
import SidebarCopy from "../SidebarCopy";
import EditTransectionForm from "./EditTransectionForm";
import loadImage from "../../images/1494.gif";
import { singleTransection } from "../../actions/transection";
import { getCustomers } from "../../actions/customer";

import { useParams } from "react-router";

const EditTransection = ({
  singleTransection,
  transection,
  getCustomers,
  customer: { customers, loading },
}) => {
  let { id, type } = useParams();

  useEffect(() => {
    singleTransection(id);
    getCustomers();
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
                {!transection && (
                  <img
                    className="mx-auto mt-5"
                    src={loadImage}
                    style={{
                      maxWidth: "100px",
                      borderRadius: "50%",
                    }}
                  />
                )}

                {transection && customers.length && (
                  <EditTransectionForm
                    transection={transection}
                    customers={customers}
                    loading={loading}
                    type={type}
                  />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  transection: state.transection.transection,
  customer: state.customer,
});
export default connect(mapStateToProps, { singleTransection, getCustomers })(
  EditTransection
);
