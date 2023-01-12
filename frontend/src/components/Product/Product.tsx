import { Box, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
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
import { ProductType } from "../Types/Types";
import ProductSizeController from "./ProductSizeController";
import { getRelativeTime } from "../../sharedFunction/getRelativeTime";
import moment from "moment";
import ProductDetailsView from "./ProductDetailsView";

interface ProductProps {
  data: ProductType;
  isOpenDetails: boolean;
  seIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Product = ({ data, seIsOpenDetails, isOpenDetails }: ProductProps) => {
  const {
    name,
    price,
    discountPrice,
    _id,
    colorVariant,
    sizeVariant,
    createdAt,
  } = data;
  const Colors = ["#A78BFA", "#FACC15", "#FB923C", "#38BDF8", "#4ADE80"];
  const [activeColor, setActiveColor] = useState(colorVariant[0]);
  var seconds = moment(createdAt, "YYYYMMDD hh:mm:ss").unix() - moment().unix();

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
          {!sizeVariant.length && (
            <ProductController seIsOpenDetails={seIsOpenDetails} />
          )}
          <ProductSizeController sizeVariant={sizeVariant} />
        </Box>
        <DiscountRange>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            style={{ width: "15px", marginRight: "8px" }}
            className="w-3.5 h-3.5 __web-inspector-hide-shortcut__"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
            ></path>
          </svg>
          20% off
        </DiscountRange>

        <CardContent>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box
              sx={{ display: "flex", alignItems: "center", fontSize: "13px" }}
            >
              <i style={{ marginRight: "3px" }} className="ri-eye-line"></i>
              344
            </Box>
            <Box sx={{ fontSize: "14px" }}>{moment(createdAt).fromNow()}</Box>
          </Box>
          <Box sx={{ marginBottom: "16px" }}>
            {colorVariant.length > 0 && (
              <Box>
                {colorVariant.map((c, index) => (
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
          </Box>
          <Typography
            sx={{
              color: "#343E4E",
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "16px",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              color: "#828A8B",
              fontWeight: "600",
              marginBottom: "5px",
              fontSize: "14px",
            }}
          >
            Perfect mint green
          </Typography>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "6px",
            }}
          >
            <TypographyOfferPrice>${price}</TypographyOfferPrice>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <StarRoundedIcon
                sx={{ fontSize: "20px", color: "#FBBF24", marginRight: "3px" }}
              />
              <Typography
                sx={{ color: "#828A8B", fontSize: "15px", fontWeight: "500" }}
              >
                4.0 (30 reviews)
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </Box>
    </CardWrapper>
  );
};

export default Product;
