import { Box, styled } from "@mui/material";
import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import OurProduct from "../components/OurProduct";

const HomeWrapper = styled(Box)(({ theme }) => ({
  height: "100000px",
}));

const Home = () => {
  return (
    <HomeWrapper>
      <Header />
      <Hero />
      <OurProduct />
    </HomeWrapper>
  );
};

export default Home;
