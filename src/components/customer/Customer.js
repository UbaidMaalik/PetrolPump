import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
import currency from "../../utils/currency";
import { firestore } from "../../firebase";

const Customer = ({ customer, deleteCustomer }) => {
  useEffect(() => {
    getTransections(customer.id);
  }, [customer.id]);

  const getTransections = async (customerId) => {
    const response = await firestore
      .collection("transections")
      .where("customerId", "==", customerId)
      .get();

    const transections = [];

    response.forEach((doc) => {
      transections.push({
        id: doc.id,
        ...doc.data(),
      });
    });

    if (transections.length) {
      getTotals(transections);
    }
  };

  const [totals, setTotals] = useState({
    total_amount: 0,
    total_paid: 0,
    total_balance: 0,
  });

  const getTotals = (data) => {
    let total_amount = 0;
    let total_paid = 0;

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
    <div className="col-md-4 mb-1 mt-5" key={customer.id}>
      <div className="card">
        <div className="card-header">
          <div></div>
          <h5>
            <MaterialIcon icon="person" color="#008ea1" />
            {customer.name}
          </h5>
        </div>
        <div className="card-body">
          <MaterialIcon icon="smartphone" /> {customer.phone}
          <br />
          <MaterialIcon icon="badge" /> {customer.nic}
          <br />
          <MaterialIcon icon="home" /> {customer.address}
          <br />
          Total Amount:{" "}
          {!totals.total_amount ? "Loading...." : currency(totals.total_amount)}
          <br />
          Paid:{" "}
          {!totals.total_paid ? "Loading...." : currency(totals.total_paid)}
          <br />
          Balance: {currency(totals.total_balance)}
        </div>
        <div className="card-footer">
          <Link
            to={`customers/${customer.id}/edit`}
            className="btn btn-info float-right"
          >
            <MaterialIcon icon="edit" color="#fff" />
          </Link>
          <button
            to="/"
            className="btn btn-danger float-right"
            onClick={() => {
              if (window.confirm("Are you sure? ")) {
                deleteCustomer(customer.id);
              }
            }}
          >
            <MaterialIcon icon="delete" color="#fff" />
          </button>
          <Link
            to={`transections/${customer.id}/detail`}
            className="btn btn-info float-right"
          >
            <MaterialIcon icon="info" color="#fff" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Customer;
