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
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 0.1, type: "spring", damping: 10 }}
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
