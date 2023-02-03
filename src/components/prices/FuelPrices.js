import React, { useState, Fragment, useEffect } from "react";
import { connect } from "react-redux";
import "../../styles/styles.css";
import { newPrice } from "../../actions/price";
import Alert from "../Alert";
import SidebarCopy from "../SidebarCopy";
import Header from "../Header";
import Prices from "./Prices";

const FuelPrices = ({ newPrice, current_price }) => {
  const [state, setState] = useState({
    petrol: "",
    diesel: "",
    supreme: "",
    date: "",
  });

  useEffect(() => {
    if (current_price) {
      setState({ ...current_price });
    }
  }, [current_price]);

  const { petrol, diesel, supreme, date } = state;
  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();

    // add
    newPrice(state);
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
              <div className="row">
                <div className="col-md-5">
                  <div className="card mt-5">
                    <div className="card-header">
                      <h5>Add Fuel Prices</h5>
                    </div>
                    <div className="card-body">
                      <form onSubmit={onSubmit} className="customers-page pt-2">
                        <div className="form-group">
                          <label className="form-control-label">PETROL</label>
                          <input
                            type="text"
                            className="form-control"
                            name="petrol"
                            id="petrol"
                            onChange={onChange}
                            value={petrol}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">DIESEL</label>
                          <input
                            type="text"
                            className="form-control"
                            name="diesel"
                            id="diesel"
                            onChange={onChange}
                            value={diesel}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">SUPREME</label>
                          <input
                            type="text"
                            className="form-control"
                            name="supreme"
                            id="supreme"
                            onChange={onChange}
                            value={supreme}
                          />
                        </div>
                        <div className="form-group">
                          <label className="form-control-label">DATE</label>
                          <input
                            type="date"
                            className="form-control"
                            name="date"
                            id="date"
                            onChange={onChange}
                            value={date}
                          />
                        </div>
                        <div className="col-lg-12 loginbttm">
                          <div className="login-btm login-button float-right">
                            <button
                              type="submit"
                              className="btn btn-outline-primary"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="message mt-0">
                      <Alert />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 mt-5">
                  <Prices />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  current_price: state.price.current_price,
});

export default connect(mapStateToProps, { newPrice })(FuelPrices);
