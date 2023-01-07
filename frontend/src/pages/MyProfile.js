import React, { Fragment, useState } from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import HeaderTwo from "../components/Header/HeaderTwo";
import "../components/MyProfile/Tab.css";
import { Container, Grid } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import SimCardDownloadOutlinedIcon from "@mui/icons-material/SimCardDownloadOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ManageAccountsOutlinedIcon from "@mui/icons-material/ManageAccountsOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ExploreAllProducts from "../components/ShopOthers/ExploreAllProducts";
import AllOrders from "../components/MyProfile/AllOrders";
import MyProfileView from "../components/MyProfile/MyProfileView";

const MyProfile = () => {
  return (
    <Fragment>
      <HeaderTwo />
      <Box sx={{ marginBottom: "100px" }}>
        <ExploreAllProducts />
      </Box>

      <Container maxWidth="lg" sx={{ marginBottom: "200px" }}>
        <Box>
          <img
            style={{ borderRadius: "50%", marginBottom: "3px" }}
            src="https://new.axilthemes.com/demo/template/etrade/assets/images/product/author1.png"
            alt="user-images"
          />
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              color: "#292930",
              marginBottom: "3px",
            }}
          >
            Hello Annie
          </Typography>
          <Typography
            sx={{
              fontSize: "13px",
              fontWeight: "600",
              color: "#777",
              marginBottom: "50px",
            }}
          >
            eTrade Member Since Sep 2020
          </Typography>
        </Box>
        <Tabs style={{ position: "relative" }}>
          <TabList>
            <Tab>
              <PersonOutlineOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "24px" }}
              />
              <span>Account info</span>
            </Tab>
            <Tab>
              <ShoppingBasketOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "24px" }}
              />
              <span>Orders</span>
            </Tab>
            <Tab>
              <SimCardDownloadOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "24px" }}
              />
              <span>Downloads</span>
            </Tab>
            <Tab>
              <HomeOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "24px" }}
              />
              <span>Addresses</span>
            </Tab>

            <Tab>
              <LogoutOutlinedIcon
                sx={{ marginRight: "10px", fontSize: "24px" }}
              />
              <span>Logout</span>
            </Tab>
          </TabList>

          <TabPanel>
            <MyProfileView />
          </TabPanel>
          <TabPanel>
            <AllOrders />
          </TabPanel>
        </Tabs>
      </Container>
    </Fragment>
  );
};

export default MyProfile;
