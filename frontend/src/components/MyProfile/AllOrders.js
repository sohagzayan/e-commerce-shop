import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";

const AllOrders = () => {
  const OrderData = [
    {
      order: "#999",
      date: "September 10, 2020	",
      status: "Processing",
      total: "939948",
      action: "View",
    },
  ];

  return (
    <TableContainer component={Paper} sx={{ width: "100%", boxShadow: "none" }}>
      <Table
        sx={{ width: "100%", overflowX: "scroll" }}
        aria-label="simple table"
      >
        <TableHead
          sx={{
            backgroundColor: "#F6F7FB",
            border: "none",
            borderRadius: "8px",
          }}
        >
          <TableRow
            style={{ overflowY: "scroll", overflowX: "hidden", border: "none" }}
          >
            <TableCell sx={{ fontSize: "20px", border: "none" }}>
              Order
            </TableCell>
            <TableCell sx={{ fontSize: "20px", border: "none" }} align="left">
              Date
            </TableCell>
            <TableCell sx={{ fontSize: "20px", border: "none" }} align="left">
              Status
            </TableCell>
            <TableCell sx={{ fontSize: "20px", border: "none" }} align="left">
              Total
            </TableCell>
            <TableCell sx={{ fontSize: "20px", border: "none" }} align="left">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {OrderData.map((row) => (
            <TableRow
              key={row.order}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
              }}
            >
              <TableCell sx={{ color: "#E76458", fontSize: "15px" }}>
                {row.order}
              </TableCell>
              <TableCell
                sx={{ color: "#292930", fontSize: "15px" }}
                align="left"
              >
                {row.date}
              </TableCell>
              <TableCell
                sx={{ color: "#292930", fontSize: "15px" }}
                align="left"
              >
                {row.status}
              </TableCell>
              <TableCell
                sx={{ color: "#292930", fontSize: "15px" }}
                align="left"
              >
                {row.total}
              </TableCell>
              <TableCell
                sx={{ color: "#292930", fontSize: "15px" }}
                align="left"
              >
                <Button
                  sx={{
                    padding: "6px 15px",
                    border: "1px solid #777",
                    backgroundColor: "transparent",
                    color: "#27272E",
                    fontWeight: "600",
                    textTransform: "capitalize",
                    fontSize: "14px",
                    ":hover": {
                      backgroundColor: "#0d6efd",
                      color: "#fff",
                      border: "1px solid transparent",
                    },
                  }}
                >
                  Show
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllOrders;
