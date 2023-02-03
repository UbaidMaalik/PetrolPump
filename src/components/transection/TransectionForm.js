import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import Alert from "../global/Alert";
import { newTransection } from "../../actions/transection";
import { getCustomers } from "../../actions/customer";
import Select from "react-select";
import { getCurrentPrices } from "../../actions/price";

const TransectionForm = ({
  newTransection,
  getCustomers,
  customer: { customers, loading },
  getCurrentPrices,
  current_prices,
}) => {
  const [state, setState] = useState({
    customerId: "",
    vehicle: "",
    particular: "",
    rate: 0,
    liter: 0,
    total: 0,
    paid: 0,
    date: "",
    balance: 0,
    transection: true,
  });

  useEffect(() => {
    getCustomers();
    getCurrentPrices();
  }, []);

  const { customerId, vehicle, particular, rate, liter, total, paid, date } =
    state;
  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();

    // add
    newTransection(state);

    setState({
      customerId: "",
      vehicle: "",
      particular: "",
      rate: 0,
      liter: 0,
      total: 0,
      paid: 0,
      date: 0,
    });
  };

  const options = [];
  if (!loading) {
    customers.map(({ id, name }) => {
      options.push({ value: id, label: name });
    });
  }

  const onParticularChange = (e) => {
    const selectedParticular = e.target.value;
    const selectedParticularCurrentRate = current_prices[selectedParticular];

    setState({
      ...state,
      rate: selectedParticularCurrentRate,
      particular: selectedParticular,
    });
  };

  return (
    <div className="col-md-12">
      <form onSubmit={onSubmit} className="customers-page">
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">CUSTOMER</label>
              <Select
                options={options}
                isLoading={loading}
                onChange={(e) => setState({ ...state, customerId: e.value })}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">VEHICLE</label>
              <input
                type="text"
                className="form-control"
                name="vehicle"
                id="vehicle"
                onChange={onChange}
                value={vehicle}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">PARTICULAR</label>

              <select
                name="particular"
                id="particular"
                onChange={onParticularChange}
              >
                <option value="">Select.....</option>
                <option value="petrol" selected={particular === "petrol"}>
                  Petrol
                </option>
                <option value="diesel" selected={particular === "diesel"}>
                  Diesel
                </option>
                <option value="supreme" selected={particular === "supreme"}>
                  Supreme
                </option>
              </select>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">RATE</label>
              <input
                type="text"
                className="form-control"
                name="rate"
                id="rate"
                onChange={onChange}
                value={rate}
                disabled
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">LITERS</label>
              <input
                type="number"
                className="form-control"
                name="liter"
                id="liter"
                onChange={(e) => {
                  setState({
                    ...state,
                    liter: e.target.value,
                    total: rate * e.target.value,
                  });
                }}
                value={liter}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">TOTAL AMOUNT</label>
              <input
                type="number"
                className="form-control"
                name="total"
                id="total"
                onChange={onChange}
                value={total}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">Paid</label>
              <input
                type="number"
                className="form-control"
                name="paid"
                id="paid"
                onChange={onChange}
                value={paid}
              />
            </div>
          </div>
          <div className="col-md-6">
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
  );
};

const mapStateToProps = (state) => ({
  customer: state.customer,
  current_prices: state.price.current_price,
});

export default connect(mapStateToProps, {
  newTransection,
  getCustomers,
  getCurrentPrices,
})(TransectionForm);
