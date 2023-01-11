import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  styled,
  TextField,
  Typography,
} from "@mui/material";

import { Fragment, useState } from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { NavLink } from "react-router-dom";
import { textTransform } from "@mui/system";

const ForgotPasswordWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "300px",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <Fragment>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <ForgotPasswordWrapper>
            <span
              style={{
                width: "50px",
                height: "50px",
                display: "flex",
                borderRadius: "50%",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f6f7fb",
                marginBottom: "10px",
              }}
            >
              <i
                style={{ fontSize: "1.8rem", color: "#3A7FFD" }}
                className="ri-key-2-line"
              ></i>
            </span>
            <Typography
              sx={{
                color: "#333",
                fontSize: "23px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              Forgot password
            </Typography>

            <form style={{ width: "100%" }}>
              <TextField
                sx={{ width: "100%", marginBottom: "15px" }}
                id="standard-basic"
                label="Email"
                variant="standard"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Button
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "#3A7FFD",
                  color: "#fff",
                  width: "100%",
                  marginBottom: "10px",
                  ":hover": {
                    backgroundColor: "#3A7FFD",
                  },
                }}
              >
                Send
              </Button>
              <Box
                sx={{
                  display: "flex",
                  alignItem: "center",
                  justifyContent: "space-between",
                }}
              >
                <NavLink
                  to="/"
                  type="submit"
                  style={{
                    color: "#3A7FFD",
                    fontSize: "14px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  Not interested
                </NavLink>
                <NavLink
                  to="/login"
                  type="submit"
                  style={{
                    color: "#3A7FFD",
                    fontSize: "14px",
                    cursor: "pointer",
                    textDecoration: "underline",
                  }}
                >
                  I have Password
                </NavLink>
              </Box>
            </form>
          </ForgotPasswordWrapper>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ForgotPassword;
