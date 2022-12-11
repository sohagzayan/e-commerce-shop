import React from "react";
import { Box } from "@mui/material";
import HeaderTwo from "../components/Header/HeaderTwo";
import ExploreAllProducts from "../components/ShopOthers/ExploreAllProducts";
import Products from "../components/Product/Products";
import { motion } from "framer-motion";
const Shop = () => {
  return (
    <Box sx={{ overflowX: "hidden" }}>
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: 0 }}
        transition={{ duration: 0.1, type: "spring", damping: 10 }}
      >
        <Box>
          <Box>
            <HeaderTwo />
            <ExploreAllProducts />
            <Products />
          </Box>
        </Box>
      </motion.div>
    </Box>
  );
};

export default Shop;
