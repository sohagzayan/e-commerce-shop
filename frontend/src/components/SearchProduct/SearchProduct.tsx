import { Box, Backdrop, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import SearchProductHeader from "./SearchProductHeader";
import { productMenu } from "../../util/Product";
import SingleSearchProduct from "./SingleSearchProduct";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   fetchProduct,
//   searchProduct,
// } from "../../store/reducerSlice/getAllProductsSlice";
import { AppDispatch } from "../../store/store";
// import { getProduct, getSearchProduct } from "../../actions/productAction";

const SearchProductWrapper = styled(Box)(({ theme }) => ({
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  height: "575px",
  padding: "40px",
  maxHeight: "90vh",
  borderRadius: "10px",
  background: "#fff",
  overflowY: "auto",
  boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
  fontWeight: "500",
  [theme.breakpoints.down("md")]: {
    width: "90%",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "20px",
  },
}));

interface Props {
  isOpenSearchProduct: boolean;
  setIsOpenSearchProduct: React.Dispatch<React.SetStateAction<boolean>>;
}

const SearchProduct: React.FunctionComponent<Props> = (props) => {
  const { isOpenSearchProduct, setIsOpenSearchProduct } = props;
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  // const { searchResult } = useSelector((state: any) => state.products);

  // useEffect(() => {
  //   dispatch(searchProduct(keyword));
  // }, [dispatch, keyword]);

  return (
    <Backdrop open={isOpenSearchProduct}>
      <AnimatePresence>
        <motion.div
          animate={{
            scale: isOpenSearchProduct ? 1 : 0.6,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
        >
          <SearchProductWrapper>
            <Box
              onClick={() => setIsOpenSearchProduct(false)}
              sx={{
                backgroundColor: "#F6F7FB",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#777",
                position: "absolute",
                top: "10px",
                right: "30px",
                cursor: "pointer",
              }}
            >
              <CloseIcon />
            </Box>
            <Box>
              <Box
                style={{
                  width: "100%",
                  height: "50px",
                  position: "relative",
                  marginTop: "35px",
                }}
              >
                <SearchIcon
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "4%",
                    transform: "translate(-50%,-50%)",
                    color: "#777",
                    cursor: "pointer",
                  }}
                />
                <input
                  onChange={(e) => setKeyword(e.target.value)}
                  placeholder="Write Something...."
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: "6px",
                    border: "1px solid #f1f1f1",
                    padding: "5px 20px 5px 50px",
                    fontSize: "16px",
                    color: "#777",
                    outline: "none",
                  }}
                  value={keyword}
                  type="text"
                />
                {keyword.length && (
                  <CloseIcon
                    onClick={() => setKeyword("")}
                    sx={{
                      fontSize: "18px",
                      position: "absolute",
                      top: "50%",
                      right: "1%",
                      transform: "translate(-50%,-50%)",
                      color: "#777",
                      cursor: "pointer",
                    }}
                  />
                )}
              </Box>
              <SearchProductHeader />
              <Box>
                {/* {searchResult &&
                  searchResult?.map((product: any, index: number) => (
                    <SingleSearchProduct
                      setIsOpenSearchProduct={setIsOpenSearchProduct}
                      key={index}
                      product={product}
                    />
                  ))} */}
              </Box>
            </Box>
          </SearchProductWrapper>
        </motion.div>
      </AnimatePresence>
    </Backdrop>
  );
};

export default SearchProduct;
