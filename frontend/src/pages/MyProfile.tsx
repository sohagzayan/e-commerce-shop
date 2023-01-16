import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HeaderTwo from "../components/Header/HeaderTwo";
import "../components/MyProfile/Tab.css";
import {
  Container,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExploreAllProducts from "../components/ShopOthers/ExploreAllProducts";
import AllOrders from "../components/MyProfile/MyOrders";
import MyProfileView from "../components/MyProfile/MyProfileView";
import MyProfileControll from "../components/MyProfile/MyProfileControll";
import { NavLink, Outlet, useLocation, useNavigate } from "react-router-dom";
import { innerMenu } from "../util/myProfile";
import MyProfileMobileMenu from "../components/MyProfile/MyProfileMobileMenu";
import { useSelector } from "react-redux";
import moment from "moment";

const InnerMenu = styled("ul")(({ theme }) => ({
  border: "1px solid #CBD3D9",
  padding: "20px 30px",
  borderRadius: "6px",
  width: "250px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const UserProfileSidebar = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  shadow: "10px 10px 10px #000",
}));

const MyProfile = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const { user, loading, error } = useSelector((state: any) => state.user);
  const { avatar, name, email, createdAt } = user;
  // console.log(location.pathname === "/profile");

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
        <HeaderTwo />
        <Container maxWidth="lg">
          <Box>
            <img
              style={{
                width: "100px",
                clipPath: "circle()",
                marginBottom: "3px",
              }}
              src={avatar?.url}
              alt="user-images"
            />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "500",
                color: "#292930",
                marginBottom: "3px",
                fontFamily: "Poppins",
              }}
            >
              Hello {name}
            </Typography>
            <Typography
              sx={{
                fontSize: "13px",
                fontWeight: "500",
                color: "#777",
                marginBottom: "50px",
                fontFamily: "Poppins",
              }}
            >
              eTrade Member Since Sep {moment(createdAt).format("MMM Do YY")}
            </Typography>
          </Box>
          <Grid container style={{ position: "relative" }} spacing={4}>
            <Grid item xs={12}>
              {matches ? (
                <InnerMenu>
                  {innerMenu.map((menu, index) => (
                    <li key={index}>
                      <NavLink
                        className={({ isActive }) =>
                          isActive ? "innerMenu active" : "c"
                        }
                        to={menu.path}
                      >
                        <i
                          style={{ marginRight: "10px", fontSize: "20px" }}
                          className={menu.icon}
                        ></i>
                        {menu.name}
                      </NavLink>
                    </li>
                  ))}
                </InnerMenu>
              ) : (
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "30px",
                  }}
                >
                  {innerMenu.map((menu, index) => (
                    <MyProfileMobileMenu key={index} menu={menu} />
                  ))}
                </Box>
              )}
            </Grid>
            <Grid item xs={12}>
              <Outlet />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Fragment>
  );
};

export default MyProfile;
