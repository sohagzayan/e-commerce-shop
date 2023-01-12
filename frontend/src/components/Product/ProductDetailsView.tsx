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
import { useState } from "react";
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

  return (
    <Backdrop open={isOpenDetails} sx={{ zIndex: "99" }}>
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
                  <Grid item xs={12} md={7}>
                    <Box sx={{ padding: "25px" }}>
                      <Grid
                        container
                        direction={breakpoint ? "column-reverse" : "row"}
                      >
                        <Grid item xs={12} md={2}>
                          <Box
                            sx={{
                              marginTop: breakpoint ? "20px" : "0",
                            }}
                          >
                            {ProductImage.map((url, index) => (
                              <img
                                key={index}
                                onClick={() => setActiveImage(url)}
                                width="80px"
                                style={{
                                  marginBottom: "10px",
                                  borderRadius: "10px",
                                  cursor: "pointer",
                                  marginRight: breakpoint ? "20px" : "0",
                                }}
                                src={url}
                                alt=""
                              />
                            ))}
                          </Box>
                        </Grid>
                        <Grid item xs={10}>
                          <ThumbanalImage src={activeImage} alt="images" />
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
                        <StarRoundedIcon
                          style={{ color: "#FFDC60", fontSize: "18px" }}
                        />
                        <StarRoundedIcon
                          style={{ color: "#FFDC60", fontSize: "18px" }}
                        />
                        <StarRoundedIcon
                          style={{ color: "#FFDC60", fontSize: "18px" }}
                        />
                        <StarRoundedIcon
                          style={{ color: "#FFDC60", fontSize: "18px" }}
                        />
                        <StarBorderRoundedIcon
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
                      <Typography
                        sx={{
                          color: "#27272E",
                          fontSize: "28px",
                          fontWeight: "600",
                          marginTop: "20px",
                        }}
                      >
                        Serif Coffee Table
                      </Typography>
                      <Typography
                        sx={{
                          color: "#27272E",
                          fontSize: "25px",
                          fontWeight: "500",
                          marginTop: "12px",
                        }}
                      >
                        $155.00 - $255.00
                      </Typography>
                      <Box sx={{ marginTop: "20px", marginBottom: "20px" }}>
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
                              sx={{ fontSize: "18px", marginRight: "10px" }}
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
                              sx={{ fontSize: "18px", marginRight: "10px" }}
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
                              sx={{ fontSize: "18px", marginRight: "10px" }}
                            />
                            Sales 30% Off Use Code: MOTIVE30
                          </li>
                        </ul>
                      </Box>
                      <Typography sx={{ fontSize: "17px", color: "#333" }}>
                        In ornare lorem ut est dapibus, ut tincidunt nisi
                        pretium. Integer ante est, elementum eget magna.
                        Pellentesque sagittis dictum libero, eu dignissim
                        tellus.
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
    </Backdrop>
  );
};

export default ProductDetailsView;
