import React from "react";
import { Box, styled } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#ff497c",
  boxShadow: "0 16px 32px 0 rgb(0 0 0 / 6%)",
  color: "#fff",
  border: "none",
  lineHeight: "39px",
  padding: " 0 18px",
  display: "block",
  borderRadius: "4px",
  fontWeight: "700",
  cursor: "pointer",
}));

const ProductControllerWrapper = styled(Box)(({ theme }) => ({}));

const Icon = styled(Box)(({ theme }) => ({
  width: "40px",
  height: "40px",
  lineHeight: "51px",
  borderRadius: "4px",
  backgroundColor: "#fff",
  textAlign: "center",
  boxShadow: "0 16px 32px 0 rgb(0 0 0 / 6%)",
  color: "#292930",
  fontSize: "12px",
}));

const ProductController = () => {
  return (
    <ProductControllerWrapper className="productCardWrapper">
      <Icon>
        <RemoveRedEyeOutlinedIcon sx={{ fontSize: "20px" }} />
      </Icon>
      <Button>Add to Card</Button>
      <Icon>
        <FavoriteBorderOutlinedIcon sx={{ fontSize: "20px" }} />
      </Icon>
    </ProductControllerWrapper>
  );
};

export default ProductController;
