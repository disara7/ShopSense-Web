import React from "react";
import "./tableComponentProduct.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Popup from "../../../Components/Popup/Popup";
import { Link } from "react-router-dom";
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
    "#1",

    <div>
      Classic White Button-Up Shirt<button className="editbtn">✎</button>
    </div>,
    <div>
      690.00<button className="editbtn">✎</button>
    </div>,
    <div>
      45<button className="editbtn">✎</button>
    </div>,
    "25 Jan 2025",

    "Pending",
    "✔️",
    <Link to="/EditAdmin">
      <button>Edit More</button>
    </Link>
  ),
  createData(
    "#2",
    <div>
      Midnight Blue Velvet Dress<button className="editbtn">✎</button>
    </div>,
    <div>
      950.00<button className="editbtn">✎</button>
    </div>,
    <div>
      20<button className="editbtn">✎</button>
    </div>,
    "25 Aug 2024",

    "Completed",
    "✔️",
    <button>Edit More</button>
  ),
  createData(
    "#3",
    <div>
      Black Leather Biker Jacket<button className="editbtn">✎</button>
    </div>,
    <div>
      420.00<button className="editbtn">✎</button>
    </div>,
    <div>
      02<button className="editbtn">✎</button>
    </div>,
    "13 Nov 2024",

    "Shipped",
    "❌",
    <button>Edit More</button>
  ),
  createData(
    "#4",
    <div>
      Red Plaid Flannel Shirt<button className="editbtn">✎</button>
    </div>,

    <div>
      800.00<button className="editbtn">✎</button>
    </div>,
    <div>
      06<button className="editbtn">✎</button>
    </div>,
    "19 Dec 2024",

    "Pending",
    "✔️",
    <button>Edit More</button>
  ),
];

const TableComponentProduct = () => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "5%" }}>No</TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Product Name
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Price
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Stock
              </TableCell>
              <TableCell sx={{ width: "15%" }} align="left">
                Created
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

                <TableCell align="left">{row.Action}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponentProduct;
