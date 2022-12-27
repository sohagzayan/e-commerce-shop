import { Box } from "@mui/material";
import ExploreAllProducts from "../components/ShopOthers/ExploreAllProducts";
import Products from "../components/Product/Products";
import { motion } from "framer-motion";
import BottomHeader from "../components/Header/HeaderOne";
import HeaderTwo from "../components/Header/HeaderTwo";
const Shop = () => {
  return (
    <>
      <HeaderTwo />
      <Box sx={{ overflowX: "hidden" }}>
        <motion.div
          initial={{ x: 200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, type: "tween" }}
        >
          <Box>
            <Box>
              <ExploreAllProducts />
              <Products />
            </Box>
          </Box>
        </motion.div>
      </Box>
    </>
  );
};

export default Shop;
