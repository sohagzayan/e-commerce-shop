import { Box } from "@mui/material";
import OurProduct from "../components/Product/OurProduct";
import { motion } from "framer-motion";
import Header from "../components/Header/HeaderOne";
import HeroSlider from "../components/HomeOthers/HeroSlider";
import MetaData from "../util/MetaData";
import { Fragment, useEffect } from "react";
import { ScrollTop } from "../sharedFunction/ScrollTop";
import Loading from "../components/Loading/Loading";
// import { clearErrors, getProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { AppDispatch } from "../store/store";
import { fetchProduct } from "../store/productsSlice";

const Home = () => {
  useEffect(() => {
    ScrollTop();
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: any) => state.products);
  const { products } = data;
  // console.log("p", loading);

  useEffect(() => {
    dispatch(fetchProduct());
  }, [dispatch]);

  const alert = useAlert();
  return (
    <Fragment>
      {loading ? (
        <Loading />
      ) : (
        <Fragment>
          <MetaData title="Home Page Is Working" />
          <Header />
          <Box sx={{ overflowX: "hidden" }}>
            <motion.div
              initial={{ x: -200, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, type: "tween" }}
            >
              {/* <Hero /> */}
              <HeroSlider />
              <OurProduct products={products} />
            </motion.div>
          </Box>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
