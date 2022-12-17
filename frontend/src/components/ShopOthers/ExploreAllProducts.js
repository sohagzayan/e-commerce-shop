import React from "react";
import { Box, Typography, Container } from "@mui/material";
import BreadcrumbsLink from "./BreadcrumbsLink";
import ProductImage from "../../assets/product/product-45.png";
const ExploreAllProducts = () => {
  return (
    <Box sx={{ backgroundColor: "#f8f8f8", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <BreadcrumbsLink />
            <Typography
              sx={{
                fontSize: "2.7rem",
                fontWeight: "600",
                color: "#292930",
                paddingY: "20px",
              }}
            >
              Explore All Products
            </Typography>
          </Box>
          <Box>
            <img src={ProductImage} alt="product" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ExploreAllProducts;
