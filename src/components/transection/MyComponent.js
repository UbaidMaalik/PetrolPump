import React from "react";
import DataTable from "react-data-table-component";

const MyComponent = () => {
  const columns = [
    {
      name: "Date",
      selector: (row) => row.date,
    },
    {
      name: "Vehicle",
      selector: (row) => row.vehicle,
    },
    {
      name: "Perticular",
      selector: (row) => row.perticular,
    },
    {
      name: "Rate",
      selector: (row) => row.rate,
    },
    {
      name: "Liters",
      selector: (row) => row.liter,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Paid",
      selector: (row) => row.paid,
    },
    {
      name: "Balance",
      selector: (row) => row.balance,
    },
  ];

  const data = [
    {
      id: 1,
      title: "Beetlejuice",
      year: "1988",
    },
    {
      id: 2,
      title: "Ghostbusters",
      year: "1984",
    },
  ];

  return <DataTable columns={columns} data={data} pagination={true} />;
};

export default MyComponent;
