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
import { fetchAllProduct } from "../store/reducerSlice/getAllProductsSlice";
import WhyUs from "../components/Home/WhyUs";
import Footer from "../components/Home/Footer";
import WeeklyUpdate from "../components/Home/WeeklyUpdate";
import Fashion from "../components/Home/Fashion";
import DontMiss from "../components/Home/DontMiss";
import BrowseByCategory from "../components/Home/BrowseByCategory";

const Home = () => {
  useEffect(() => {
    ScrollTop();
  }, []);
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useSelector((state: any) => state.products);
  const { products } = data;
  // console.log("p", loading);

  useEffect(() => {
    dispatch(fetchAllProduct());
  }, [dispatch]);

  const alert = useAlert();
  return (
    <Fragment>
      <Fragment>
        <MetaData title="Home Page" />
        <Header />
        <Box sx={{ overflowX: "hidden" }}>
          <motion.div
          // initial={{ x: -200, opacity: 0 }}
          // animate={{ x: 0, opacity: 1 }}
          // exit={{ x: 0, opacity: 1 }}
          // transition={{ duration: 0.5, type: "tween" }}
          >
            {/* <Hero /> */}
            <HeroSlider />
            <BrowseByCategory />
            <DontMiss />
            <OurProduct products={products} loading={loading} />
          </motion.div>
          <WhyUs />
          <Fashion />
          <WeeklyUpdate />
          <Footer />
        </Box>
      </Fragment>
    </Fragment>
  );
};

export default Home;
