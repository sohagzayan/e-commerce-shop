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
import ProductColorPicker from "../components/Product/ProductColorPicker";
import ProductSizePicker from "../components/Product/ProductSizePicker";
import ProductDetailsController from "../components/Product/ProductDetailsController";
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
import ProductAccordion from "../components/ProductAccordion/ProductAccordion";
import {
  getProductDetails,
  getProductDetailsErrorClear,
} from "../store/reducerSlice/getProductDetailsSlice";
import { AppDispatch } from "../store/store";
import { addItemsToCard } from "../store/reducerSlice/cardSlice";
import {
  createReviewClearError,
  createReviewReset,
} from "../store/reducerSlice/createProductReviewSlice";
import AddReviewModal from "../components/ProductReviews/AddReviewModal";
import {
  reviewSortFiltering,
  ReviewSortsStateType,
} from "../util/FilterOption";

const ProductDetailsWrapper = styled(Box)(({ theme }) => ({
  overflowX: "hidden",
  marginTop: "30px",
}));

const ThumbanalImage = styled("img")(({ theme }) => ({
  width: "491px",
  paddingRight: "5px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const ProductDetails = () => {
  const alert = useAlert();
  const { id } = useParams();
  const ProductImage = [product1, product2, product3];
  const [quantity, setQuantity] = useState(1);
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch<AppDispatch>();
  const [openAddReview, setOpenAddReview] = useState(false);

  const { isAuthenticated, user } = useSelector((state: any) => state.user);
  const { loading, error, data } = useSelector(
    (state: any) => state.productDetails
  );

  const { success, error: reviewError } = useSelector(
    (state: any) => state.createNewReview
  );

  // const { name } = data;

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

  const handleQuantityInc = () => {
    if (data.stock <= quantity) return;
    setQuantity((state) => state + 1);
  };
  const handleQuantityDec = () => {
    setQuantity((state) => state - 1);
  };
  const addToCardHandaler = () => {
    dispatch(addItemsToCard(id, quantity));
    alert.success("Item added to card");
  };

  useEffect(() => {
    ScrollTop();

    if (error) {
      alert.error(error);
      dispatch(getProductDetailsErrorClear());
    }

    if (reviewError) {
      alert.error(reviewError);
      dispatch(createReviewClearError());
    }

    if (success) {
      alert.success("Review Submitted Successfully");
      dispatch(createReviewReset());
    }

    dispatch(getProductDetails(id));
  }, [dispatch, id, error, alert, reviewError, success]);

  // console.log("data?.image[0]", data);

  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <Box sx={{ overflow: "hidden" }}>
            <HeaderTwo />
            <div>
              <ProductDetailsWrapper>
                <Box>
                  <Container maxWidth="lg">
                    <Box>
                      <Grid container>
                        <Grid item xs={12} md={7}>
                          <Box>
                            <Box>
                              {/* <Grid item xs={12} md={2}>
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
                              </Grid> */}
                              <Box>
                                {data && (
                                  <ThumbanalImage
                                    src={data?.url}
                                    alt="images"
                                  />
                                )}
                              </Box>
                            </Box>
                          </Box>
                        </Grid>
                        <Grid item xs={12} md={5}>
                          <Box>
                            <Typography
                              sx={{
                                color: "#27272E",
                                fontSize: "28px",
                                fontWeight: "500",
                                fontFamily: "Poppins",
                                marginTop: "20px",
                              }}
                            >
                              {data?.name}
                            </Typography>
                            <Box
                              sx={{
                                display: "flex",
                                alignItems: "center",
                                marginTop: "10px",
                              }}
                            >
                              <Box>
                                <Typography
                                  sx={{
                                    color: "#22C55E",
                                    border: "1px solid #22C55E",
                                    borderRadius: "6px",
                                    fontWeight: "500",
                                    fontSize: "18px",
                                    padding: "1px 10px",
                                    fontFamily: "Poppins",
                                  }}
                                >
                                  ${data?.price}
                                </Typography>
                              </Box>

                              <Box
                                sx={{ display: "flex", alignItems: "center" }}
                              >
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    color: "#777",
                                    marginLeft: "3px",
                                    display: "flex",
                                    alignItems: "center",
                                    marginRight: "6px",
                                    fontFamily: "Poppins",
                                  }}
                                >
                                  <i
                                    style={{
                                      color: "#FACC15",
                                      padding: "0 4px",
                                    }}
                                    className="ri-star-fill"
                                  ></i>
                                  {data?.ratings}
                                </Typography>
                                <Typography
                                  sx={{
                                    fontSize: "14px",
                                    color: "#0F172A",
                                    marginLeft: "3px",
                                    textDecoration: "underline",
                                    fontFamily: "Poppins",
                                  }}
                                >
                                  {data?.numOfReviews} reviews
                                </Typography>
                              </Box>
                            </Box>
                            <Typography
                              sx={{
                                color: "#22C55E",
                                borderRadius: "6px",
                                fontWeight: "500",
                                fontSize: "15px",
                                marginTop: "10px",
                                fontFamily: "Poppins",
                              }}
                            >
                              InStock: {data.stock}
                            </Typography>

                            <ProductColorPicker />
                            <ProductSizePicker />
                            <ProductDetailsController
                              {...{
                                handleQuantityDec,
                                handleQuantityInc,
                                quantity,
                                setQuantity,
                                addToCardHandaler,
                              }}
                            />
                            <ProductAccordion description={data.description} />
                            {isAuthenticated && (
                              <Button
                                onClick={() => setOpenAddReview(true)}
                                sx={{
                                  backgroundColor: "rgb(15,23,42,1)",
                                  boxShadow:
                                    "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
                                  color: "#fff",
                                  padding: "10px 25px",
                                  borderRadius: "40px",
                                  textTransform: "capitalize",
                                  fontFamily: "Poppins",
                                  fontWeight: "500",
                                  transition: "all 0.3s  ",
                                  marginBottom: "20px",
                                  ":hover": {
                                    transform: "scale(1.1)",
                                    backgroundColor: "#1E293B",
                                    transition: "all 0.3s  ",
                                  },
                                }}
                              >
                                Submit Review
                              </Button>
                            )}
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                    {/* <ProductReviews product={product} /> */}
                  </Container>
                </Box>
              </ProductDetailsWrapper>
              <Container maxWidth="lg">
                <ProductReviews {...{ id, data }} />
              </Container>
            </div>
          </Box>
          <AddReviewModal
            setOpenAddReview={setOpenAddReview}
            openAddReview={openAddReview}
            id={id}
            userId={user?._id}
          />
        </Fragment>
      )}
    </Fragment>
  );
};

export default ProductDetails;
