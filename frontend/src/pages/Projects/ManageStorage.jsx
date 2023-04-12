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

function createData(unit, folder, size) {
  return { unit, folder, size };
}

const rows = [
  createData("Unit 1", "Folder 1", "100 MB"),
  createData("Unit 2", "Folder 2", "150 MB"),
  createData("Unit 3", "Folder 1", "100 MB"),
];

export default function ManageStorage() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Unit</StyledTableCell>
            <StyledTableCell align="center">Folder</StyledTableCell>
            <StyledTableCell align="center">Size</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.unit}>
              <StyledTableCell component="th" scope="row">
                {row.unit}
              </StyledTableCell>
              <StyledTableCell align="center">{row.folder}</StyledTableCell>
              <StyledTableCell align="center">{row.size}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
