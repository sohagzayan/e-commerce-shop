import { Box } from "@mui/material";
import OurProduct from "../components/Product/OurProduct";
import { motion } from "framer-motion";
import Header from "../components/Header/HeaderOne";
import HeroSlider from "../components/HomeOthers/HeroSlider";
import MetaData from "../util/MetaData";

const Home = () => {
  return (
    <>
      <MetaData title="Home Page Is Working" />
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
