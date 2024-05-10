import React from "react";
import SideNav from "../../../adminComponents/sideNavbar/SideNav";
import "./AdminOrders.css";
import FormNavBar from "../../../../Components/FormNavBar/FormNavBar";
import Card from "../../../adminComponents/card/Card";
import TableComponent from "../../../adminComponents/tableComponent/TableComponent";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import SellOutlinedIcon from "@mui/icons-material/SellOutlined";
import PersonAddOutlinedIcon from "@mui/icons-material/PersonAddOutlined";
import { Bt } from "react-flags-select";
import TableComponentOrder from "../../../adminComponents/tableComponentOrder/tableComponentOrder";
import PopupScreen from "../../../../Components/Popup/Popup";

const AdminOrder = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="TopMenuAdmin">
        <FormNavBar />
      </div>

      <div className="dashboard-container">
        <div className="left-flex">
          <SideNav />
        </div>
        <div className="right-flex">
          <div className="right-top-flex">
            <div className="rt-txt"></div>
          </div>
          <div className="right-bottom-flex">
            <div className="OrderButtonHolder">
              <button>All</button>
              <button>Pending</button>
              <button>Ready to Ship</button>
              <button>Shipped</button>
              <button>Completed</button>
            </div>
            <div className="top-products">
              <TableComponentOrder />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminOrder;
