import React from "react";
import "./sideNav.css";
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import InsertChartOutlinedIcon from "@mui/icons-material/InsertChartOutlined";
import TextsmsOutlinedIcon from "@mui/icons-material/TextsmsOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";

import { Link, NavLink } from "react-router-dom";

const SideNav = () => {
  const menuItem = [
    {
      path: "/Dashboard",
      name: "Dashboard",
      icon: <SpaceDashboardOutlinedIcon />,
    },
    {
      path: "/",
      name: "Order",
      icon: <ShoppingCartOutlinedIcon />,
    },
    {
      path: "/",
      name: "Products",
      icon: <ShoppingBagOutlinedIcon />,
    },
    {
      path: "/SalesStat",
      name: "Sales Stat",
      icon: <InsertChartOutlinedIcon />,
    },
    {
      path: "/",
      name: "Message",
      icon: <TextsmsOutlinedIcon />,
    },
    {
      path: "/Payout",
      name: "Payout",
      icon: <MonetizationOnOutlinedIcon />,
    },
    {
      path: "/",
      name: "Sign Out",
      icon: <LogoutOutlinedIcon />,
    },
  ];
  return (
    <div className="sideNav">
      <div className="navCon">
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeclassName="active"
          >
            <div className="icon">{item.icon}</div>
            <div className="link_text">{item.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
