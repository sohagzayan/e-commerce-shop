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
        initial={{ x: 200, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, type: "tween" }}
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
