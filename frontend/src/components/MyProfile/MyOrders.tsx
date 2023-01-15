import React, { Fragment, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import { DataGrid } from "@mui/x-data-grid";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import LaunchIcon from "@mui/icons-material/Launch";
import { Button, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import MyOrderRow from "./MyOrderRow";
import { useAlert } from "react-alert";
import { AppDispatch } from "../../store/store";
import {
  clearMyOrderError,
  getMyOrder,
} from "../../store/reducerSlice/myOrderSlice";
import MetaData from "../../util/MetaData";
import { Link } from "react-router-dom";
import "./myOrder.css";

const MyOrders = () => {
  const { loading, error, orders } = useSelector((state: any) => state.myOrder);
  console.log(orders);
  const { user } = useSelector((state: any) => state.user);
  const alert = useAlert();
  const dispatch = useDispatch<AppDispatch>();

  const columns = [
    { field: "id", headerName: "Order ID", minWidth: 300, flex: 1 },

    {
      field: "status",
      headerName: "Status",
      minWidth: 150,
      flex: 0.5,
      cellClassName: (params: any) => {
        return params.getValue(params.id, "status") === "Delivered"
          ? "greenColor"
          : "redColor";
      },
    },
    {
      field: "itemsQty",
      headerName: "Items Qty",
      type: "number",
      minWidth: 150,
      flex: 0.3,
    },

    {
      field: "amount",
      headerName: "Amount",
      type: "number",
      minWidth: 270,
      flex: 0.5,
    },

    {
      field: "actions",
      flex: 0.3,
      headerName: "Actions",
      minWidth: 150,
      type: "number",
      sortable: false,
      renderCell: (params: any) => {
        return (
          <Link to={`/order/${params.getValue(params.id, "id")}`}>
            <LaunchIcon />
          </Link>
        );
      },
    },
  ];

  const rows: any = [];

  orders &&
    orders.forEach((item: any, index: number) => {
      rows.push({
        itemsQty: item.orderItems.length,
        id: item._id,
        status: item.orderStatus,
        amount: item.totalPrice,
      });
    });

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearMyOrderError());
    }
    dispatch(getMyOrder());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      <MetaData title={`${user.name} - Orders`} />
      {loading ? (
        "loading"
      ) : (
        <div className="myOrdersPage">
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={10}
            disableSelectionOnClick
            className="myOrdersTable"
            autoHeight
          />

          <Typography id="myOrdersHeading">{user.name}'s Orders</Typography>
        </div>
      )}
    </Fragment>
  );
};

export default MyOrders;
