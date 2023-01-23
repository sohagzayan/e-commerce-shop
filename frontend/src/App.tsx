import "font-awesome/css/font-awesome.min.css";
import React, { Fragment, lazy, Suspense, useEffect, useState } from "react";
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
import PrivateRoutes from "./Routes/PrivateRoutes";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { useSelector } from "react-redux";
import { useAlert } from "react-alert";
import MyProfileView from "./components/MyProfile/MyProfileView";
import MyProfileControll from "./components/MyProfile/MyProfileControll";
import MyOrders from "./components/MyProfile/MyOrders";
import Download from "./components/MyProfile/Download";
import UpdatePassword from "./components/MyProfile/UpdatePassword";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import "react-loading-skeleton/dist/skeleton.css";
import ShoppingCard from "./pages/ShoppingCard";
import ShippingInfo from "./pages/ShippingInfo";

import ConformOrder from "./pages/ConfirmOrder";
import axios from "axios";
import Payment from "./pages/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./pages/OrderSuccess";
import OrderDetails from "./pages/OrderDetails";
import LoadingSpinner from "./components/Loading/LoadingSpinner";
import Dashboard from "./components/admin/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import ComeIsSoon from "./components/ComeIsSoon/ComeIsSoon";
// const ShippingInfo = import("./pages/ShippingInfo")

function App() {
  const { user, isAuthenticated, loading } = useSelector(
    (state: any) => state.user
  );
  console.log("loading", loading);
  const [stripeApikey, setStripeApikey] = useState("");
  const alert = useAlert();

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");
    console.log(data);
    setStripeApikey(data.stripeApiKey);
  }

  useEffect(() => {
    store.dispatch(loadUser());
    getStripeApiKey();
  }, []);

  return (
    <Fragment>
      {loading ? (
        <LoadingSpinner />
      ) : (
        <AnimatePresence exitBeforeEnter initial={false}>
          <Elements stripe={loadStripe(stripeApikey)}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details/:id" element={<ProductDetails />} />
              <Route path="/about" element={<ComeIsSoon />} />
              <Route path="/contact" element={<ComeIsSoon />} />
              <Route path="/blog" element={<ComeIsSoon />} />
              <Route path="/shopping" element={<Shop />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route
                path="/password/reset/:token"
                element={<ResetPassword />}
              />
              <Route path="/card" element={<ShoppingCard />} />

              <Route element={<PrivateRoutes />}>
                <Route
                  element={<ShippingInfo />}
                  path="/shipping-information"
                />
              </Route>

              <Route element={<PrivateRoutes />}>
                <Route path="/confirm-order" element={<ConformOrder />} />
              </Route>
              <Route element={<PrivateRoutes />}>
                <Route path="/payment-conform" element={<Payment />} />
              </Route>

              <Route path="/admin/dashboard" element={<Dashboard />} />

              <Route path="/success" element={<OrderSuccess />} />

              <Route path="/order/:id" element={<OrderDetails />} />

              <Route path="/wishlist" element={<MyWishList />} />
              <Route element={<PrivateRoutes />}>
                <Route path="/account" element={<MyProfile />}>
                  <Route index={true} element={<MyProfileControll />} />
                  <Route path="reset-password" element={<UpdatePassword />} />
                  <Route path="order" element={<MyOrders />} />
                  <Route path="download" element={<Download />} />
                </Route>
              </Route>
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Elements>
        </AnimatePresence>
      )}
    </Fragment>
  );
}

export default App;

// exitBeforeEnter initial={false}
