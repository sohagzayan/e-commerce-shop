import { Box, Typography } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import { Fragment, useState } from "react";
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
import {
  Icon,
  ProductControllerWrapper,
} from "../../style/Product/ProductController";

interface ProductProps {
  data: ProductType;
  isOpenDetails: boolean;
  seIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
}

const Product = ({ data, seIsOpenDetails, isOpenDetails }: any) => {
  const {
    name,
    price,
    discountPrice,
    _id,
    ratings,
    numOfReviews,
    colorVariant,
    sizeVariant,
    createdAt,
  } = data;
  const Colors = ["#A78BFA", "#FACC15", "#FB923C", "#38BDF8", "#4ADE80"];
  const [activeColor, setActiveColor] = useState(colorVariant[0]);
  var seconds = moment(createdAt, "YYYYMMDD hh:mm:ss").unix() - moment().unix();
  // const [isOpenDetails, seIsOpenDetails] = useState(false);

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

  const handleViewProduct = () => {
    seIsOpenDetails(true);
  };
  return (
    <Fragment>
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
              <ProductControllerWrapper className="productCardWrapper">
                {/* <Button
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    fontSize: "12px",
                    fontWeight: "500",
                    backgroundColor: "#0F172A",
                    borderRadius: "30px",
                    padding: "6px 16px",
                    color: "#fff",
                    textTransform: "capitalize",
                    ":hover": {
                      backgroundColor: "#1E293B",
                    },
                  }}
                >
                  <svg
                    style={{ width: "16px", marginRight: "5px" }}
                    className="w-3.5 h-3.5 mb-0.5"
                    viewBox="0 0 9 9"
                    fill="none"
                  >
                    <path
                      d="M2.99997 4.125C3.20708 4.125 3.37497 4.29289 3.37497 4.5C3.37497 5.12132 3.87865 5.625 4.49997 5.625C5.12129 5.625 5.62497 5.12132 5.62497 4.5C5.62497 4.29289 5.79286 4.125 5.99997 4.125C6.20708 4.125 6.37497 4.29289 6.37497 4.5C6.37497 5.53553 5.5355 6.375 4.49997 6.375C3.46444 6.375 2.62497 5.53553 2.62497 4.5C2.62497 4.29289 2.79286 4.125 2.99997 4.125Z"
                      fill="currentColor"
                    ></path>
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M6.37497 2.625H7.17663C7.76685 2.625 8.25672 3.08113 8.29877 3.66985L8.50924 6.61641C8.58677 7.70179 7.72715 8.625 6.63901 8.625H2.36094C1.2728 8.625 0.413174 7.70179 0.490701 6.61641L0.70117 3.66985C0.743222 3.08113 1.23309 2.625 1.82331 2.625H2.62497L2.62497 2.25C2.62497 1.21447 3.46444 0.375 4.49997 0.375C5.5355 0.375 6.37497 1.21447 6.37497 2.25V2.625ZM3.37497 2.625H5.62497V2.25C5.62497 1.62868 5.12129 1.125 4.49997 1.125C3.87865 1.125 3.37497 1.62868 3.37497 2.25L3.37497 2.625ZM1.82331 3.375C1.62657 3.375 1.46328 3.52704 1.44926 3.72328L1.2388 6.66985C1.19228 7.32107 1.70805 7.875 2.36094 7.875H6.63901C7.29189 7.875 7.80766 7.32107 7.76115 6.66985L7.55068 3.72328C7.53666 3.52704 7.37337 3.375 7.17663 3.375H1.82331Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                  Add to bag
                </Button> */}
                <Button
                  onClick={() => navigate(`/details/${_id}`)}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                    fontSize: "12px",
                    fontWeight: "500",
                    backgroundColor: "#fff",
                    border: "none",
                    borderRadius: "30px",
                    padding: "3px 16px",
                    color: "#0F172A",
                    boxShadow:
                      "0 0 #0000,0 0 #0000,0 0 #0000,0 0 #0000,0 10px 15px -3px rgba(0,0,0,.1),0 4px 6px -4px rgba(0,0,0,.1)",
                    textTransform: "capitalize",
                  }}
                >
                  <svg
                    style={{ width: "16px", marginRight: "5px" }}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="w-3.5 h-3.5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15"
                    ></path>
                  </svg>
                  Details
                </Button>
              </ProductControllerWrapper>
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
                  {colorVariant.map((c: any, index: number) => (
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
                  sx={{
                    fontSize: "20px",
                    color: "#FBBF24",
                    marginRight: "3px",
                  }}
                />
                <Typography
                  sx={{ color: "#828A8B", fontSize: "15px", fontWeight: "500" }}
                >
                  {ratings} ({numOfReviews} reviews)
                </Typography>
              </Box>
            </Box>
          </CardContent>
        </Box>
      </CardWrapper>
    </Fragment>
  );
};

export default Product;
