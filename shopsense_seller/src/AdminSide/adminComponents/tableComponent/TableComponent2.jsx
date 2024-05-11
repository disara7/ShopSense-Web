import React from "react";
import "./TableComponent2.jsx";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

const TableComponent2 = (props) => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "20%" }}>No</TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Payout Date
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Status
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Reference_Number
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.rows.map((row) => (
              <TableRow
                key={row.No}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.No}
                </TableCell>
                <TableCell align="left">{row.Payout_Date}</TableCell>
                <TableCell align="left">{row.Status}</TableCell>
                <TableCell align="left">{row.Reference_Number}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent2;
