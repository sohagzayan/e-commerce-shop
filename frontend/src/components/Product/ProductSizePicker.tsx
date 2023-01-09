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
      <Box sx={{ marginTop: "20px" }}>
        <Box>
          <Box>
            <Typography
              sx={{
                fontSize: "14px",
                color: "#27272E",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Size: M
            </Typography>
          </Box>
        </Box>
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
      </Box>
    </>
  );
};

export default ProductSizePicker;
