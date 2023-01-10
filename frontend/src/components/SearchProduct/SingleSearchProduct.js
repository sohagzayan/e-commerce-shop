import { Box, Backdrop, Typography, Button, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IProductData } from "../../util/Product";
import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { useNavigate } from "react-router-dom";

const ProductContentWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "left",
  width: "100%",
  marginTop: "5px",
}));

const SearchProductWrapper = styled(Box)(({ theme }) => ({
  marginBottom: "20px",
  padding: "10px",
  borderRadius: "6px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "left",
  alignItems: "left",
  cursor: "pointer",
}));

const SingleSearchProduct = ({ product, setIsOpenSearchProduct }) => {
  const navigate = useNavigate();
  return (
    <SearchProductWrapper onClick={() => navigate(`/details/${product._id}`)}>
      <img width="160px" src={product.image[0].url} alt="" />

      <ProductContentWrapper>
        <Box
          sx={{
            textAlign: "left",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginBottom: "2px",
            }}
          >
            <Typography
              sx={{
                fontSize: "12px",
                display: "flex",
                alignItems: "center",
                marginRight: "5px",
              }}
            >
              {" "}
              <i
                style={{ color: "#FFA800", fontSize: "17px" }}
                className="ri-star-s-fill"
              ></i>
              3.5
            </Typography>
            <Typography sx={{ fontSize: "12px", textDecoration: "underline" }}>
              133 Reviews
            </Typography>
          </Box>
          <Typography
            sx={{ fontSize: "16px", color: "#333", marginBottom: "2px" }}
          >
            {product.name}
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            ${product.price}
          </Typography>
        </Box>
      </ProductContentWrapper>
    </SearchProductWrapper>
  );
};

export default SingleSearchProduct;
