import React from "react";

const GetTotals = ({ props }) => {
  return (
    <div className="row text-center mt-3 mb-3 bg-light p-2 total_summary">
      <div className="col-md-4 transection">
        <p>Total Amount</p>
        {currency(props.totals.total_amount)}
      </div>
      <div className="col-md-4 transection">
        <p>Total Paid</p>
        {currency(props.totals.total_paid)}
      </div>
      <div className="col-md-4 transection">
        <p>Total Balance</p>
        {currency(props.totals.total_balance)}
      </div>
    </div>
  );
};

export default GetTotals;
