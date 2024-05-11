import React from "react";
import "./sideNav.css";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SettingsOutlined from "@mui/icons-material/SettingsOutlined";

import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="sideNav">
      <ul>
        <Link to="/Dashboard" className="CustomLink">
          <li className="dashboard">
            <SpaceDashboardOutlinedIcon style={{ color: "black" }} />
            <span className="list-text">Dashboard</span>
          </li>
        </Link>

        <Link to="/Order" className="CustomLink">
          <li className="orders">
            <ShoppingCartOutlinedIcon style={{ color: "black" }} />
            <span className="list-text">Orders</span>
          </li>
        </Link>
        <Link to="/Product" className="CustomLink">
          <li className="products">
            <ShoppingBagOutlinedIcon style={{ color: "black" }} />
            <span className="list-text">Products</span>
          </li>
        </Link>
        <Link to="/SalesStat" className="CustomLink">
        <li className="salsesReport">
          <InsertChartOutlinedIcon style={{ color: "black" }} />
          <span className="list-text">Sales Report</span>
        </li>
        </Link>
        <Link to="/" className="CustomLink">
        <li className="messages">
          <TextsmsOutlinedIcon style={{ color: "black" }} />
          <span className="list-text">Messages</span>
        </li>
        </Link>
        <li className="settings">
          <SettingsOutlined sx={{ color: "black" }} />
          <span className="list-text">Withdraw</span>
        </li>
        <Link to="/" className="CustomLink">
          <li className="signout">
            <LogoutOutlinedIcon style={{ color: "black" }} />
            <span className="list-text">Sign Out</span>
          </li>{" "}
        </Link>
      </ul>
    </div>
  );
};

export default SideNav;
