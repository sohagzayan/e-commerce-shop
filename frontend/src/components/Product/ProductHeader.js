import { Box } from "@mui/material";
import React from "react";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
const ProductHeader = ({ matches, setIsOpen }) => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "end",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Box>Showing 1-12 of 84 results</Box>
          <Box>
            <select className="sortedBox" name="" id="">
              <option value="">Short by Latest</option>
              <option value="">Short by Oldest</option>
              <option value="">Short by Name</option>
              <option value="">Short by Price</option>
            </select>
          </Box>
        </Box>
      </Box>
      {matches && (
        <Box
          onClick={() => setIsOpen(true)}
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "13px",
            borderBottom: "1px solid #3577F0",
            width: "80px",
            marginBottom: "20px",
            cursor: "pointer",
          }}
        >
          <FilterAltIcon />
          FILTER
        </Box>
      )}
    </Box>
  );
};

export default ProductHeader;
