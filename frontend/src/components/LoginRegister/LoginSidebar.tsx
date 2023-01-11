import { Box, Backdrop, Button, Typography, styled } from "@mui/material";
import GoCreateAccount from "./GoCreateAccount";
import LoginSidebarHeader from "./LoginSidebarHeader";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login } from "../../store/reducerSlice/authSlice";
import { useEffect, useState } from "react";
import { AppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";

interface LoginSidebarProps {
  setShowLoginSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showLoginSideBar: boolean;
}

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

const LoginSidebar = ({
  setShowLoginSideBar,
  showLoginSideBar,
}: LoginSidebarProps) => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const dispatch = useDispatch<AppDispatch>();
  const { isAuthenticated, error } = useSelector((state: any) => state.user);
  const navigate = useNavigate();
  const alert = useAlert();

  const loginSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    setShowLoginSideBar(false);
    if (isAuthenticated) {
      alert.success("Login Success");
    }
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [isAuthenticated, alert, error, setShowLoginSideBar, dispatch]);

  return (
    <AnimatePresence>
      <Backdrop open={showLoginSideBar}>
        <motion.div
          animate={{
            width: showLoginSideBar ? "350px" : "0px",
            // x: isOpen ? 0 : -100,
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 10,
            },
          }}
          style={{
            position: "absolute",
            top: "0px",
            right: "0px",
            height: "100vh",
            backgroundColor: "#fff",
            boxShadow: "0px 4px 10px rgba(37, 47, 63, 0.1)",
            fontWeight: "500",
            zIndex: 99,
          }}
        >
          <Box>
            <LoginSidebarHeader setShowLoginSideBar={setShowLoginSideBar} />

            <form onSubmit={loginSubmit} style={{ padding: "20px" }}>
              <label
                style={{
                  color: "rgba(31,41,55,1)",
                  fontSize: "16px",
                  marginBottom: "2px",
                }}
                htmlFor="email"
              >
                Email Address
              </label>
              <Input
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                id="email"
                type="email"
              />
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
              <Input
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                id="password"
                type="password"
              />
              <Button
                type="submit"
                sx={{
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
                  ":hover": {
                    backgroundColor: "#111827d6",
                  },
                }}
              >
                Log in
              </Button>
            </form>

            <Box sx={{ padding: "0px 20px" }}>
              <Typography sx={{ fontSize: "14px", color: "#61A24A" }}>
                Forgot password?
              </Typography>
            </Box>

            <GoCreateAccount />
          </Box>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default LoginSidebar;
