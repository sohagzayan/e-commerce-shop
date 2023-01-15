import { Box, Button, Divider, styled, Typography } from "@mui/material";
import { useState, useEffect, Fragment } from "react";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, NavLink, useNavigate } from "react-router-dom";
import HeaderTwo from "../components/Header/HeaderTwo";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import { ScrollTop } from "../sharedFunction/ScrollTop";
import { login } from "../store/reducerSlice/authSlice";
import { AppDispatch } from "../store/store";

const MyAccountLoginWrapper = styled(Box)(({ theme }) => ({
  padding: "20px 0",
  backgroundColor: "#fff",
  width: "40%",
  margin: "auto",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "100%",
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "90%",
  },
}));

const Input = styled("input")(({ theme }) => ({
  width: "100%",
  height: "2.75rem",
  outline: "none",
  color: "#777",
  marginTop: "6px",
  marginBottom: "20px",
  border: "1px solid rgba(229,231,235,1)",
  borderRadius: "1rem",
  padding: "0 20px",
  fontSize: "17px",
  ":focus": {
    border: "1px solid #7DD3FC",
  },
}));

const Login = () => {
  const alert = useAlert();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated } = useSelector((state: any) => state.user);
  const navigate = useNavigate();

  const loginSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

  useEffect(() => {
    ScrollTop();
    if (isAuthenticated) {
      navigate("/");
    }
  }, [isAuthenticated, navigate]);

  return (
    <Fragment>
      <Box sx={{ overflowX: "clip " }}>
        <HeaderTwo />
        <MyAccountLoginWrapper>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#292930",
              textAlign: "center",
            }}
          >
            Login
          </Typography>
          <SocialLogin />
          <Divider sx={{ padding: "10px 0", margin: "20px 0" }}>OR</Divider>

          <form action="" onSubmit={loginSubmit}>
            <label
              style={{
                color: "rgba(31,41,55,1)",
                fontSize: "17px",
                marginBottom: "2px",
              }}
              htmlFor="email"
            >
              Email Address
            </label>
            <Input
              autoComplete="email"
              id="email"
              type="email"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
            />
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <label
                style={{
                  color: "rgba(31,41,55,1)",
                  fontSize: "17px",
                  marginBottom: "2px",
                }}
                htmlFor="password"
              >
                Password
              </label>
              <NavLink
                to="/forgot-password"
                style={{
                  fontSize: "14px",
                  color: "#52A755",
                  cursor: "pointer",
                }}
              >
                Forgot password
              </NavLink>
            </Box>
            <Input
              autoComplete="password"
              id="password"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
              type="password"
            />

            <Button
              type="submit"
              style={{
                width: "100%",
                backgroundColor: "#111827",
                fontWeight: "600",
                fontSize: "15px",
                boxShadow:
                  "0 0 #0000,0 0 #0000,0 0 #0000,0 20px 25px -5px,rgba(0,0,0,.1),0 8px 10px -6px,rgba(0,0,0,.1)",
                textTransform: "capitalize",
                border: "none",
                color: "#fff",
                padding: "12px 20px",
                borderRadius: "6px",
              }}
            >
              Login
            </Button>

            <Box sx={{ textAlign: "center" }}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: "#111827",
                  fontWeight: "500",
                  marginTop: "10px",
                  textAlign: "center",
                }}
              >
                Already have an account?
                <NavLink
                  to="/register"
                  style={{
                    color: "#61A24A",
                    cursor: "pointer",
                    padding: "0 5px",
                  }}
                >
                  Create Account
                </NavLink>
              </Typography>
            </Box>
          </form>
        </MyAccountLoginWrapper>
      </Box>
    </Fragment>
  );
};

export default Login;
