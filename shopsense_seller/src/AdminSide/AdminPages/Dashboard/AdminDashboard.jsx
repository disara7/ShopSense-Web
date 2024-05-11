import React from "react";
import SideNav from "../../adminComponents/sideNavbar/SideNav";
import "./adminDashboard.css";
import AdminNav from "../../adminComponents/adminNavbar/AdminNav";
import Card from "../../adminComponents/card/Card";
import TableComponent from "../../adminComponents/tableComponent/TableComponent";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

import LinearProgress, {
  linearProgressClasses,
} from "@mui/material/LinearProgress";

import { styled } from "@mui/material/styles";

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  marginRight: 50,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === "light" ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: theme.palette.mode === "light" ? "#1a90ff" : "#308fe8",
  },
}));

function createData(No, Name, Popularity, Sales) {
  return { No, Name, Popularity, Sales };
}

const rows = [
  createData(
    1,
    "Midnight Blue Velvet Dress",
    <BorderLinearProgress variant="determinate" value={10} />,
    "10%"
  ),
  createData(
    2,
    "Classic White Button-Up Shirt",
    <BorderLinearProgress variant="determinate" value={60} />,
    "60%"
  ),
  createData(
    3,
    "Black Leather Biker Jacket",
    <BorderLinearProgress variant="determinate" value={30} />,
    "30%"
  ),
  createData(
    4,
    "Red Plaid Flannel Shirt",
    <BorderLinearProgress variant="determinate" value={80} />,
    "80%"
  ),
];

const AdminDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <AdminNav />
      <div className="dashboard-container">
        <div className="left-flex">
          <SideNav />
        </div>
        <div className="right-flex">
          <div className="right-top-flex">
            <div className="rt-txt">
              <span className="rt-txt1">Today's Sales</span>
              <span className="rt-txt2">Sales Summary</span>
            </div>
            <div className="rt-card-container">
              <Card
                id={"card1"}
                icon={
                  <BarChartOutlinedIcon
                    sx={{ color: "white", fontSize: "1.8rem" }}
                  />
                }
                txt1={"LKR 3000"}
                txt2={"Total Sales"}
              />

              <Card
                id={"card2"}
                icon={
                  <DescriptionOutlinedIcon
                    sx={{ color: "white", fontSize: "1.8rem" }}
                  />
                }
                txt1={"300"}
                txt2={"Total Orders"}
              />

              <Card
                id={"card3"}
                icon={
                  <SellOutlinedIcon
                    sx={{ color: "white", fontSize: "1.8rem" }}
                  />
                }
                txt1={"5"}
                txt2={"Product Sold"}
              />

              <Card
                id={"card4"}
                icon={
                  <PersonAddOutlinedIcon
                    sx={{ color: "white", fontSize: "1.8rem" }}
                  />
                }
                txt1={"8"}
                txt2={"New Customers"}
              />
            </div>
          </div>
          <div className="right-bottom-flex">
            <span className="tp-txt">Top Products</span>
            <div className="top-products">
              <TableComponent rows={rows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
