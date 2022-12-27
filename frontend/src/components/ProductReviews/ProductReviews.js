import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Review from "./Review";
import { reviews } from "../../util/reviews";

const ProductReviews = ({ product }) => {
  const [ratingValue, setRatingValue] = useState(0);

  const optionForEditMode = {
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: 16,
    edit: true,
    emptyIcon: <StarBorderRoundedIcon />,
    halfIcon: <StarHalfRoundedIcon />,
    filledIcon: <StarRateRoundedIcon />,
    value: product.ratings,
  };

  return (
    <div>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            textTransform: "uppercase",
            marginBottom: "30px",
          }}
        >
          <Typography
            sx={{
              fontSize: "16px",
              borderBottom: "2px solid rgba(0,0,0,.1)",
              padding: "5px 70px",
            }}
          >
            Reviews
          </Typography>
        </Box>
        <Box>
          <Typography sx={{ fontSize: "20px", marginBottom: "30px" }}>
            Customer Reviews
          </Typography>
          <Grid container spacing={4}>
            <Grid item sm={12} md={6}>
              <Typography
                sx={{
                  fontSize: "14px",
                }}
              >
                1 REVIEW FOR IPHONE 12 PRO MOMENT CASE – OLIVE
              </Typography>
              <Box>
                {reviews.map((rev) => (
                  <Review rev={rev} />
                ))}
              </Box>
            </Grid>
            <Grid item sm={12} md={6}>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                ADD A REVIEW
              </Typography>
              <Typography
                sx={{
                  fontSize: "13px",
                  fontWeight: "600",
                  color: "#777",
                  marginTop: "10px",
                }}
              >
                Your email address will not be published. Required fields are
                marked *
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "10px",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#777",
                    marginRight: "15px",
                  }}
                >
                  Your rating{" "}
                  <span style={{ color: "#E01020", fontSize: "18px" }}>*</span>{" "}
                  :
                </Typography>
                <ReviewStar
                  onChange={(newValue) => setRatingValue(newValue)}
                  {...optionForEditMode}
                />
              </Box>
              <Box>
                <label
                  style={{
                    fontSize: "13px",
                    fontWeight: "600",
                    color: "#777",
                    marginBottom: "15px",
                    display: "inline-block",
                  }}
                  htmlFor="review"
                >
                  Your review{" "}
                  <span style={{ color: "#E01020", fontSize: "18px" }}>*</span>{" "}
                </label>
                <textarea
                  style={{
                    width: "100%",
                    border: "1px solid rgba(0,0,0,.1)",
                    outline: "none",
                    padding: "10px",
                    fontSize: "16px",
                  }}
                  name=""
                  id="review"
                  cols="30"
                  rows="10"
                ></textarea>
                <Button
                  sx={{
                    backgroundColor: "rgb(46,107,198)",
                    color: "#fff",
                    marginTop: "10px",
                  }}
                >
                  Submit
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </div>
  );
};

export default ProductReviews;
