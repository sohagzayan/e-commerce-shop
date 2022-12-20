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
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: "30px",
        paddingY: "20px",
        borderBottom: "2px solid #f6f7fb",
      }}
    >
      <Box>
        <Typography variant="h5" sx={{ fontWeight: "600" }}>
          Cart review
        </Typography>
      </Box>
      <Box
        onClick={() => setShowCardView(false)}
        sx={{
          backgroundColor: "#f6f7fb",
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          cursor: "pointer",
        }}
      >
        <CloseIcon />
      </Box>
    </Box>
  );
};

export default CardViewHeader;
