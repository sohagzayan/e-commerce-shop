import React, { useEffect } from "react";
import { Box, Button, Grid, Typography } from "@mui/material";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { getUserDetails } from "../../store/reducerSlice/getSingleUserDetailsSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store";
import moment from "moment";

const Review = ({ rev }: any) => {
  const dispatch = useDispatch<AppDispatch>();
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
          <img
            width={50}
            style={{ clipPath: "circle()" }}
            src={rev?.user?.avatar?.url}
            alt=""
          />
        </Box>
        <Box sx={{ width: "100%" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "5px",
              width: "100%",
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
                  fontSize: "15px",
                  fontWeight: "500",
                  fontStyle: "normal",
                  fontFamily: "Poppins",
                  color: "#333",
                  marginRight: "5px",
                }}
              >
                {rev?.user?.name}
              </Typography>{" "}
              -{moment(rev?.createdAt).format("MMMM Do YYYY")}
            </Box>
            <Box>
              <ReviewStar {...optionForEditMode} />
            </Box>
          </Box>
          <Box>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "13px",
                color: "#777",
                lineHeight: "23px",
              }}
            >
              {rev.comment}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Review;
