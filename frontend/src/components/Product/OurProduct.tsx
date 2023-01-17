import { Container, Box, Typography, Grid } from "@mui/material";
import ShoppingBasketOutlinedIcon from "@mui/icons-material/ShoppingBasketOutlined";
import Product from "./Product";
import { OurProductWraper, Span, Button } from "../../style/Product/OurProduct";
import ProductDetailsView from "./ProductDetailsView";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ProductType } from "../Types/Types";
import SkeletonProduct from "../LoadSkeleton/SkeletonProduct";
// import { getProduct } from "../../actions/productAction";

interface OurProductProps {
  products: ProductType[];
  loading?: boolean;
}

const OurProduct = ({ products, loading }: OurProductProps) => {
  const [isOpenDetails, seIsOpenDetails] = useState(false);

  return (
    <AnimatePresence>
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
              {loading
                ? [...Array(8)].map((e, index) => (
                    <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                      <SkeletonProduct />
                    </Grid>
                  ))
                : products &&
                  products?.map((data, index) => (
                    <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                      <Product
                        data={data}
                        seIsOpenDetails={seIsOpenDetails}
                        isOpenDetails={isOpenDetails}
                      />
                    </Grid>
                  ))}
            </Grid>
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginTop: "50px",
            }}
          >
            <Button>View All Product</Button>
          </Box>

          <motion.div>
            <ProductDetailsView
              isOpenDetails={isOpenDetails}
              seIsOpenDetails={seIsOpenDetails}
            />
          </motion.div>
        </Container>
      </OurProductWraper>
    </AnimatePresence>
  );
};

export default OurProduct;
