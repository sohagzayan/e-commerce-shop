import { Box, Backdrop, Button, Typography } from "@mui/material";
import GoCreateAccount from "./GoCreateAccount";
import LoginSidebarHeader from "./LoginSidebarHeader";
import { motion, AnimatePresence } from "framer-motion";

interface LoginSidebarProps {
  setShowLoginSideBar: React.Dispatch<React.SetStateAction<boolean>>;
  showLoginSideBar: boolean;
}

const LoginSidebar = ({
  setShowLoginSideBar,
  showLoginSideBar,
}: LoginSidebarProps) => {
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
          }}
        >
          <Box>
            <LoginSidebarHeader setShowLoginSideBar={setShowLoginSideBar} />

            <form action="" style={{ padding: "20px" }}>
              <label
                style={{ fontSize: "13px", fontWeight: "400" }}
                htmlFor="email"
              >
                Username or email address{" "}
                <span style={{ color: "#E01020" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                style={{
                  width: "100%",
                  padding: "13px 10px",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  border: "1px solid rgba(0,0,0,.1)",
                  color: "#777",
                  marginTop: "10px",
                  marginBottom: "20px",
                }}
              />
              <label
                style={{ fontSize: "13px", fontWeight: "400" }}
                htmlFor="email"
              >
                Password <span style={{ color: "#E01020" }}>*</span>
              </label>
              <input
                id="email"
                type="email"
                style={{
                  width: "100%",
                  padding: "13px 10px",
                  borderRadius: "6px",
                  outline: "none",
                  fontSize: "14px",
                  border: "1px solid rgba(0,0,0,.1)",
                  color: "#777",
                  marginTop: "6px",
                }}
              />
              <Button
                sx={{
                  width: "100%",
                  backgroundColor: "rgb(46, 107, 198)",
                  padding: "12px 20px",
                  color: "#fff",
                  fontWeight: "600",
                  cursor: "pointer",
                  marginTop: "20px",
                  ":hover": {
                    backgroundColor: "rgb(26, 93, 194)",
                  },
                }}
              >
                Log in
              </Button>
            </form>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 20px",
                borderBottom: "1px solid #e5e2e2",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <input
                  style={{ marginRight: "4px" }}
                  id="remember"
                  type="checkbox"
                />
                <label htmlFor="remember" style={{ fontSize: "13px" }}>
                  Remember me
                </label>
              </Box>
              <Box>
                <Typography sx={{ fontSize: "12px", color: "rgb(46,107,198)" }}>
                  Lost your password?
                </Typography>
              </Box>
            </Box>
            <GoCreateAccount />
          </Box>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
};

export default LoginSidebar;
