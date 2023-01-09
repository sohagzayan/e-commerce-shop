import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Protected = ({ isAuthenticated, children }: any) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      console.log("its me");
      return navigate("/login");
    }
  }, [isAuthenticated, navigate]);

  return children;
};

export default Protected;
