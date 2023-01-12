import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";

const CardViewSummary = () => {
  return (
    <Box
      sx={{
        position: "sticky",
        width: "100%",
        bottom: 0,
        left: 0,
        backgroundColor: "#F9FAFB",
        borderTop: "1px solid rgb(226,232,240,1)",
        padding: "15px 40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ fontSize: "16px", fontWeight: "600", color: "#1E293B" }}
        >
          Subtotal:
        </Typography>
        <Typography
          sx={{ fontSize: "16px", fontWeight: "600", color: "#1E293B" }}
        >
          $610.00
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "13px", fontWeight: "600", color: "#1E293B" }}
      >
        Shipping and taxes calculated at checkout.
      </Typography>
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
            backgroundColor: "#fff",
            border: "1px solid rgb(226,232 ,240,1)",
            color: "#1E293B",
            padding: "18px 38px",
            width: "100%",
            fontWeight: "600",
            margin: "0 5px",
            borderRadius: "40px",
            fontSize: "15px",
            cursor: "pointer",
          }}
        >
          View Card
        </button>
        <button
          style={{
            backgroundColor: "#1E293B",
            color: "#fff",
            padding: "18px 38px",
            width: "100%",
            fontWeight: "600",
            margin: "0 5px",
            border: "none",
            borderRadius: "40px",
            cursor: "pointer",
            fontSize: "15px",
          }}
        >
          Check Out
        </button>
      </Box>
    </Box>
  );
};

export default CardViewSummary;
