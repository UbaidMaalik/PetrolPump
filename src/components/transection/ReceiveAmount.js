import React, { Fragment } from "react";
import Header from "../Header";
import SidebarCopy from "../SidebarCopy";
import ReciveAmountForm from "./ReciveAmountForm";

const ReceiveAmount = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 dashSidebar px-0">
          <SidebarCopy />
        </div>
        <div className="col-md-10 dasMain px-0">
          <Header />
          <div className="mainContent">
            <ReciveAmountForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveAmount;
