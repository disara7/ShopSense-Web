import React from "react";
import SideNav from "../../adminComponents/sideNavbar/SideNav";
import "./adminDashboard.css";
import FormNavBar from "../../../Components/FormNavBar/FormNavBar";
import Card from "../../adminComponents/card/Card";
import TableComponent from "../../adminComponents/tableComponent/TableComponent";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";

const AdminDashboard = () => {
  return (
    <div className="dashboard-wrapper">
      <FormNavBar />
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
              <TableComponent />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
