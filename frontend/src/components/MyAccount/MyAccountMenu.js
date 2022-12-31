import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
import { logOut } from "../../actions/userAction";
import { useAlert } from "react-alert";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#3577f0",
  padding: "15px 35px",
  width: "100%",
  textAlign: "left",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  fontWeight: "600",
}));
const MyAccountMenu = ({ user }) => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const logOutHandle = () => {
    dispatch(logOut());
    alert.success("Logout Successfully");
  };
  return (
    <Box
      sx={{
        position: "absolute",
        top: "0px",
        right: "0px",
        width: "260px",
        padding: "20px",
        borderRadius: "10px",
        background: "#fff",
        boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
        fontWeight: "500",
      }}
    >
      <List>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#C4C4C4",
            paddingBottom: "20px",
            fontWeight: "500",
          }}
        >
          QUICKLINKS
        </Typography>
        {user.role === "admin" && (
          <ListItem
            sx={{
              borderBottom: "1px solid #eee",
              margin: "0",
              padding: "0 0 15px 0",
              display: "flex",
              alignItems: "center",
            }}
          >
            <DashboardIcon
              sx={{ color: "#4c4c4e", fontSize: "16px", marginRight: "10px" }}
            />
            Dashboard
          </ListItem>
        )}

        <ListItem
          sx={{
            borderBottom: "1px solid #eee",
            margin: "11px 0",
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ListAltIcon
            sx={{ color: "#4c4c4e", fontSize: "16px", marginRight: "10px" }}
          />
          Order
        </ListItem>

        <ListItem
          sx={{
            borderBottom: "1px solid #eee",
            margin: "11px 0",
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <PersonIcon
            sx={{ color: "#4c4c4e", fontSize: "16px", marginRight: "10px" }}
          />
          Profile
        </ListItem>
        <ListItem
          onClick={logOutHandle}
          sx={{
            borderBottom: "1px solid #eee",
            margin: "11px 0",
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <ExitToAppIcon
            sx={{ color: "#4c4c4e", fontSize: "16px", marginRight: "10px" }}
          />
          LogOut
        </ListItem>
      </List>
    </Box>
  );
};

export default MyAccountMenu;
