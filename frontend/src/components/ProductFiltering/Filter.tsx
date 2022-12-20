import { Box, styled } from "@mui/material";
import React from "react";
import { Button } from "../../style/ProductFiltering/ProductFiltering";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Filter = () => {
  return (
    <Box>
      <CategoryFilter />
      <GenderFilter />
      <ColorFilter />
      <SizeFilter />
      <PriceFilter />
      <Button>All Reset</Button>
    </Box>
  );
};

export default Filter;
