import React from "react";
import "./PlaceOrder.css";
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

    "2 Hours",
    "Card",
    "690.00",

    "✔️"
  ),
];

const PlaceOrder = () => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "10%" }}>Order No</TableCell>

              <TableCell sx={{ width: "20%" }} align="left">
                Pending
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Payment Method
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Retail Price
              </TableCell>

              <TableCell sx={{ width: "15%" }} align="left">
                Printed
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

export default PlaceOrder;
