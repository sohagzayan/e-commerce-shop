import { Fragment } from "react";
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Typography } from "@mui/material";

const OrderedItems = ({ order }: any) => {
  function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number
  ) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
    createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
    createData("Eclair", 262, 16.0, 24, 6.0),
    createData("Cupcake", 305, 3.7, 67, 4.3),
    createData("Gingerbread", 356, 16.0, 49, 3.9),
  ];
  return (
    <Fragment>
      <Table sx={{ overflowX: "scroll" }} aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "#F6F7FB" }}>
            <TableCell sx={{ fontFamily: "Poppins" }}>Item</TableCell>
            <TableCell sx={{ fontFamily: "Poppins" }} align="right">
              Qty
            </TableCell>
            <TableCell sx={{ fontFamily: "Poppins" }} align="right">
              Price
            </TableCell>
            <TableCell sx={{ fontFamily: "Poppins" }} align="right">
              Total
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {order.orderItems &&
            order.orderItems.map((item: any, index: any) => (
              <TableRow
                key={index}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell sx={{ display: "flex", alignItems: "center" }}>
                  <img width={60} src={item?.image} alt="product" />
                  <Box sx={{ marginLeft: "10px" }}>
                    <Typography
                      sx={{
                        fontFamily: "Poppins",
                        borderRadius: "8px",
                        fontWeight: "500",
                        fontSize: ".9rem",
                      }}
                    >
                      {item?.name}
                    </Typography>
                  </Box>
                </TableCell>
                <TableCell align="right">{item?.quantity}</TableCell>
                <TableCell align="right">${item?.price}</TableCell>
                <TableCell align="right">
                  ${item?.quantity * item.price}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Fragment>
  );
};

export default OrderedItems;
