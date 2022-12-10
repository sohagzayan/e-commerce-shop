import React from "react";
import { Box } from "@mui/material";
import HeaderTwo from "../components/HeaderTwo";
import ExploreAllProducts from "../components/ExploreAllProducts";
import Products from "../components/Products";

const Shop = () => {
  return (
    <Box>
      <Box>
        <HeaderTwo />
        <ExploreAllProducts />
        <Products />
      </Box>
    </Box>
  );
};

export default Shop;
