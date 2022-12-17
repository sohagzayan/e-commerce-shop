import { Box, styled } from "@mui/material";
import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/HomeOthers/Hero";
import OurProduct from "../components/Product/OurProduct";
import { motion } from "framer-motion";
const HomeWrapper = styled(Box)(({ theme }) => ({
  height: "100000px",
}));

const Home = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
      >
        <HomeWrapper>
          <Header />
          <Hero />
          <OurProduct />
        </HomeWrapper>
      </motion.div>
    </Box>
  );
};

export default Home;
