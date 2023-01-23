import {
  Box,
  styled,
  Grid,
  Typography,
  Backdrop,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// import { ProductImage } from "../../util/Product";
import { Fragment, useEffect, useState } from "react";
import product1 from "../../assets/product/product-big-01.png";
import product2 from "../../assets/product/product-big-02.png";
import product3 from "../../assets/product/product-big-03.png";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarBorderRoundedIcon from "@mui/icons-material/StarBorderRounded";
import CheckRoundedIcon from "@mui/icons-material/CheckRounded";
import ProductColorPicker from "./ProductColorPicker";
import ProductSizePicker from "./ProductSizePicker";
import ProductDetailsController from "./ProductDetailsController";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AppDispatch } from "../../store/store";
import {
  getProductDetails,
  getProductDetailsErrorClear,
} from "../../store/reducerSlice/getProductDetailsSlice";
import Loading from "../Loading/Loading";

const ProductDetailsWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "1100px",
  width: "100%",
  height: "100%",
  maxHeight: "90vh",
  borderRadius: "10px",
  background: "#fff",
  overflowX: "hidden",
  overflowY: "scroll",
  boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
  fontWeight: "500",
  zIndex: 99,

  [theme.breakpoints.down("md")]: {
    // width: "100%",
  },
}));

const ThumbanalImage = styled("img")(({ theme }) => ({
  width: "491px",
  paddingRight: "45px",
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

interface DetailsProps {
  seIsOpenDetails: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenDetails: boolean;
}
const ProductDetailsView = ({
  seIsOpenDetails,
  isOpenDetails,
}: DetailsProps) => {
  const alert = useAlert();
  const dispatch = useDispatch<AppDispatch>();
  const ProductImage = [product1, product2, product3];
  const [activeImage, setActiveImage] = useState(ProductImage[0]);
  const theme = useTheme();
  const breakpoint = useMediaQuery(theme.breakpoints.down("md"));
  const [quantity, setQuantity] = useState(1);
  const handleQuantityInc = () => {
    setQuantity((state) => state + 1);
  };

  const handleQuantityDec = () => {
    setQuantity((state) => state - 1);
  };
  const addToCardHandaler = () => {};

  // const { loading, error, data } = useSelector(
  //   (state: any) => state.productDetails
  // );

  // useEffect(() => {
  //   if (error) {
  //     alert.error(error);
  //     dispatch(getProductDetailsErrorClear());
  //   }
  //   dispatch(getProductDetails(id));
  // }, [dispatch, id, error, alert]);

  return (
    <Fragment>
      <Fragment>
        {/* <Backdrop
            onClick={() => seIsOpenDetails(false)}
            open={true}
            sx={{
              zIndex: "99",
              backgroundColor: "#0a0a0a1f",
              cursor: "pointer",
            }}
          ></Backdrop> */}
        <AnimatePresence>
          <motion.div>
            <ProductDetailsWrapper className="productWrapper">
              <Box>
                <Box
                  onClick={() => seIsOpenDetails(false)}
                  sx={{
                    textAlign: "end",
                    borderBottom: "1px solid #dee2e6",
                    padding: "25px 20px",
                    cursor: "pointer",
                  }}
                >
                  <CloseIcon sx={{ fontSize: "15px", color: "#777" }} />
                </Box>
                <Box>
                  <Grid container>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ padding: "25px" }}>
                        <Box>
                          <Box>
                            <ThumbanalImage
                              // src={data.image[0].url}
                              alt="images"
                            />
                          </Box>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ padding: "25px" }}>
                        <Box
                          sx={{
                            display: "flex",
                            alignItems: "center",
                            borderBottom: "2px solid #f6f7fb",
                            paddingBottom: "15px",
                          }}
                        >
                          <StarRoundedIcon
                            style={{ color: "#FFDC60", fontSize: "18px" }}
                          />

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
                              {/* ${data?.price} */}
                            </Typography>
                          </Box>

                          <Box sx={{ display: "flex", alignItems: "center" }}>
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
                              {/* {data?.ratings} */}
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
                              {/* {data?.numOfReviews} reviews */}
                            </Typography>
                          </Box>
                        </Box>

                        <Typography sx={{ fontSize: "17px", color: "#333" }}>
                          {/* {data?.description} */}
                        </Typography>
                        <ProductColorPicker />
                        <ProductSizePicker />
                        <ProductDetailsController
                          {...{
                            quantity,
                            setQuantity,
                            handleQuantityDec,
                            handleQuantityInc,
                            addToCardHandaler,
                          }}
                        />
                      </Box>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </ProductDetailsWrapper>
          </motion.div>
        </AnimatePresence>
      </Fragment>
    </Fragment>
  );
};

export default ProductDetailsView;
