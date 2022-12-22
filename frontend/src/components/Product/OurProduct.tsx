import { Container, Box, Typography, Grid } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import { productMenu } from "../../util/Product";
import Product from "./Product";
import { OurProductWraper, Span, Button } from "../../style/Product/OurProduct";

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
              <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
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
