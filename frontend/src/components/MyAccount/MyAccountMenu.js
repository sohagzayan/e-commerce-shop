import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PersonIcon from "@mui/icons-material/Person";
import { useDispatch } from "react-redux";
// import { logOut } from "../../actions/userAction";
import { useAlert } from "react-alert";
import { logOut } from "../../store/reducerSlice/authSlice";

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
  const navigate = useNavigate();
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
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            borderBottom: "1px solid #eee",
            paddingBottom: "20px",
            marginBottom: "15px",
          }}
        >
          <img
            style={{
              width: "40px",
              borderRadius: "50%",
              marginRight: "15px",
            }}
            src={user.avatar.url}
            alt="avater"
          />
          <Box>
            <Typography sx={{ fontSize: "16px", fontWeight: "600" }}>
              {user.name}
            </Typography>
            <Typography sx={{ fontSize: "14px" }}>Los Angeles, CA</Typography>
          </Box>
        </Box>
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
          onClick={() => navigate("/profile")}
          sx={{
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            style={{ color: "#8D939D", fontSize: "22px", marginRight: "10px" }}
            className="ri-user-6-line"
          ></i>
          My Account
        </ListItem>

        <ListItem
          sx={{
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            style={{ color: "#8D939D", fontSize: "22px", marginRight: "10px" }}
            className="ri-file-list-3-line"
          ></i>
          My Order
        </ListItem>

        <ListItem
          onClick={() => navigate("/my-profile")}
          sx={{
            borderBottom: "1px solid #eee",
            margin: "3px 0",
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
            marginBottom: "20px",
          }}
        >
          <i
            style={{ color: "#8D939D", fontSize: "22px", marginRight: "10px" }}
            className="ri-heart-2-line"
          ></i>
          Wishlist
        </ListItem>

        <ListItem
          onClick={logOutHandle}
          sx={{
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            style={{ color: "#8D939D", fontSize: "22px", marginRight: "10px" }}
            className="ri-question-line"
          ></i>
          Help
        </ListItem>
        <ListItem
          onClick={logOutHandle}
          sx={{
            padding: "0 0 15px 0",
            display: "flex",
            alignItems: "center",
          }}
        >
          <i
            style={{ color: "#8D939D", fontSize: "22px", marginRight: "10px" }}
            className="ri-logout-circle-line"
          ></i>
          LogOut
        </ListItem>
      </List>
    </Box>
  );
};

export default MyAccountMenu;
