import "font-awesome/css/font-awesome.min.css";
import React, { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import MyWishList from "./pages/MyWishList";
import MyAccount from "./pages/MyAccount";
import ProductDetails from "./pages/ProductDetails";
import MyProfile from "./pages/MyProfile";
import { store } from "./store/store";
import { loadUser } from "./store/reducerSlice/authSlice";

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details/:id" element={<ProductDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/wishlist" element={<MyWishList />} />
        <Route path="/my-profile" element={<MyProfile />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

// exitBeforeEnter initial={false}
