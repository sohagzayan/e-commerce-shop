import { Container, styled, Box, Typography, Grid } from "@mui/material";
import React from "react";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { productMenu } from "../util/Product";
import Product from "./Product";

const OurProductWraper = styled(Box)(({ theme }) => ({}));

const Span = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  fontSize: "15px",
  fontWeight: "700",
  color: "#8C71DB",
  marginBottom: "10px",
}));

const Button = styled("button")(({ theme }) => ({
  backgroundColor: "#F6F7FB",
  color: "#777777",
  padding: "18px 50px",
  border: "none",
  fontWeight: "600",
  fontSize: "16px",
  borderRadius: "10px",
  cursor: "pointer",
}));

const OurProduct = () => {
  return (
    <OurProductWraper sx={{ overflow: "hidden" }}>
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
            sx={{
              fontSize: "2.2rem",
              fontWeight: "600",
              color: "#292930",
              marginBottom: "50px",
            }}
          >
            Explore our Products
          </Typography>
        </Box>
        <Box>
          <Grid container spacing={{ xs: 1, md: 3 }}>
            {productMenu?.map((menu, index) => (
              <Grid item lg={3} md={4} sm={6} xs={12}>
                <Product key={index} menu={menu} />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "50px" }}
        >
          <Button>View All Product</Button>
        </Box>
      </Container>
    </OurProductWraper>
  );
};

export default OurProduct;
