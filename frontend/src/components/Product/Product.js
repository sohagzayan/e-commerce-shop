import { Box, Typography } from "@mui/material";
import { useState } from "react";
import ProductController from "./ProductController";
import image2 from "../../assets/product/product-01(2).png";
import {
  Button,
  CardContent,
  CardWrapper,
  DiscountRange,
  TypographyOfferPrice,
  TypographyOldPrice,
  Span,
} from "../../style/Product/Product";

const Product = ({ data, seIsOpenDetails, isOpenDetails }) => {
  const { name, price, discountPrice } = data;
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
          <img className="beforeHover" src={data?.image[0].url} alt="product" />
          <img className="onHover" src={image2} alt="product" />
          <ProductController seIsOpenDetails={seIsOpenDetails} />
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
