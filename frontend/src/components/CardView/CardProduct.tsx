import React, { useEffect, useState } from "react";
import { Box, Typography } from "@mui/material";
import { IProductData } from "../../util/Product";
import GradeIcon from "@mui/icons-material/Grade";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CloseIcon from "@mui/icons-material/Close";

interface CardProductProps {
  product: IProductData;
}

const CardProduct = ({ product }: CardProductProps) => {
  const [quentity, setQuentity] = useState(10);
  console.log(product);
  return (
    <Box sx={{ marginBottom: "25px", marginTop: "25px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box sx={{ position: "relative" }}>
            <img width="100px" src={product.image1} alt="product" />
            <Box
              sx={{
                position: "absolute",
                left: "-10px",
                top: "-10px",
                backgroundColor: "#f6f7fb",
                borderRadius: "50%",
                border: "3px solid #fff",
                width: "30px",
                height: "30px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CloseIcon sx={{ fontSize: "17px" }} />
            </Box>
          </Box>
          <Box sx={{ marginLeft: "30px" }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <GradeIcon
                sx={{ color: "#FFDC60", fontSize: "16px", marginRight: "1px" }}
              />
              <GradeIcon
                sx={{ color: "#FFDC60", fontSize: "16px", marginRight: "1px" }}
              />
              <GradeIcon
                sx={{ color: "#FFDC60", fontSize: "16px", marginRight: "1px" }}
              />
              <GradeIcon
                sx={{ color: "#FFDC60", fontSize: "16px", marginRight: "1px" }}
              />
              <GradeIcon
                sx={{ color: "#FFDC60", fontSize: "16px", marginRight: "1px" }}
              />
              <Typography sx={{ fontSize: "13px" }}>(64)</Typography>
            </Box>
            <Typography
              sx={{ marginBottom: "10px", fontSize: "16px", fontWeight: "600" }}
            >
              {product.name}
            </Typography>
            <Typography sx={{ fontSize: "18px" }}>${product.price}</Typography>
          </Box>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Box
            onClick={() => setQuentity((state) => state - 1)}
            sx={{
              backgroundColor: "#f6f7fb",
              borderRadius: "50%",
              border: "3px solid #fff",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <RemoveIcon sx={{ cursor: "pointer", fontSize: "17px" }} />
          </Box>
          <Typography
            variant="h6"
            sx={{ marginX: "5px", fontSize: "15px", fontWeight: "600" }}
          >
            {quentity}
          </Typography>
          <Box
            onClick={() => setQuentity((state) => state + 1)}
            sx={{
              backgroundColor: "#f6f7fb",
              borderRadius: "50%",
              border: "3px solid #fff",
              width: "30px",
              height: "30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AddIcon sx={{ cursor: "pointer", fontSize: "17px" }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CardProduct;
