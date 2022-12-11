import React from "react";
import { Box } from "@mui/material";
import HeaderTwo from "../components/Header/HeaderTwo";
import ExploreAllProducts from "../components/ShopOthers/ExploreAllProducts";
import Products from "../components/Product/Products";
import { motion } from "framer-motion";
const Shop = () => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: 0 }}
      transition={{ duration: 0.3, type: "spring", damping: 10 }}
    >
      <Box>
        <Box>
          <HeaderTwo />
          <ExploreAllProducts />
          <Products />
        </Box>
      </Box>
    </motion.div>
  );
};

export default Shop;
