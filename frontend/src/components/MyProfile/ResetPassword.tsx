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
import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  userPasswordUpdate,
  userPasswordUpdateTreeReset,
  userPasswordUpdateTreeResetError,
} from "../../store/reducerSlice/forgotPasswordSlice";
import { AppDispatch } from "../../store/store";
import { useAlert } from "react-alert";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate, useNavigate } from "react-router-dom";

const ForgotPasswordWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  width: "40%",
  margin: "auto",
  [theme.breakpoints.down("md")]: {
    width: "60%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));

const InputField = styled(TextField)(({ theme }) => ({
  padding: "0px",
  height: "30px",
  width: "100%",
  marginBottom: "30px",
}));

const Icon = styled("i")(({ theme }) => ({}));

const ResetPassword = () => {
  const dispatch = useDispatch<AppDispatch>();
  const alert = useAlert();
  const navigate = useNavigate();
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { error, isUpdated, loading } = useSelector(
    (state: any) => state.updatePassword
  );

  const updatePasswordSubmit = (e: any) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("oldPassword", oldPassword);
    myForm.set("newPassword", newPassword);
    myForm.set("confirmPassword", confirmPassword);
    dispatch(userPasswordUpdate(myForm));
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(userPasswordUpdateTreeResetError());
    }

    if (isUpdated) {
      alert.success("Profile Updated Successfully");
      dispatch(userPasswordUpdateTreeReset());
      navigate("/profile");
    }
  }, [dispatch, error, alert, isUpdated, navigate]);

  return (
    <Fragment>
      <Box>
        <Box>
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

            <form onSubmit={updatePasswordSubmit} style={{ width: "100%" }}>
              <FormControl
                sx={{ width: "100%", marginBottom: "15px" }}
                variant="standard"
              >
                <InputLabel htmlFor="standard-adornment-password">
                  Old Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
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
                  New Password
                </InputLabel>
                <Input
                  id="standard-adornment-password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
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
                sx={{ width: "100%", marginBottom: "30px" }}
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
                  backgroundColor: "#3A7FFD",
                  color: "#fff",
                  width: "100%",
                  ":hover": {
                    backgroundColor: "#3A7FFD",
                  },
                }}
              >
                Reset Password
              </Button>
            </form>
          </ForgotPasswordWrapper>
        </Box>
      </Box>
    </Fragment>
  );
};

export default ResetPassword;
