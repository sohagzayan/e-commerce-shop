import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import FilteringHeader from "./FilteringHeader";

const OnSaleFiltering = () => {
  const [showOnSaleFiltering, setShowOnSaleFiltering] = useState(false);
  return (
    <Box>
      <FilteringHeader
        onChange={setShowOnSaleFiltering}
        state={showOnSaleFiltering}
        startIcon="ri-bubble-chart-line"
      >
        On sale
      </FilteringHeader>
    </Box>
  );
};

export default OnSaleFiltering;
