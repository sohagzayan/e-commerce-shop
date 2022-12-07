import { Box, styled } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurProduct from "../components/OurProduct";

const HomeWrapper = styled(Box)(({ theme }) => ({
  height: "100000px",
}));

const HeaderBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#f9f3f0",
  paddingBottom: "10px",
  paddingTop: "20px",
  position: "sticky",
  top: 0,
  left: 0,
  zIndex: 60,
}));

const Home = () => {
  return (
    <HomeWrapper>
      <HeaderBox>
        <Header />
      </HeaderBox>
      <Hero />
      <OurProduct />
    </HomeWrapper>
  );
};

export default Home;
