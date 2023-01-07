import { Box } from "@mui/material";
import React, { useState } from "react";
import { FilteringProps } from "../Types/Types";
import CategoriesFiltering from "./CategoriesFiltering";
import ColorFiltering from "./ColorFiltering";
import OnSaleFiltering from "./OnSaleFiltering";
import PriceFiltering from "./PriceFiltering";
import SizeFiltering from "./SizeFiltering";
import SortFiltering from "./SortFiltering";

const Filtering: React.FunctionComponent<FilteringProps> = (props) => {
  const {
    priceRange,
    colors,
    sizes,
    sorts,
    selectAllCategory,
    categoryes,
    setCategoryes,
    setPriceRange,
    setColors,
    setSizes,
    setSorts,
    setSelectAllCategory,
  } = props;
  return (
    <Box sx={{ marginBottom: "15px" }}>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <PriceFiltering {...{ priceRange, setPriceRange }} />
            <CategoriesFiltering
              {...{
                categoryes,
                setCategoryes,
                selectAllCategory,
                setSelectAllCategory,
              }}
            />
            <ColorFiltering {...{ colors, setColors }} />
            <SizeFiltering {...{ sizes, setSizes }} />
            <OnSaleFiltering />
          </Box>
          <Box>
            <SortFiltering {...{ sorts, setSorts }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Filtering;
