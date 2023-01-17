import {
  Box,
  Backdrop,
  styled,
  Grid,
  Container,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SearchProductHeader from "./SearchProductHeader";
import { productMenu } from "../../util/Product";
import SingleSearchProduct from "./SingleSearchProduct";
import { motion, AnimatePresence } from "framer-motion";
import { Fragment, useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProduct,
//   searchProduct,
// } from "../../store/reducerSlice/getAllProductsSlice";
import { AppDispatch } from "../../store/store";
import { startSearchProduct } from "../../store/reducerSlice/productSearchSlice";
import SkeletonProductSmall from "../LoadSkeleton/SkeletonProductSmall";
// import { getProduct, getSearchProduct } from "../../actions/productAction";

const SearchProductWrapper = styled(Box)(({ theme }) => ({}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  height: "100%",
  fontWeight: "600",
  border: "1px solid #f1f1f1",
  padding: "0 20px",
  color: "#333",
  outline: "none",
  textAlign: "center",
  fontSize: "30px",
  "::placeholder": {
    color: "#333",
  },
}));

interface Props {
  isOpenSearchProduct: boolean;
  setIsOpenSearchProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchProduct: React.FunctionComponent<Props> = (props) => {
  const { isOpenSearchProduct, setIsOpenSearchProduct } = props;
  const inputElement = useRef<HTMLInputElement>(null);
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading, error } = useSelector(
    (state: any) => state.searchProduct
  );

  useEffect(() => {
    dispatch(startSearchProduct(keyword));
  }, [dispatch, keyword]);

  return (
    <Fragment>
      <Backdrop open={isOpenSearchProduct}>
        <AnimatePresence>
          <motion.div
            animate={{
              y: isOpenSearchProduct ? 0 : 200,
              transition: {
                duration: 0.5,
                type: "spring",
              },
            }}
            exit={{ y: 0 }}
            style={{
              position: "fixed",
              left: "0",
              bottom: "0",
              width: "100%",
              height: "575px",
              // padding: "40px",
              maxHeight: "90vh",
              background: "#fff",
              overflowY: "auto",
              boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
              fontWeight: "500",
            }}
          >
            <SearchProductWrapper>
              <Box>
                <Box
                  style={{
                    width: "100%",
                    height: "100px",
                    position: "sticky",
                    top: 0,
                    left: 0,
                    backgroundColor: "#fff",
                    zIndex: 10,

                    // marginTop: "35px",
                  }}
                >
                  <Input
                    ref={inputElement}
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder="Search for products"
                    value={keyword}
                    type="text"
                  />
                  <span
                    onClick={() => setIsOpenSearchProduct(false)}
                    style={{
                      position: "absolute",
                      top: "50%",
                      right: "0%",
                      transform: "translate(-50%, -50%)",
                      cursor: "pointer",
                    }}
                  >
                    <i
                      style={{ fontSize: "3rem" }}
                      className="ri-close-fill"
                    ></i>
                  </span>
                </Box>
                <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
                  {!keyword.length ? (
                    <Typography sx={{ textAlign: "center", fontSize: "14px" }}>
                      Start typing to see products you are looking for.
                    </Typography>
                  ) : (
                    <Grid container spacing={3}>
                      {loading
                        ? [...Array(4)].map((e, index) => (
                            <Grid item xs={6} sm={4} md={3} lg={3}>
                              <SkeletonProductSmall />
                            </Grid>
                          ))
                        : data.length &&
                          data?.map((product: any, index: number) => (
                            <Grid item xs={6} sm={4} md={3} lg={3}>
                              <SingleSearchProduct
                                setIsOpenSearchProduct={setIsOpenSearchProduct}
                                key={index}
                                product={product}
                              />
                            </Grid>
                          ))}
                    </Grid>
                  )}
                </Container>
              </Box>
            </SearchProductWrapper>
          </motion.div>
        </AnimatePresence>
      </Backdrop>
    </Fragment>
  );
};

export default SearchProduct;
