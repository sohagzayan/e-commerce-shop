import {
  Box,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import {
  resetPassword,
  resetPasswordClearError,
} from "../store/reducerSlice/resetPassword";
import { useNavigate, useParams } from "react-router-dom";
import { AppDispatch } from "../store/store";
import { Button } from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const ResetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const alert = useAlert();
  const { token } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { error, success, loading } = useSelector(
    (state: any) => state.resetPassword
  );

  const resetPasswordSubmit = (e: any) => {
    e.preventDefault();
    const myForm = new FormData();

    myForm.set("password", password);
    myForm.set("confirmPassword", confirmPassword);

    dispatch(resetPassword(token, myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(resetPasswordClearError());
    }
    if (success) {
      alert.success("Password Updated Successfully");
      navigate("/login");
    }
  }, [dispatch, error, alert, navigate, success]);

  return (
    <Fragment>
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItem: "center",
            justifyContent: "center",
            width: "350px",
            margin: "auto",
            height: "100vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
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
              Reset password
            </Typography>

            <form onSubmit={resetPasswordSubmit} style={{ width: "100%" }}>
              <FormControl
                sx={{ width: "100%", marginBottom: "15px" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-passwords">
                  Password
                </InputLabel>
                <Input
                  id="standard-adornment-passwords"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <FormControl
                sx={{ width: "100%", marginBottom: "15px" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Conform Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        // onMouseDown={handleMouseDownPassword}
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>

              <Button
                type="submit"
                sx={{
                  textTransform: "capitalize",
                  backgroundColor: "rgb(15,23,42,1)",
                  color: "#fff",
                  width: "100%",
                  padding: "10px 10px",
                  borderRadius: "30px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px",
                  ":hover": {
                    backgroundColor: "#1E293B",
                  },
                }}
              >
                Reset Passwords
              </Button>
            </form>
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ResetPassword;
