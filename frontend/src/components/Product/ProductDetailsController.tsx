import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";

const ProductDetailsController = () => {
  return (
    <>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#f6f7fb",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              marginRight: "20px",
            }}
          >
            <AddRoundedIcon sx={{ fontSize: "16px" }} />
          </Box>
          <Typography sx={{ fontSize: "20px" }}>23</Typography>
          <Box
            sx={{
              width: "32px",
              height: "32px",
              backgroundColor: "#f6f7fb",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              marginLeft: "20px",
            }}
          >
            <RemoveRoundedIcon sx={{ fontSize: "16px" }} />
          </Box>
        </Box>
        <Box>
          <Button
            sx={{
              backgroundColor: "#3577f0",
              color: "#fff",
              padding: "16px 38px",
              fontWeight: "600",
              width: "100%",
              transition: "all 0.3s  ",
              ":hover": {
                transform: "scale(1.1)",
                backgroundColor: "#3577f0",
                transition: "all 0.3s  ",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
        <Box
          sx={{
            border: "2px solid #CBD3D9",
            display: "inline-block",
            padding: "15px 16px 10px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          <FavoriteBorderRoundedIcon />
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailsController;
