import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";
const Sidebar = () => {
  return (
    <Fragment>
      <div class="nav-side-menu">
        <div class="brand">React Project</div>
        <i
          class="fa fa-bars fa-2x toggle-btn"
          data-toggle="collapse"
          data-target="#menu-content"
        ></i>

        <div class="menu-list">
          <ul id="menu-content" class="menu-content collapse out">
            <li>
              <a href="#">
                <i class="fa fa-dashboard fa-lg"></i> Dashboard
              </a>
            </li>

            <li
              data-toggle="collapse"
              data-target="#products"
              class="collapsed active"
            >
              <a href="#">
                <i class="fa fa-gift fa-lg"></i> Customer{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="products">
              <li class="active">
                <a href="#">Add Customer</a>
              </li>
              <li>
                <a href="#">Customer List</a>
              </li>
            </ul>

            <li data-toggle="collapse" data-target="#service" class="collapsed">
              <a href="#">
                <i class="fa fa-globe fa-lg"></i> Auswertungen{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="service">
              <li>Trendmonitoring</li>
              <li>Alarmmonitoring</li>
              <li>Audit-Trail</li>
            </ul>

            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <a href="#">
                <i class="fa fa-car fa-lg"></i> Reporting{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="new">
              <li>Alarmstatistik</li>
              <li>Prozessfähigkeit</li>
            </ul>

            <li>
              <a href="#">
                <i class="fa fa-user fa-lg"></i> Profile
              </a>
            </li>

            <li data-toggle="collapse" data-target="#new" class="collapsed">
              <a href="#">
                <i class="fa fa-car fa-lg"></i> Service{" "}
                <span class="arrow"></span>
              </a>
            </li>
            <ul class="sub-menu collapse" id="new">
              <li>Sensorkonfiguration</li>
              <li>Betriebsarten</li>
            </ul>
          </ul>
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;
