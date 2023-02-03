import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import Header from "../Header";
import SidebarCopy from "../SidebarCopy";
import loadImage from "../../images/1494.gif";
import MaterialIcon from "material-icons-react";
import { getTransections } from "../../actions/transection";

import { singleCustomer } from "../../actions/customer";
import { useParams } from "react-router";
import TransectionTable from "./TransectionTable";

const DetailTransections = ({
  customer,
  singleCustomer,
  getTransections,
  transection,
}) => {
  let { id } = useParams();

  useEffect(() => {
    singleCustomer(id);
    getTransections(id);
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

                {customer && (
                  <div className="card">
                    <div className="card-header">
                      <h6>Customer Detail</h6>
                    </div>
                    <div className="body p-3">
                      <table>
                        <tr>
                          <td>
                            <MaterialIcon icon="person" color="#008ea1" />{" "}
                            {customer.name}
                          </td>
                          <td>
                            <MaterialIcon icon="smartphone" color="#008ea1" />{" "}
                            {customer.phone}
                          </td>
                          <td>
                            <MaterialIcon icon="badge" color="#008ea1" />{" "}
                            {customer.nic}
                          </td>
                          <td>
                            <MaterialIcon icon="home" color="#008ea1" />{" "}
                            {customer.address}
                          </td>
                        </tr>
                      </table>
                    </div>
                  </div>
                )}
                <TransectionTable transection={transection} />
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
  transection: state.transection,
});
export default connect(mapStateToProps, { singleCustomer, getTransections })(
  DetailTransections
);
