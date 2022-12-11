import { Box, styled } from "@mui/material";
import React from "react";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import GenderFilter from "./GenderFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#3577f0",
  width: "100%",
  padding: "16px 38px",
  fontWeight: "700",
  borderRadius: "6px",
  fontSize: "16px",
  border: "none",
  color: "#fff",
}));

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
