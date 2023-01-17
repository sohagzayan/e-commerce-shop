import { Box, Skeleton, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { useState } from "react";
import ProductController from "../Product/ProductController";
import image2 from "../../assets/product/product-01(2).png";
import {
  Button,
  CardContent,
  CardWrapper,
  DiscountRange,
  TypographyOfferPrice,
  TypographyOldPrice,
  Span,
} from "../../style/Product/Product";
import { useNavigate } from "react-router-dom";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import { ProductType } from "../Types/Types";
import ProductSizeController from "../Product/ProductSizeController";
import { getRelativeTime } from "../../sharedFunction/getRelativeTime";
import moment from "moment";
import ProductDetailsView from "../Product/ProductDetailsView";

interface ProductProps {
  data: ProductType;
  isOpenDetails: boolean;
  seIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const SkeletonProduct = () => {
  const Colors = ["#A78BFA", "#FACC15", "#FB923C", "#38BDF8", "#4ADE80"];

  const navigate = useNavigate();
  const option = {
    edit: false,
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: window.innerWidth < 600 ? 20 : 22,
    emptyIcon: <StarBorderRoundedIcon />,
    halfIcon: <StarHalfRoundedIcon />,
    filledIcon: <StarRateRoundedIcon />,
    value: 4,
  };
  return (
    <CardWrapper className="cardWrapper">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Box sx={{ position: "relative", overflow: "hidden" }}>
          <Span sx={{ cursor: "pointer" }}>
            <Skeleton variant="rectangular" width="100%" height={200} />
          </Span>
        </Box>
        <DiscountRange>
          <Skeleton variant="rectangular" width="100%" height={10} />
        </DiscountRange>

        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
            >
              <Skeleton
                variant="rectangular"
                width={100}
                height={25}
                sx={{ borderRadius: "6px" }}
              />
            </Box>
          </Box>
          <Box sx={{ marginBottom: "16px" }}></Box>

          <Typography
            sx={{
              color: "#828A8B",
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "14px",
            }}
          >
            <Skeleton variant="text" sx={{ fontSize: "1rem" }} />
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <Box>
              <Skeleton
                variant="rectangular"
                width={200}
                height={30}
                sx={{ borderRadius: "6px" }}
              />
            </Box>
          </Box>
        </CardContent>
      </Box>
    </CardWrapper>
  );
};

export default SkeletonProduct;
