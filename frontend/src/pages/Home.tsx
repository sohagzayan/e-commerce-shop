import { Box, styled } from "@mui/material";
import Hero from "../components/HomeOthers/Hero";
import OurProduct from "../components/Product/OurProduct";
import { motion } from "framer-motion";
import Header from "../components/Header/Header";
import HeroSlider from "../components/HomeOthers/HeroSlider";

const HomeWrapper = styled(Box)(({ theme }) => ({
  height: "100000px",
}));

const Home = () => {
  return (
    <>
      <Header />
      <Box sx={{ overflowX: "hidden" }}>
        <motion.div
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          {/* <Hero /> */}
          <HeroSlider />
          <OurProduct />
        </motion.div>
      </Box>
    </>
  );
};

export default Home;
