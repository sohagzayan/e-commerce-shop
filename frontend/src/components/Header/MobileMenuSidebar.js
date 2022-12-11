import * as React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import logo from "../../assets/logo.png";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
const MobileMenuSidebar = ({ isOpenSideBar, setIsOpenSideBar }) => {
  // console.log(isOpenSideBar);
  return (
    <div className="sidebar-container">
      <Backdrop
        sx={{ display: "flex", justifyContent: "start" }}
        open={isOpenSideBar}
        // onClick={() => setIsOpenSideBar(false)}
      >
        <motion.div
          animate={{
            width: isOpenSideBar ? "300px" : "0px",
            // x: isOpen ? 0 : -100,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          className="sidebar"
        >
          <List
            sx={{
              width: 250,
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <img src={logo} alt="" />
              <CloseIcon
                onClick={() => setIsOpenSideBar(false)}
                sx={{
                  color: "#777777",
                  backgroundColor: "#F6F7FB",
                  fontSize: "30px",
                  padding: "1px",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              />
            </Box>
            <Divider sx={{ marginBottom: "30px" }} />
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setIsOpenSideBar(false)}
            >
              <NavLink to="/">
                <ListItemButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      color: "#202020",
                    }}
                  >
                    <HomeOutlinedIcon sx={{ marginRight: "25px" }} /> Home
                  </Box>
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setIsOpenSideBar(false)}
            >
              <NavLink to="/shop">
                <ListItemButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      color: "#202020",
                    }}
                  >
                    <ShoppingCartOutlinedIcon sx={{ marginRight: "25px" }} />{" "}
                    Shop
                  </Box>
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setIsOpenSideBar(false)}
            >
              <NavLink to="/about">
                <ListItemButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      color: "#202020",
                    }}
                  >
                    <InfoOutlinedIcon sx={{ marginRight: "25px" }} /> About
                  </Box>
                </ListItemButton>
              </NavLink>
            </ListItem>
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setIsOpenSideBar(false)}
            >
              <NavLink to="/blog">
                <ListItemButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      color: "#202020",
                    }}
                  >
                    <AssignmentOutlinedIcon sx={{ marginRight: "25px" }} /> Blog
                  </Box>
                </ListItemButton>
              </NavLink>
            </ListItem>

            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setIsOpenSideBar(false)}
            >
              <NavLink to="/contact">
                <ListItemButton>
                  <Box
                    sx={{
                      display: "flex",
                      alignItem: "center",
                      color: "#202020",
                    }}
                  >
                    <ContactsOutlinedIcon sx={{ marginRight: "25px" }} />{" "}
                    Contact
                  </Box>
                </ListItemButton>
              </NavLink>
            </ListItem>
          </List>
        </motion.div>
      </Backdrop>
    </div>
  );
};

export default MobileMenuSidebar;
