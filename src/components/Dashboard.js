import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import "../styles/dashboard.css";
import Header from "./Header";
import SidebarCopy from "./SidebarCopy";
// import MaterialIcon from "material-icons-react";
import loadImage from "../images/1494.gif";
import { getCurrentPrices } from "../actions/price";
import currency from "../utils/currency";
import FuelChart from "./FuelChart";

const Dashboard = ({ getCurrentPrices, current_price }) => {
  useEffect(() => {
    getCurrentPrices();
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 dashSidebar px-0">
          {/* <Sidebar /> */}
          <SidebarCopy />
        </div>
        <div className="col-md-10 dasMain px-0">
          <Header />

          <div className="mainContent">
            <div className="container">
              <div className="row">
                {!current_price && (
                  <img
                    className="mx-auto mt-5"
                    src={loadImage}
                    style={{
                      maxWidth: "100px",
                      borderRadius: "50%",
                    }}
                  />
                )}
                {current_price && (
                  <Fragment>
                    <div className="col-lg-4 mt-3 dash">
                      PETROL
                      <p>{currency(current_price.petrol)}</p>
                    </div>
                    <div className="col-lg-4 mt-3 dash">
                      DIESEL
                      <p>{currency(current_price.diesel)}</p>
                    </div>
                    <div className="col-lg-4 mt-3 dash">
                      SUPREME
                      <p>{currency(current_price.supreme)}</p>
                    </div>
                  </Fragment>
                )}
              </div>
              <div className="row">
                <div className="col-md-6 mt-5">
                  <FuelChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  current_price: state.price.current_price,
});
export default connect(mapStateToProps, { getCurrentPrices })(Dashboard);
