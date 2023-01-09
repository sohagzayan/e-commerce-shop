import "font-awesome/css/font-awesome.min.css";
import React, { Fragment, lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { AnimatePresence } from "framer-motion";
import About from "./pages/About";
import MyWishList from "./pages/MyWishList";
import ProductDetails from "./pages/ProductDetails";
import MyProfile from "./pages/MyProfile";
import { store } from "./store/store";
import { loadUser } from "./store/reducerSlice/authSlice";
import Protected from "./components/Routes/ProtectedRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";

function App() {
  const alert = useAlert();
  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.user
  );

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Fragment>
      <AnimatePresence exitBeforeEnter initial={false}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/details/:id" element={<ProductDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/wishlist" element={<MyWishList />} />
          <Route
            path="/my-profile"
            element={
              <Protected isAuthenticated={isAuthenticated}>
                <MyProfile />
              </Protected>
            }
          />
        </Routes>
      </AnimatePresence>
    </Fragment>
  );
}

export default App;

// exitBeforeEnter initial={false}
