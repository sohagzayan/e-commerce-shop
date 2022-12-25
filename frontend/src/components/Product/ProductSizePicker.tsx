import { Box, styled, Typography, Grid } from "@mui/material";
import React, { useState } from "react";
import { GetSizeButton } from "../../style/ProductFiltering/ProductFiltering";
import { filterSize } from "../../util/FilterOption";

const Button = styled("button")(({ theme }) => ({}));

const ProductSizePicker = () => {
  const filterSize = ["xs", "s", "m", "l", "xl"];
  const [activeSize, setActiveSize] = useState(filterSize[0]);
  return (
    <>
      <Grid container sx={{ marginTop: "20px" }}>
        <Grid item xs={3}>
          <Box>
            <Typography
              sx={{
                fontSize: "17px",
                color: "#27272E",
                fontWeight: "600",
              }}
            >
              Size:
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={9} sx={{ display: "flex", flexWrap: "wrap" }}>
          {filterSize.map((size, index) => (
            <GetSizeButton
              key={index}
              className="sizeButton"
              onClick={() => setActiveSize(size)}
              sx={{
                backgroundColor:
                  activeSize === size ? "#0d6efd" : "transparent",
                color: activeSize === size ? "#fff" : "#777777",
              }}
            >
              {size}
            </GetSizeButton>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default ProductSizePicker;
