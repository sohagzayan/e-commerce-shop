import { Button, TableCell, TableRow } from "@mui/material";
import { Fragment } from "react";

const MyOrderRow = ({ row }: any) => {
  return (
    <Fragment>
      <TableRow
        key={row.order}
        sx={{
          "&:last-child td, &:last-child th": { border: 0 },
        }}
      >
        <TableCell sx={{ color: "#E76458", fontSize: "15px" }}>
          {row.order}
        </TableCell>
        <TableCell sx={{ color: "#292930", fontSize: "15px" }} align="left">
          {row.date}
        </TableCell>
        <TableCell sx={{ color: "#292930", fontSize: "15px" }} align="left">
          {row.status}
        </TableCell>
        <TableCell sx={{ color: "#292930", fontSize: "15px" }} align="left">
          {row.total}
        </TableCell>
        <TableCell sx={{ color: "#292930", fontSize: "15px" }} align="left">
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
    </Fragment>
  );
};

export default MyOrderRow;
