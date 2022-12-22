import * as React from "react";
import logo from "../../assets/logo.png";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Backdrop, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { headerMenu } from "../../util/HeaderMenu";

const Ul = styled("ul")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
}));

interface Props {
  isOpenSideBar: boolean;
  setIsOpenSideBar: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenuSidebar = ({ isOpenSideBar, setIsOpenSideBar }: Props) => {
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
            <Divider sx={{ marginBottom: "30px", marginTop: "10px" }} />

            {
              <Ul>
                {headerMenu.map((menu, index) => (
                  <li key={index} style={{ marginBottom: "20px" }} className="">
                    <NavLink
                      className={({ isActive }) => (isActive ? "" : "")}
                      to={menu.path}
                    >
                      {menu.name}
                    </NavLink>
                  </li>
                ))}
              </Ul>
            }
          </List>
        </motion.div>
      </Backdrop>
    </div>
  );
};

export default MobileMenuSidebar;
