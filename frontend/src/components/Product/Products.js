import { useEffect, useState } from "react";
import { Box, Container, Grid, useMediaQuery, useTheme } from "@mui/material";
import Filter from "../ProductFiltering/Filter";
import Product from "./Product";
import ProductHeader from "./ProductHeader";
import MobileFilter from "../ProductFiltering/MobileFilter";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../actions/productAction";
import Pagination from "react-js-pagination";
import "./Product.css";
import { filterColor, filterPrice } from "../../util/FilterOption";
import { ScrollTop } from "../../util/ScrollTop";

const Products = () => {
  const [isOpenDetails, seIsOpenDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [activeColor, setActiveColor] = useState(filterColor[0]);
  const [price, setPrice] = useState([0, 2000]);
  const [pCategory, setPCategory] = useState([]);
  const [pRating, setPRating] = useState("");
  const [activeExactPrice, setActiveExactPrice] = useState(filterPrice[0]);

  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const dispatch = useDispatch();
  const {
    loading,
    error,
    products,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);
  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  useEffect(() => {
    dispatch(
      getProduct(
        currentPage,
        price,
        pCategory,
        pRating,
        activeColor,
        activeExactPrice
      )
    );
    ScrollTop();
  }, [
    dispatch,
    currentPage,
    price,
    pCategory,
    pRating,
    activeColor,
    activeExactPrice,
  ]);

  /* Reset All Filtering */
  const ResetFiltering = () => {
    setActiveColor(filterColor[0]);
    setPrice([0, 2000]);
    setPCategory([]);
    setPRating("");
    setActiveExactPrice(filterPrice[0]);
  };

  return (
    <Box sx={{ marginTop: "30px", overflow: "hidden" }}>
      <Container maxWidth="lg">
        <Box>
          <Grid container spacing={{ sm: 4, md: 4, lg: 6 }}>
            <Grid item md={3} sx={{ display: matches ? "none" : "" }}>
              <Filter
                {...{
                  activeColor,
                  setActiveColor,
                  price,
                  setPrice,
                  pCategory,
                  setPCategory,
                  setPRating,
                  pRating,
                  setActiveExactPrice,
                  activeExactPrice,
                  ResetFiltering,
                }}
              />
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
                {resultPerPage < filteredProductsCount && (
                  <Box className="paginationBox">
                    <Pagination
                      activePage={currentPage}
                      itemsCountPerPage={resultPerPage}
                      totalItemsCount={productsCount}
                      onChange={setCurrentPageNo}
                      nextPageText="Next"
                      prevPageText="Prev"
                      firstPageText="1st"
                      lastPageText="Last"
                      itemClass="page-item"
                      linkClass="page-link"
                      activeClass="pageItemActive"
                      activeLinkClass="pageLinkActive"
                    />
                  </Box>
                )}
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
