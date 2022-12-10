import { Box, styled, Typography } from "@mui/material";
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ProductController from "./ProductController";

const CardWrapper = styled(Box)(({ theme }) => ({}));

const Span = styled(Box)(({ theme }) => ({
  backgroundColor: "#F6F7FB",
  borderRadius: "9px",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  overflow: "hidden",
}));
const Image = styled("img")(({ theme }) => ({}));
const TypographyOfferPrice = styled(Box)(({ theme }) => ({
  color: "#292930",
  fontSize: "1.2rem",
  fontWeight: "600",
  marginRight: "10px",
}));

const TypographyOldPrice = styled(Box)(({ theme }) => ({
  color: "#d6d6d6",
  fontSize: "1.2rem",
  fontWeight: "600",
  textDecoration: "line-through",
  textDecorationThickness: "3px",
}));

const CardContent = styled(Box)(({ theme }) => ({
  marginTop: "20px",
  [theme.breakpoints.down("sm")]: {
    display: "flex",
    flexDirection: "column",
    justifyContent: " center",
    alignItems: "center",
  },
}));

const Button = styled("button")(({ theme }) => ({}));

const DiscountRange = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "25px",
  right: "-20px",
  background: "#3577f0",
  fontWeight: "700",
  color: "#fff",
  borderRadius: "4px",
  boxShadow: "0 8px 16px 0 rgb(53 119 240 / 30%)",
  lineHeight: 1,
  padding: "6px 10px 5px",
  fontSize: "12px",
}));

const Product = ({ menu }) => {
  const { image1, image2, name, price, discountPrice } = menu;
  const Color = ["#ff497c", "#ff8666", "#8d6abe"];
  const [activeColor, setActiveColor] = useState(Color[0]);

  return (
    <CardWrapper className="cardWrapper">
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          position: "relative",
        }}
      >
        <Span className="image_wrapper">
          <img className="beforeHover" src={image1} alt="product" />
          <img className="onHover" src={image2} alt="product" />
          <ProductController />
        </Span>
        <DiscountRange>20% off</DiscountRange>
        <CardContent>
          <Typography
            sx={{ color: "#777777", fontWeight: "600", marginBottom: "7px" }}
          >
            {name}
          </Typography>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "6px" }}
          >
            <TypographyOfferPrice>${discountPrice}</TypographyOfferPrice>
            <TypographyOldPrice>${price}</TypographyOldPrice>
          </Box>
          <Box>
            {Color.map((c, index) => (
              <Button
                key={index}
                className="color_rounded "
                onClick={() => setActiveColor(c)}
                sx={{
                  backgroundColor: `${c}`,
                  "::after": {
                    border: {
                      border: `1px solid ${
                        activeColor === c ? c : "transparent"
                      }`,
                    },
                  },
                }}
              ></Button>
            ))}
          </Box>
        </CardContent>
      </Box>
    </CardWrapper>
  );
};

export default Product;
