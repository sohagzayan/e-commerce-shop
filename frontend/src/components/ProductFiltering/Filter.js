import { Box, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { getProduct } from "../../actions/productAction";
import { Button } from "../../style/ProductFiltering/ProductFiltering";
import { filterColor } from "../../util/FilterOption";
import CategoryFilter from "./CategoryFilter";
import ColorFilter from "./ColorFilter";
import RatingFilter from "./RatingFilter";
import PriceFilter from "./PriceFilter";
import SizeFilter from "./SizeFilter";

const Filter = ({
  pCategory,
  setPCategory,
  setPrice,
  price,
  setActiveColor,
  activeColor,
  setPRating,
  pRating,
  setActiveExactPrice,
  activeExactPrice,
  ResetFiltering,
}) => {
  return (
    <Box>
      <CategoryFilter pCategory={pCategory} setPCategory={setPCategory} />
      <RatingFilter {...{ pRating, setPRating }} />
      <ColorFilter activeColor={activeColor} setActiveColor={setActiveColor} />
      <SizeFilter />
      <PriceFilter
        {...{ setActiveExactPrice, activeExactPrice, price, setPrice }}
      />
      <Button onClick={ResetFiltering}>All Reset</Button>
    </Box>
  );
};

export default Filter;
