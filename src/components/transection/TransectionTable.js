import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
// import CurrencyFormat from "react-currency-format";

import currency from "../../utils/currency";
import EditButton from "./EditButton";

const TransectionTable = ({ transection: { loading, transections } }) => {
  const [totals, setTotals] = useState({
    total_amount: 0,
    total_paid: 0,
    total_balance: 0,
  });

  useEffect(() => {
    if (!loading && transections.length) {
      getTotals(transections);
    }
  }, [loading, transections]);

  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Vehicle",
      selector: (row) => (row.vehicle ? row.vehicle : "----"),
    },
    {
      name: "Perticular",
      selector: (row) => (row.particular ? row.particular : "----"),
    },
    {
      name: "Rate",
      selector: (row) => (row.rate ? row.rate : "----"),
    },
    {
      name: "Liters",
      selector: (row) => (row.liter ? row.liter : "----"),
    },
    {
      name: "Amount",
      selector: (row) => (row.total ? currency(row.total) : "----"),
    },
    {
      name: "Paid",
      selector: (row) => row.paid,
    },
    {
      name: "Balance",
      selector: (row) => (row.balance ? row.balance : "----"),
    },

    {
      name: "Edit",
      selector: (row) => <EditButton id={row.id} total={row.total} />,
    },
  ];

  const getTotals = (data) => {
    let total_amount = 0;
    let total_paid = 0;
    let total_balance = 0;

    data.map((d) => {
      total_amount += d.total ? d.total : 0;
      total_paid += parseFloat(d.paid);
    });

    setTotals({
      total_amount,
      total_paid,
      total_balance: total_amount - total_paid,
    });
  };
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-sm-12">
          <h6>Customer Transections Detail</h6>
          <div className="row text-center mt-3 mb-3 bg-light p-2 total_summary">
            <div className="col-md-4 transection">
              <p>Total Amount</p>
              {currency(totals.total_amount)}
            </div>
            <div className="col-md-4 transection">
              <p>Total Paid</p>
              {currency(totals.total_paid)}
            </div>
            <div className="col-md-4 transection">
              <p>Total Balance</p>
              {currency(totals.total_balance)}
            </div>
          </div>

          <DataTable
            columns={columns}
            data={transections}
            progressPending={loading}
            pagination
          />
        </div>
      </div>
    </div>
  );
};

export default TransectionTable;
