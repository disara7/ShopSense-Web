import React from "react";
import "./payout.css";
import SideNav from "../../adminComponents/sideNavbar/SideNav";
import AdminNav from "../../adminComponents/adminNavbar/AdminNav";
import { Link } from "react-router-dom";
import TableComponent2 from "../../adminComponents/tableComponent/tableComponent2";

function createData(No, Payout_Date, Status, Reference_Number) {
  return { No, Payout_Date, Status, Reference_Number };
}

const rows = [
  createData(1, "january 2, 2024", "Processing", "1243135421"),
  createData(2, "December 15, 2023", "Paid", "5435435113"),
  createData(3, "November 29, 2023", "Paid", "6431222321"),
];

const Payout = () => {
  return (
    <div className="payout-wrapper">
      <AdminNav />
      <div className="payout-container">
        <div className="payout-left-flex">
          <SideNav />
        </div>
        <div className="payout-right-flex">
          <div className="payout-top">
            <span className="payout-txt">Payout</span>
            <div className="payout-summary">
              <div className="payout-sum-left">
                <span className="payment-txt1">Total Payement</span>
                <span className="payment-txt2">LKR 2000</span>
              </div>
              <div className="payout-sum-right">
                <div className="payment-txt">
                  <span className="payment-txt1">Available Payement</span>
                  <span className="payment-txt2">LKR 1200</span>
                </div>
                <div className="payout-btn">
                  <Link to="">
                    <button>Payout</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="payout-bottom">
            <span className="payout-history">Payout History</span>
            <div className="payout-table">
              <TableComponent2 rows={rows} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payout;
