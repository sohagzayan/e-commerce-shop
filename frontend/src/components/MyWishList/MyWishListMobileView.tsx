import { Box, Container, styled, Typography } from "@mui/material";
import { productMenu } from "../../util/Product";
import CloseIcon from "@mui/icons-material/Close";

const ButtonAddToCard = styled("button")(({ theme }) => ({
  border: "2px solid #efefef",
  padding: "10px 20px",
  backgroundColor: "transparent",
  borderRadius: "6px",
  fontSize: "14px",
  fontWeight: "600",
  transition: "all .3s ease-in",
  ":hover": {
    backgroundColor: "#0d6efd",
    color: "#fff",
    transition: "all .3s ease-in",
  },
}));

const MyWishListMobileView = () => {
  return (
    <Box>
      {productMenu.map((product, index) => (
        <Box key={index} sx={{ display: "flex", marginBottom: "30px" }}>
          <Box sx={{ marginRight: "30px" }}>
            <img width="80px" src={product.image1} alt="product" />
          </Box>
          <Box sx={{ width: "100%" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #eee",
                paddingBottom: "7px",
                marginBottom: "15px",
              }}
            >
              <Typography>{product.name}</Typography>

              <Box
                sx={{
                  backgroundColor: "#F6F7FB",
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CloseIcon sx={{ color: "#777", fontSize: "16px" }} />
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #eee",
                paddingBottom: "7px",
                marginBottom: "15px",
              }}
            >
              <Typography>Price:</Typography>

              <Box>
                <Typography sx={{ color: "#777", fontWeight: "600" }}>
                  ${product.price}.89
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottom: "2px solid #eee",
                paddingBottom: "7px",
                marginBottom: "15px",
              }}
            >
              <Typography>Status:</Typography>

              <Box>
                <Typography sx={{ color: "#777", fontWeight: "600" }}>
                  In Stock
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "right",
                borderBottom: "1px solid #eee",
                paddingBottom: "15px",
              }}
            >
              <ButtonAddToCard>Add to Cart</ButtonAddToCard>
            </Box>
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default MyWishListMobileView;
