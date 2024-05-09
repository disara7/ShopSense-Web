import React from "react";
import "./tableComponent.css";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
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
    "45%"
  ),
  createData(
    2,
    "Classic White Button-Up Shirt",
    <BorderLinearProgress variant="determinate" value={60} />,
    "29%"
  ),
  createData(
    3,
    "Black Leather Biker Jacket",
    <BorderLinearProgress variant="determinate" value={30} />,
    "18%"
  ),
  createData(
    4,
    "Red Plaid Flannel Shirt",
    <BorderLinearProgress variant="determinate" value={80} />,
    "25%"
  ),
];

const TableComponent = () => {
  return (
    <div className="table-container">
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow sx={{ color: "red" }}>
              <TableCell sx={{ width: "20%" }}>No</TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Name
              </TableCell>
              <TableCell sx={{ width: "30%" }} align="left">
                Popularity
              </TableCell>
              <TableCell sx={{ width: "20%" }} align="left">
                Sales
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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default TableComponent;
