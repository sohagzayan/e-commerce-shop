import { Fragment, useEffect } from "react";
import { useSelector } from "react-redux";
import {
  NavLink,
  Route,
  Navigate,
  Outlet,
  useNavigate,
} from "react-router-dom";
import ActionLoadingSpinner from "../components/Loading/ActionLoadingSpinner";

const PrivateRoutes = () => {
  const { loading, isAuthenticated, user } = useSelector(
    (state: any) => state.user
  );

  // console.log("isAuthenticated", isAuthenticated);
  return isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoutes;
