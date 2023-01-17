import { Box, Button, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import Review from "./Review";
import { reviews } from "../../util/reviews";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../store/store";
import { createNewReview } from "../../store/reducerSlice/createProductReviewSlice";
import AllReviewController from "./AllReviewController";
import {
  reviewSortFiltering,
  ReviewSortsStateType,
} from "../../util/FilterOption";

const ProductReviews = ({ data, id }: any) => {
  const dispatch = useDispatch<AppDispatch>();

  const [openAllReview, setOpenAllReview] = useState(false);
  const [ratingValue, setRatingValue] = useState(0);
  const [rating, setRating] = useState<any>(0);
  const [comment, setComment] = useState("");

  const reviewSubmitHandler = () => {
    const myForm = new FormData();
    console.log("user here", id);
    myForm.set("rating", rating);
    myForm.set("comment", comment);
    myForm.set("productId", id);
    dispatch(createNewReview(myForm));
  };

  const optionForEditMode = {
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: 16,
    edit: true,
    emptyIcon: <StarBorderRoundedIcon />,
    halfIcon: <StarHalfRoundedIcon />,
    filledIcon: <StarRateRoundedIcon />,
    value: rating,
  };

  return (
    <div>
      <Box sx={{ position: "relative" }}>
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
        <Box sx={{ marginBottom: "30px" }}>
          <Typography sx={{ fontSize: "20px", marginBottom: "30px" }}>
            Customer Reviews
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
            }}
          >
            1 REVIEW FOR IPHONE 12 PRO MOMENT CASE – OLIVE
          </Typography>

          <Box>
            <Grid container spacing={4}>
              {data.reviews &&
                data?.reviews?.slice(0, 4).map((rev: any) => (
                  <Grid item sm={12} md={6}>
                    <Review rev={rev} />
                  </Grid>
                ))}
            </Grid>
            <Box>
              <Button
                onClick={() => setOpenAllReview(true)}
                sx={{
                  backgroundColor: "rgb(255,255,255,1)",
                  border: "1px solid rgb(203,213,225,1)",
                  color: "rgb(51,65,85,1)",
                  fontFamily: "Poppins",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  padding: "15px 30px",
                  borderRadius: "30px",
                  marginTop: "30px",
                }}
              >
                Show me all 142 reviews
              </Button>
            </Box>
          </Box>
        </Box>
        <AllReviewController {...{ setOpenAllReview, openAllReview, data }} />
      </Box>
    </div>
  );
};

export default ProductReviews;
