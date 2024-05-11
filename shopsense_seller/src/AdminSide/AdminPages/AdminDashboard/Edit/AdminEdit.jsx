import React from "react";
import SideNav from "../../../adminComponents/sideNavbar/SideNav";
import "./AdminEdit.css";
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
import TableComponentProduct from "../../../adminComponents/tableComponentProduct/tableComponentProduct";
import EditProduct from "../../../../Pages/EditProduct/EditProduct";
import SignUpNavBar from "../../../../Components/SignUpNavBar/SignUpNavBar";
const AdminEdit = () => {
  return (
    <div className="dashboard-wrapper">
      <div className="TopMenuAdmin">
        <SignUpNavBar />
      </div>

      <div className="dashboard-container">
        <div className="left-flex">
          <SideNav />
        </div>
        <div className="right-flex">
          <div className="right-bottom-flex">
            <EditProduct />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminEdit;
