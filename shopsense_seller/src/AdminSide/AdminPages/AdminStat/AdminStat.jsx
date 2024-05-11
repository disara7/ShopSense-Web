import React from "react";
import AdminNav from "../../adminComponents/adminNavbar/AdminNav";
import SideNav from "../../adminComponents/sideNavbar/SideNav";
import "./adminStat.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
    { month: "Jan", Sales: "10" },
    { month: "Feb", Sales: "15" },
    { month: "Mar", Sales: "08" },
    { month: "Apr", Sales: "03" },
    { month: "May", Sales: "11" },
    { month: "Jun", Sales: "21" },
    { month: "Jul", Sales: "05" },
    { month: "Aug", Sales: "14" },
    { month: "Sep", Sales: "09" },
    { month: "Oct", Sales: "19" },
    { month: "Nov", Sales: "21" },
    { month: "Dec", Sales: "15" },
  ];

  const AdminStat = () => {
    return (
      <div className="dashboard-wrapper">
        <AdminNav />
        <div className="dashboard-container">
          <div className="left-flex">
            <SideNav />
          </div>
          <div className="st-right-flex">
            <span className="rf-txt">Sales Stat</span>
            <div className="rf-chart">
              <ResponsiveContainer width="100%" height={400}>
                <LineChart
                  width={500}
                  height={400}
                  data={data}
                  margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="Sales"
                    stroke="#3771C8"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default AdminStat;