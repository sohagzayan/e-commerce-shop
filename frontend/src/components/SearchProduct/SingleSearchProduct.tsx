import { Box, Backdrop, Typography, Button, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IProductData } from "../../util/Product";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

interface ProductProps {
  product: IProductData;
}

const ProductContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    justifyContent: "start",
    alignItem: "start",
  },
}));

const ProductController = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  [theme.breakpoints.down("sm")]: {
    alignItems: "start",
    justifyContent: "start",
    flexDirection: "row",
    marginTop: "10px",
  },
}));

const ControllerButton = styled(Button)(({ theme }) => ({
  marginBottom: "10px",
  border: "1px solid #efefef",
  [theme.breakpoints.down("sm")]: {
    marginRight: "10px",
  },
}));

const ImageWrapper = styled(Box)(({ theme }) => ({
  marginRight: "30px",
  [theme.breakpoints.down("sm")]: {
    marginRight: "10px",
  },
}));

const SearchProductWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  border: "1px solid #f1f1f1",
  padding: "20px",
  borderRadius: "6px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px",
  },
}));

const SingleSearchProduct = ({ product }: ProductProps) => {
  return (
    <SearchProductWrapper>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", width: "100%" }}>
          <ImageWrapper>
            <img width="120px" src={product.image1} alt="" />
          </ImageWrapper>
          <ProductContentWrapper>
            <Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                <StarRateIcon
                  sx={{
                    color: "#FFA800",
                    fontSize: "17px",
                  }}
                />
                <StarRateIcon
                  sx={{
                    color: "#FFA800",
                    fontSize: "17px",
                  }}
                />
                <StarRateIcon
                  sx={{
                    color: "#FFA800",
                    fontSize: "17px",
                  }}
                />
                <StarRateIcon
                  sx={{
                    color: "#FFA800",
                    fontSize: "17px",
                  }}
                />
                <StarOutlineIcon
                  sx={{
                    color: "#FFA800",
                    fontSize: "17px",
                    marginRight: "5px",
                  }}
                />
                <Typography sx={{ fontSize: "12px" }}>100+ Reviews</Typography>
              </Box>
              <Typography
                sx={{ fontSize: "16px", color: "#777777", marginBottom: "8px" }}
              >
                {product.name}
              </Typography>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#292930",
                    fontWeight: "600",
                    paddingRight: "20px",
                  }}
                >
                  ${product.discountPercentage}
                </Typography>
                <Typography
                  sx={{
                    fontSize: "20px",
                    color: "#d6d6d6",
                    fontWeight: "600",
                    textDecoration: "line-through",
                  }}
                >
                  ${product.price}
                </Typography>
              </Box>
            </Box>

            <ProductController>
              <ControllerButton
                variant="outlined"
                sx={{ marginBottom: "10px" }}
              >
                <ShoppingCartOutlinedIcon
                  sx={{ fontSize: "18px", color: "#777" }}
                />
              </ControllerButton>
              <ControllerButton variant="outlined" sx={{}}>
                <FavoriteBorderOutlinedIcon
                  sx={{ fontSize: "18px", color: "#777" }}
                />
              </ControllerButton>
            </ProductController>
          </ProductContentWrapper>
        </Box>
      </Box>
    </SearchProductWrapper>
  );
};

export default SingleSearchProduct;
