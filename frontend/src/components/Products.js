import React from "react";
import {
  Box,
  Container,
  Grid,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Filter from "./Filter";
import { productMenu } from "../util/Product";
import Product from "./Product";
const OurProductWraper = styled(Box)(({ theme }) => ({}));

const Products = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ marginTop: "30px", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={{ sm: 4, md: 4, lg: 6 }}>
            <Grid item md={3} sx={{ display: matches ? "none" : "" }}>
              <Filter />
            </Grid>

            <Grid item md={9} xs={12}>
              <Box>
                <Grid container spacing={{ xs: 1, sm: 4, md: 3 }}>
                  {productMenu?.map((menu, index) => (
                    <Grid item lg={4} md={6} sm={6} xs={12}>
                      <Product key={index} menu={menu} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Products;
