import {
  Box,
  styled,
  Grid,
  Typography,
  useMediaQuery,
  useTheme,
  Container,
  Button,
} from "@mui/material";

// import { ProductImage } from "../../util/Product";
import { Fragment, useEffect, useState } from "react";
import product1 from "../assets/product/product-big-01.png";
import product2 from "../assets/product/product-big-02.png";
import product3 from "../assets/product/product-big-03.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ProductColorPicker from "../components/Product/ProductColorPicker";
import ProductSizePicker from "../components/Product/ProductSizePicker";
import ProductDetailsController from "../components/Product/ProductDetailsController";
import { motion, AnimatePresence } from "framer-motion";
import HeaderTwo from "../components/Header/HeaderTwo";
import { useDispatch, useSelector } from "react-redux";
// import { clearErrors, getProductDetails } from "../actions/productAction";
import { useParams } from "react-router-dom";
import ReviewStar from "react-rating-stars-component";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import StarHalfRoundedIcon from "@mui/icons-material/StarHalfRounded";
import StarRateRoundedIcon from "@mui/icons-material/StarRateRounded";
import ProductReviews from "../components/ProductReviews/ProductReviews";
import { useAlert } from "react-alert";
import Loading from "../components/Loading/Loading";
import { ScrollTop } from "../sharedFunction/ScrollTop";
const ProductDetailsWrapper = styled(Box)(({ theme }) => ({
  overflowX: "hidden",
}));

const ThumbanalImage = styled("img")(({ theme }) => ({
  width: "491px",
  paddingRight: "45px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ProductDetails = ({}) => {
  useEffect(() => {
    ScrollTop();
  }, []);

  const alert = useAlert();
  const { id } = useParams();
  const ProductImage = [product1, product2, product3];
  const [ratingValue, setRatingValue] = useState(0);
  const [activeImage, setActiveImage] = useState(ProductImage[0]);
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  // const { loading, error, product } = useSelector(
  //   (state) => state.productDetails
  // );

  const option = {
    color: "rgba(20, 20, 20,0.1)",
    activeColor: "#FFDC60",
    isHalf: true,
    size: 16,
    edit: false,
    emptyIcon: <StarBorderRoundedIcon />,
    halfIcon: <StarHalfRoundedIcon />,
    filledIcon: <StarRateRoundedIcon />,
    value: 3,
  };

  return (
    <Fragment>
      {false ? (
        <Loading />
      ) : (
        <Fragment>
          <Box sx={{ marginTop: "30px", overflow: "hidden" }}>
            <HeaderTwo />
            <div>
              <ProductDetailsWrapper>
                <Box>
                  <Container maxWidth="lg">
                    <Box>
                      <Grid container>
                        <Grid item xs={12} md={7}>
                          <Box sx={{ padding: "25px" }}>
                            <Grid
                              container
                              direction={breakpoint ? "column-reverse" : "row"}
                            >
                              <Grid item xs={12} md={2}>
                                <Box
                                  sx={{
                                    marginTop: breakpoint ? "70px" : "0",
                                  }}
                                >
                                  {ProductImage.map((url, index) => (
                                    <img
                                      key={index}
                                      onClick={() => setActiveImage(url)}
                                      width="80px"
                                      style={{
                                        marginBottom: "10px",
                                        cursor: "pointer",
                                        marginRight: breakpoint ? "20px" : "0",
                                        borderRadius: "50%",
                                      }}
                                      src={url}
                                      alt=""
                                    />
                                  ))}
                                </Box>
                              </Grid>
                              <Grid item xs={10}>
                                <ThumbanalImage
                                  src={activeImage}
                                  alt="images"
                                />
                              </Grid>
                            </Grid>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Box sx={{ padding: "25px" }}>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                borderBottom: "2px solid #f6f7fb",
                                paddingBottom: "15px",
                              }}
                            >
                              <ReviewStar {...option} />

                              <Typography
                                sx={{
                                  fontSize: "14px",
                                  color: "#777",
                                  marginLeft: "3px",
                                }}
                              >
                                (1 customer reviews)
                              </Typography>
                            </Box>
                            <Typography
                              sx={{
                                color: "#27272E",
                                fontSize: "28px",
                                fontWeight: "600",
                                marginTop: "20px",
                              }}
                            >
                              {/* {product?.name} */}
                            </Typography>
                            <Typography
                              sx={{
                                color: "#27272E",
                                fontSize: "25px",
                                fontWeight: "500",
                                marginTop: "12px",
                              }}
                            >
                              {/* ${product?.price} */}
                            </Typography>
                            <Box
                              sx={{ marginTop: "20px", marginBottom: "20px" }}
                            >
                              <ul>
                                <li
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#3577f0",
                                    marginBottom: "5px",
                                  }}
                                >
                                  <CheckRoundedIcon
                                    sx={{
                                      fontSize: "18px",
                                      marginRight: "10px",
                                    }}
                                  />
                                  In stock
                                </li>
                                <li
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#3577f0",
                                    marginBottom: "5px",
                                  }}
                                >
                                  {" "}
                                  <CheckRoundedIcon
                                    sx={{
                                      fontSize: "18px",
                                      marginRight: "10px",
                                    }}
                                  />
                                  Free delivery available
                                </li>
                                <li
                                  style={{
                                    display: "flex",
                                    alignItems: "center",
                                    color: "#3577f0",
                                  }}
                                >
                                  {" "}
                                  <CheckRoundedIcon
                                    sx={{
                                      fontSize: "18px",
                                      marginRight: "10px",
                                    }}
                                  />
                                  Sales 30% Off Use Code: MOTIVE30
                                </li>
                              </ul>
                            </Box>
                            <Typography
                              sx={{ fontSize: "17px", color: "#333" }}
                            >
                              {/* {product?.description} */}
                            </Typography>
                            <ProductColorPicker />
                            <ProductSizePicker />
                            <ProductDetailsController />
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* <ProductReviews product={product} /> */}
                  </Container>
                </Box>
              </ProductDetailsWrapper>
            </div>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
