import "font-awesome/css/font-awesome.min.css";
import React, { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";
import About from "./pages/About";
import MyWishList from "./pages/MyWishList";
import MyAccount from "./pages/MyAccount";

function App() {
  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/my-account" element={<MyAccount />} />
        <Route path="/wishlist" element={<MyWishList />} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;

// exitBeforeEnter initial={false}
