import {
  Box,
  Button,
  Divider,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAlert } from "react-alert";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../store/store";
import { Fragment, useEffect, useState } from "react";
import { register } from "../store/reducerSlice/authSlice";
import HeaderTwo from "../components/Header/HeaderTwo";
import SocialLogin from "../components/SocialLogin/SocialLogin";
import { ScrollTop } from "../sharedFunction/ScrollTop";

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

const Register = () => {
  const [avatarPreview, setAvatarPreview] = useState<any>("./profile.png");
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [avatar, setAvatar] = useState<any>();
  const alert = useAlert();

  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.user
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const { name, email, password } = user;

  const registerSubmit = (e: any) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    console.log("myForm", myForm);
    dispatch(register(myForm));
  };

  const registerDataChange = (e: any) => {
    if (e.target.name === "avatar") {
      const reader = new FileReader();
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    } else {
      setUser({ ...user, [e.target.name]: e.target.value });
    }
  };

  useEffect(() => {
    ScrollTop();
  }, []);

  return (
    <Fragment>
      <HeaderTwo />
      <MyAccountLoginWrapper>
        <Box>
          <Typography
            sx={{
              fontSize: "3rem",
              fontWeight: "600",
              marginBottom: "20px",
              color: "#292930",
              textAlign: "center",
            }}
          >
            Signup
          </Typography>
          <SocialLogin />
          <Divider sx={{ padding: "10px 0", margin: "20px 0" }}>OR</Divider>
          <form action="" onSubmit={registerSubmit}>
            <label
              style={{
                color: "rgba(31,41,55,1)",
                fontSize: "17px",
                marginBottom: "2px",
              }}
              htmlFor="name"
            >
              Name
            </label>
            <Input
              id="name"
              type="text"
              required
              name="name"
              value={name}
              onChange={registerDataChange}
            />
            <label
              style={{
                color: "rgba(31,41,55,1)",
                fontSize: "17px",
                marginBottom: "2px",
              }}
              htmlFor="email"
            >
              Email address
            </label>
            <Input
              id="email"
              type="email"
              required
              name="email"
              value={email}
              placeholder="example@example.com"
              onChange={registerDataChange}
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
              id="password"
              type="password"
              required
              name="password"
              value={password}
              onChange={registerDataChange}
            />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "10px",
                marginBottom: "20px",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <img
                width="50px"
                style={{ marginRight: "30px" }}
                src={avatarPreview}
                alt="faceicon"
              />
              <input
                className="avatar-upload"
                type="file"
                name="avatar"
                accept="image/*"
                onChange={registerDataChange}
                required
              />
            </Box>

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
              Create Account
            </Button>
          </form>
          <Box>
            <Typography
              sx={{
                fontSize: "16px",
                color: "#111827",
                fontWeight: "500",
                marginTop: "10px",
                textAlign: "center",
              }}
            >
              Already have an account?{" "}
              <NavLink
                to="/login"
                style={{ color: "#61A24A", cursor: "pointer" }}
              >
                login here
              </NavLink>
            </Typography>
          </Box>
        </Box>
      </MyAccountLoginWrapper>
    </Fragment>
  );
};

export default Register;
