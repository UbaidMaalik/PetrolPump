import React, { Fragment } from "react";
import Header from "../Header";
import SidebarCopy from "../SidebarCopy";
import TransectionForm from "./TransectionForm";

const Transections = () => {
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
              <TransectionForm />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Transections;
