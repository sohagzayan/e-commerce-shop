import { Container, styled, Box, Typography } from "@mui/material";
import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";

const Span = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "700",
  color: "#8C71DB",
  marginBottom: "10px",
}));

const OurProduct = () => {
  return (
    <div>
      <Container maxWidth="lg">
        <Box sx={{ marginTop: "100px" }}>
          <Span>
            <ShoppingBasketOutlinedIcon
              sx={{
                marginRight: "10px",
                backgroundColor: "#8C71DB",
                padding: "3px",
                borderRadius: "30px",
                color: "#fff",
              }}
            />
            Our Products
          </Span>
          <Typography
            sx={{ fontSize: "2.2rem", fontWeight: "600", color: "#292930" }}
          >
            Explore our Products
          </Typography>
        </Box>
      </Container>
    </div>
  );
};

export default OurProduct;
