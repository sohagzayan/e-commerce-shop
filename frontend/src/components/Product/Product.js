import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ProductController from "./ProductController";
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

const Product = ({ data, seIsOpenDetails, isOpenDetails }) => {
  const { name, price, discountPrice, _id, colorVariant } = data;
  const [activeColor, setActiveColor] = useState(colorVariant[0]);
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
    value: parseInt(data.ratings),
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
        <Box sx={{ position: "relative" }}>
          <Span
            onClick={() => navigate(`/details/${_id}`)}
            className="image_wrapper"
            sx={{ cursor: "pointer" }}
          >
            <img
              className="beforeHover"
              src={data?.image[0].url}
              alt="product"
            />
            <img className="onHover" src={image2} alt="product" />
          </Span>
          <ProductController seIsOpenDetails={seIsOpenDetails} />
        </Box>
        <DiscountRange>20% off</DiscountRange>

        <CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "5px",
            }}
          >
            <ReviewStar {...option} />
            <Typography
              sx={{
                fontSize: "16px",
                color: "#777",
                fontWeight: "600",
                marginLeft: "3px",
              }}
            >
              (232)
            </Typography>
          </Box>
          <Typography
            sx={{ color: "#777777", fontWeight: "600", marginBottom: "7px" }}
          >
            {name}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "6px" }}
          >
            <TypographyOfferPrice>${price}</TypographyOfferPrice>
            <TypographyOldPrice>${price}</TypographyOldPrice>
          </Box>
          {colorVariant.length > 0 && (
            <Box>
              {colorVariant &&
                colorVariant.map((c, index) => (
                  <Button
                    key={index}
                    className="color_rounded "
                    onClick={() => setActiveColor(c)}
                    sx={{
                      backgroundColor: `${c}`,
                      "::after": {
                        border: {
                          border: `1px solid ${
                            activeColor === c ? c : "transparent"
                          }`,
                        },
                      },
                    }}
                  ></Button>
                ))}
            </Box>
          )}
        </CardContent>
      </Box>
    </CardWrapper>
  );
};

export default Product;
