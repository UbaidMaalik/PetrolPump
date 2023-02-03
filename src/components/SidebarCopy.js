import { Fragment, useState } from "react";
import React from "react";
import sidebarCopy from "../styles/sidebarCopy.css";
import { Link } from "react-router-dom";
import MaterialIcon from "material-icons-react";
const SidebarCopy = () => {
  const [menu, setMenu] = useState(false);

  return (
    <Fragment>
      <input type="checkbox" id="menu" name="" />
      <div className="sidebar">
        <div className="sidebar-brand">
          <h2>Petrol Pump</h2>
          <span className="align-center">Managment System</span>
        </div>
        <div className="sidebar-menu">
          <ul>
            <li>
              <Link to="/dashboard">
                <span className="fa fa-home"></span>
                <span>Dashboard</span>
              </Link>
            </li>
            <li class="active">
              <a href="#" onClick={() => setMenu(!menu)}>
                <span className="fas fa-user-circle"></span>
                <span>Customers</span>
              </a>
              {menu && (
                <ul className="sub-menu" id="products">
                  <li className="active">
                    <Link to="/customers">
                      <MaterialIcon
                        icon="subdirectory_arrow_right"
                        color="#fff"
                      />
                      {/* <i class="fas fa-circle"></i> */}
                      <span>All Customers</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/addcustomer">
                      {/* <i class="fas fa-circle"></i> */}
                      <MaterialIcon
                        icon="subdirectory_arrow_right"
                        color="#fff"
                      />
                      <span>New Customer</span>
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to="/fuelprices">
                <span className="fas fa-gas-pump"></span>
                <span>Fuel Prices</span>
              </Link>
            </li>
            <li>
              <Link to="/transection">
                <span className="fas fa-dollar-sign"></span>
                <span>Transactions</span>
              </Link>
            </li>
            <li>
              <Link to="/receiveamount">
                <span className="fas fa-plus"></span>
                <span>Add Payment</span>
              </Link>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-cog"></span>
                <span>Settings</span>
              </a>
            </li>
            <li>
              <a href="#">
                <span className="fas fa-info"></span>
                <span>About</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default SidebarCopy;
