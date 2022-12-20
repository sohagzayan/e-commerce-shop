import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const CardViewSummary = () => {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          Subtotal:
        </Typography>
        <Typography sx={{ fontSize: "20px", fontWeight: "600" }}>
          $610.00
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <button
          style={{
            backgroundColor: "#3577f0",
            color: "#fff",
            padding: "16px 38px",
            width: "100%",
            fontWeight: "600",
            margin: "0 5px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          View Card
        </button>
        <button
          style={{
            backgroundColor: "#ff497c",
            color: "#fff",
            padding: "16px 38px",
            width: "100%",
            fontWeight: "600",
            margin: "0 5px",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Checkout
        </button>
      </Box>
    </Box>
  );
};

export default CardViewSummary;
