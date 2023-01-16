import React, { Fragment, useEffect, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Button, styled, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import Filtering from "../components/Filtering/Filtering";
import Pagination from "react-js-pagination";
import MobileViewFiltering from "../components/Filtering/MobileModeFilteringView/MobileViewFiltering";
import HeaderTwo from "../components/Header/HeaderTwo";
import Product from "../components/Product/Product";
import { fetchAllProduct } from "../store/reducerSlice/getAllProductsSlice";
import { AppDispatch } from "../store/store";
import { ProductType } from "../components/Types/Types";
import "../style/Shop/Shop.css";
import { scrollBlock } from "../sharedFunction/ScrollBlock";
import { ScrollTop } from "../sharedFunction/ScrollTop";
import { sortFiltering, SortsStateType } from "../util/FilterOption";
import ShopSearchBar from "../components/Filtering/ShopSearchBar";
import { motion, AnimatePresence } from "framer-motion";
import {
  FilteringMenuAnimation,
  FilteringSearchBar,
} from "../components/framerMotion/framerMotion";
import ProductDetailsView from "../components/Product/ProductDetailsView";

const Paragraph = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  color: "#828A8B",
  fontWeight: "500",
  width: "50%",
  marginBottom: "10px",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
}));

const Shop = () => {
  const [isOpenDetails, seIsOpenDetails] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [priceRange, setPriceRange] = useState<number[]>([0, 2000]);
  const [categoryes, setCategoryes] = useState<string[]>([]);
  const [colors, setColors] = useState<string[]>([]);
  const [sizes, setSizes] = useState<string[]>([]);
  const [sorts, setSorts] = useState<SortsStateType>(sortFiltering[0]);
  const [selectAllCategory, setSelectAllCategory] = useState<string[]>([]);
  const [showShopSearchBar, setShowShopSearchBar] = useState(false);
  const [keyword, setKeyword] = useState("");
  const [showMobileFiltering, setShowMobileFiltering] =
    useState<boolean>(false);

  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useSelector((state: any) => state.products);
  const { products, resultPerPage, productsCount, filteredProductsCount } =
    data;

  const setCurrentPageNo = (e: any) => {
    setCurrentPage(e);
  };

  /* dispatch all data  */
  useEffect(() => {
    dispatch(
      fetchAllProduct(
        currentPage,
        categoryes,
        priceRange,
        sorts,
        colors,
        sizes,
        keyword
      )
    );
  }, [
    dispatch,
    currentPage,
    categoryes,
    priceRange,
    sorts,
    colors,
    sizes,
    keyword,
  ]);

  /* its working for make page always 
    scrollTop on page also when on modal
     make scroll block 
  */
  useEffect(() => {
    scrollBlock(showMobileFiltering);
    ScrollTop();
  }, [showMobileFiltering]);

  const handleResetFiltering = () => {
    setCategoryes([]);
    setColors([]);
    setSizes([]);
    setSorts(sortFiltering[0]);
    setPriceRange([0, 2000]);
    setKeyword("");
  };

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
        <HeaderTwo />
        <Box>
          <Box>
            <Container maxWidth="lg">
              <Box
                sx={{
                  padding: "30px 0",
                  marginBottom: "60px",
                  borderBottom: "1px solid #E2E8F0",
                }}
              >
                <Typography
                  sx={{
                    fontSize: "2.3rem",
                    color: "#0F172A",
                    fontWeight: "600",
                    marginBottom: "12px",
                  }}
                >
                  Man collection
                </Typography>
                <Paragraph>
                  We not only help you design exceptional products, but also
                  make it easy for you to share your designs with more
                  like-minded people.
                </Paragraph>
              </Box>
              <Box className="desktopViewFiltering">
                <Filtering
                  {...{
                    setPriceRange,
                    setCategoryes,
                    categoryes,
                    priceRange,
                    colors,
                    setColors,
                    sizes,
                    setSizes,
                    sorts,
                    setSorts,
                    selectAllCategory,
                    setSelectAllCategory,
                  }}
                />
              </Box>
              <Box className="mobileViewFiltering">
                <MobileViewFiltering
                  {...{
                    setPriceRange,
                    setCategoryes,
                    categoryes,
                    priceRange,
                    colors,
                    setColors,
                    sizes,
                    setSizes,
                    sorts,
                    setSorts,
                    selectAllCategory,
                    setSelectAllCategory,
                    showMobileFiltering,
                    setShowMobileFiltering,
                    handleResetFiltering,
                  }}
                />
              </Box>
              <Box
                sx={{
                  marginBottom: "20px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Button
                  onClick={handleResetFiltering}
                  sx={{
                    textTransform: "capitalize",
                    fontSize: "14px",
                    color: "#fff",
                    fontWeight: "500",
                    backgroundColor: "#22C55E",
                    borderRadius: "20px",
                    border: "1px solid  transparent",
                    marginRight: "20px",
                    ":hover": {
                      border: "1px solid #22C55E",
                      color: " #22C55E",
                      backgroundColor: "transparent",
                    },
                  }}
                >
                  Reset
                </Button>

                <ShopSearchBar
                  {...{
                    showShopSearchBar,
                    setShowShopSearchBar,
                    keyword,
                    setKeyword,
                  }}
                />
              </Box>
            </Container>
            <Container maxWidth="lg" sx={{ overflowX: "hidden" }}>
              <Grid container spacing={{ xs: 1, sm: 4, md: 3 }}>
                {products &&
                  products?.map((data: ProductType, index: number) => (
                    <Grid key={index} item lg={3} md={4} sm={6} xs={12}>
                      <Product
                        data={data}
                        isOpenDetails={isOpenDetails}
                        seIsOpenDetails={seIsOpenDetails}
                      />
                    </Grid>
                  ))}
              </Grid>
              {resultPerPage < filteredProductsCount && (
                <div className="paginationBox">
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
                </div>
              )}
            </Container>
            <ProductDetailsView
              {...{
                seIsOpenDetails,
                isOpenDetails,
              }}
            />
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default Shop;
