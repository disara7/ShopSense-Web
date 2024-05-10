import React from "react";
import "./tableComponentOrder.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Popup from "../../../Components/Popup/Popup";
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

function createData(
  No,
  Name,
  Popularity,
  Sales,
  Retail,
  Status,
  Printed,
  Action
) {
  return { No, Name, Popularity, Sales, Retail, Status, Printed, Action };
}

const rows = [
  createData(
    234856015,
    "25 Aug 2024",
    "2 Hours",
    "Card",
    "690.00",
    "Pending",
    "✔️",

    <Popup />
  ),
  createData(
    2780984523,
    "13 Nov 2024",
    "14 Hours",
    "Card",
    "1500.00",
    "Completed",
    "✔️",
    <Popup />
  ),
  createData(
    8902345213,
    "19 Dec 2024",
    "4 Days",
    "Cach on Delivery ",
    "420.00",
    "Shipped",
    "❌",
    <Popup />
  ),
  createData(
    4120751297,
    "25 Jan 2025",
    "45 Second",
    "Card",
    "800.00",
    "Pending",
    "✔️",
    "Completed"
  ),
];

const TableComponentOrder = () => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "10%" }}>Order No</TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Order Date
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Pending Since
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Payment Method
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Retail Price
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Status
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Printed
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.Name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.No}
                </TableCell>
                <TableCell align="left">{row.Name}</TableCell>
                <TableCell align="left">{row.Popularity}</TableCell>
                <TableCell align="left">{row.Sales}</TableCell>
                <TableCell align="left">{row.Retail}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
                <TableCell align="left">{row.Printed}</TableCell>
                <TableCell align="left">{row.Action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponentOrder;
