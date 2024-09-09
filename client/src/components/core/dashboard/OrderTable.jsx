import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function OrderTable({ orders }) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>UserID</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">qty</StyledTableCell>
            <StyledTableCell align="right">price</StyledTableCell>
            <StyledTableCell align="right">mode</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map((order, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                @{order.email.split("@")[0]}
              </StyledTableCell>
              <StyledTableCell align="right">{order.name}</StyledTableCell>
              <StyledTableCell align="right">{order.qty}</StyledTableCell>
              <StyledTableCell align="right">{order.price}</StyledTableCell>
              <StyledTableCell align="right">{order.mode}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
