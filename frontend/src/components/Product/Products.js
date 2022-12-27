import { useEffect, useState } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Filter from "../ProductFiltering/Filter";
import { productMenu } from "../../util/Product";
import Product from "./Product";
import ProductHeader from "./ProductHeader";
import MobileFilter from "../ProductFiltering/MobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";

const Products = () => {
  const [isOpenDetails, seIsOpenDetails] = useState(false);
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const { loading, error, products, productsCount } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Box sx={{ marginTop: "30px", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={{ sm: 4, md: 4, lg: 6 }}>
            <Grid item md={3} sx={{ display: matches ? "none" : "" }}>
              <Filter />
            </Grid>
            <Grid item md={9} xs={12}>
              <ProductHeader setIsOpen={setIsOpen} matches={matches} />
              <Box>
                <Grid container spacing={{ xs: 1, sm: 4, md: 3 }}>
                  {products &&
                    products?.map((data, index) => (
                      <Grid key={index} item lg={4} md={6} sm={6} xs={12}>
                        <Product
                          data={data}
                          isOpenDetails={isOpenDetails}
                          seIsOpenDetails={seIsOpenDetails}
                        />
                      </Grid>
                    ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <MobileFilter setIsOpen={setIsOpen} isOpen={isOpen} />
    </Box>
  );
};

export default Products;
