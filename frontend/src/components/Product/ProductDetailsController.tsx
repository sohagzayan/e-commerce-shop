import { Box, Typography, Button } from "@mui/material";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { useState } from "react";

interface Props {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
  handleQuantityDec: () => void;
  handleQuantityInc: () => void;
  addToCardHandaler: () => void;
}

const ProductDetailsController: React.FunctionComponent<Props> = (props) => {
  const {
    handleQuantityDec,
    handleQuantityInc,
    quantity,
    setQuantity,
    addToCardHandaler,
  } = props;
  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "30px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginRight: "20px",
            backgroundColor: "rgba(241,245,249,.7)",
            padding: "13px",
            borderRadius: "25px",
          }}
        >
          <Box
            onClick={handleQuantityInc}
            sx={{
              width: "35px",
              height: "35px",
              border: "1px solid #e5e7eb",
              backgroundColor: "#fff",
              cursor: "pointer",
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
          <Typography sx={{ fontSize: "20px" }}>{quantity}</Typography>
          <Box
            onClick={handleQuantityDec}
            sx={{
              width: "35px",
              height: "35px",
              border: "1px solid #e5e7eb",
              backgroundColor: quantity <= 1 ? "rgba(241,245,249,.7)" : "#fff",
              cursor: "pointer",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#000",
              marginLeft: "20px",
              pointerEvents: quantity <= 1 ? "none" : "",
            }}
          >
            <RemoveRoundedIcon sx={{ fontSize: "16px" }} />
          </Box>
        </Box>
        <Box sx={{ width: "100%" }}>
          <Button
            onClick={addToCardHandaler}
            sx={{
              backgroundColor: "rgb(15,23,42,1)",

              boxShadow:
                "rgba(17, 17, 26, 0.05) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
              color: "#fff",
              padding: "16px 38px",
              borderRadius: "40px",
              fontWeight: "600",
              width: "100%",
              transition: "all 0.3s  ",
              ":hover": {
                transform: "scale(1.1)",
                backgroundColor: "#1E293B",
                transition: "all 0.3s  ",
              },
            }}
          >
            Add to Cart
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ProductDetailsController;
