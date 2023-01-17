import {
  Box,
  Backdrop,
  Typography,
  Button,
  styled,
  Skeleton,
} from "@mui/material";
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

const SkeletonProductSmall = () => {
  const navigate = useNavigate();
  return (
    <SearchProductWrapper>
      {/* <img width="160px" src={product.image[0].url} alt="" /> */}
      <Box>
        <Skeleton
          variant="rectangular"
          width={160}
          height={150}
          sx={{ borderRadius: "8px" }}
        />
      </Box>

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
            <Skeleton
              variant="rectangular"
              width={150}
              height={20}
              sx={{ borderRadius: "8px" }}
            />
          </Box>
          <Typography
            sx={{ fontSize: "16px", color: "#333", marginBottom: "2px" }}
          >
            <Skeleton
              variant="rectangular"
              width="100%"
              height={20}
              sx={{ borderRadius: "8px" }}
            />
          </Typography>

          <Typography
            sx={{
              fontSize: "15px",
              color: "#333",
              fontWeight: "600",
            }}
          >
            <Skeleton
              variant="rectangular"
              width={40}
              height={20}
              sx={{ borderRadius: "8px" }}
            />
          </Typography>
        </Box>
      </ProductContentWrapper>
    </SearchProductWrapper>
  );
};

export default SkeletonProductSmall;
