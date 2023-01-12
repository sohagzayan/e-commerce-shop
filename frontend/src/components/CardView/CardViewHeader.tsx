import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface CardHeaderProps {
  showCardView: boolean;
  setShowCardView: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardViewHeader = ({ setShowCardView, showCardView }: CardHeaderProps) => {
  return (
    <Box
      sx={{
        alignItems: "center",
        marginTop: "20px",
        padding: "0px 40px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h5" sx={{ fontWeight: "600", color: "#1E293B" }}>
          Shopping cart
        </Typography>
        <Typography
          onClick={() => setShowCardView(false)}
          variant="h5"
          sx={{ fontWeight: "600", color: "#1E293B", cursor: "pointer" }}
        >
          <i className="ri-close-fill"></i>
        </Typography>
      </Box>
    </Box>
  );
};

export default CardViewHeader;
