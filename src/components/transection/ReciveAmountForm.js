import React, { useState, useEffect } from "react";
import Select from "react-select";
import { connect } from "react-redux";
import Alert from "../global/Alert";
import { newTransection } from "../../actions/transection";
import { getCustomers } from "../../actions/customer";

const ReciveAmount = ({
  newTransection,
  getCustomers,
  customer: { customers, loading },
}) => {
  const [state, setState] = useState({
    customerId: "",
    paid: 0,
    date: "",
    desc: "",
    transection: false,
  });

  useEffect(() => {
    getCustomers();
  }, []);

  const { customerId, paid, date, desc } = state;
  const onChange = (e) =>
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  const onSubmit = (e) => {
    e.preventDefault();

    // add
    newTransection(state, true);

    setState({
      customerId: "",
      paid: 0,
      date: "",
      desc: "",
    });
  };

  const options = [];
  if (!loading) {
    customers.map(({ id, name }) => {
      options.push({ value: id, label: name });
    });
  }
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
          <div className="col-md-6">
            <div className="form-group">
              <label className="form-control-label">Description</label>
              <input
                type="text"
                className="form-control"
                name="desc"
                id="desc"
                onChange={onChange}
                value={desc}
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
});
export default connect(mapStateToProps, { newTransection, getCustomers })(
  ReciveAmount
);
