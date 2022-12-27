import React from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";

const Review = ({ rev }) => {
  const optionForEditMode = {
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: 13,
    edit: false,
    emptyIcon: <StarBorderRoundedIcon sx={{ fontSize: "22px" }} />,
    halfIcon: <StarHalfRoundedIcon sx={{ fontSize: "22px" }} />,
    filledIcon: <StarRateRoundedIcon sx={{ fontSize: "22px" }} />,
    value: rev.rating,
  };

  return (
    <Box sx={{ marginTop: "40px" }}>
      <Box sx={{ display: "flex", width: "100%" }}>
        <Box sx={{ marginRight: "15px" }}>
          <img style={{ borderRadius: "50%" }} src={rev.image} alt="" />
        </Box>
        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              marginBottom: "5px",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                color: "#777",
                fontStyle: "italic ",
                fontSize: "14px",
              }}
            >
              <Typography
                sx={{
                  fontSize: "18px",
                  fontWeight: "bold",
                  fontStyle: "normal",
                  color: "#333",
                }}
              >
                {rev.name}
              </Typography>{" "}
              - September 2, 2022
            </Box>
            <Box>
              <ReviewStar {...optionForEditMode} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{ fontSize: "13px", color: "#777", lineHeight: "23px" }}
            >
              {rev.text}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
