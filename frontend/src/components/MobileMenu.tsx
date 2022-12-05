import * as React from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AssignmentOutlinedIcon from "@mui/icons-material/AssignmentOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import logo from "../assets/logo.png";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import Box from "@mui/material/Box";
import ListItemButton from "@mui/material/ListItemButton";
import { NavLink } from "react-router-dom";

interface Props {
  setOpenDrower: React.Dispatch<React.SetStateAction<boolean>>;
  openDrower: boolean;
}
const TemporaryDrawer: React.FC<Props> = (props) => {
  const { openDrower, setOpenDrower } = props;
  return (
    <div>
      <React.Fragment>
        <Drawer open={openDrower} onClose={() => setOpenDrower(false)}>
          <List
            sx={{
              width: 250,
            }}
          >
            <ListItemButton>
              <img src={logo} alt="" />
            </ListItemButton>
            <Divider sx={{ marginBottom: "30px" }} />
            <ListItem
              disablePadding
              sx={{ display: "block" }}
              onClick={() => setOpenDrower(false)}
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
              onClick={() => setOpenDrower(false)}
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
              onClick={() => setOpenDrower(false)}
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
              onClick={() => setOpenDrower(false)}
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
              onClick={() => setOpenDrower(false)}
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
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default TemporaryDrawer;
