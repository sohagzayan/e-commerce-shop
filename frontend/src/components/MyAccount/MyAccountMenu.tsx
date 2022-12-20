import React from "react";
import { Box, List, ListItem, styled, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
const MyAccountMenu = () => {
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
            paddingBottom: "10px",
            fontWeight: "500",
          }}
        >
          QUICKLINKS
        </Typography>
        <ListItem
          sx={{
            borderBottom: "1px solid #eee",
            margin: "0",
            padding: "0 0 15px 0",
          }}
        >
          My Account
        </ListItem>
        <ListItem
          sx={{
            borderBottom: "1px solid #eee",
            margin: "0",
            padding: "15px 0",
          }}
        >
          Initiate return
        </ListItem>
        <ListItem
          sx={{
            borderBottom: "1px solid #eee",
            margin: "0",
            padding: "15px 0",
          }}
        >
          Support
        </ListItem>
        <ListItem
          sx={{
            margin: "0",
            padding: "15px 0",
          }}
        >
          Language
        </ListItem>
      </List>
      <Button>Login</Button>
      <Box sx={{ marginTop: "5px" }}>
        <Typography
          sx={{
            fontSize: "12px",
            color: "#C4C4C4",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          No account yet
          <NavLink
            style={{
              textTransform: "uppercase",
              color: "#27272E",
              borderBottom: "2px solid #27272E",
            }}
            to="/register"
          >
            Register Here
          </NavLink>
        </Typography>
      </Box>
    </Box>
  );
};

export default MyAccountMenu;
