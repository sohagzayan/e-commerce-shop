import HeaderTwo from "../components/Header/HeaderTwo";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import MyAccountRegister from "../components/MyAccount/MyAccountRegister";
import MyAccountLogin from "../components/MyAccount/MyAccountLogin";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { clearError, login, register } from "../store/reducerSlice/authSlice";
import { useAlert } from "react-alert";
import { Navigate, useNavigate } from "react-router-dom";
import { AppDispatch } from "../store/store";
// import { login, register } from "../actions/userAction";

const MyAccount = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { loading, isAuthenticated, error } = useSelector(
    (state: any) => state.user
  );

  const alert = useAlert();
  const navigate = useNavigate();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState<any>();
  const [avatarPreview, setAvatarPreview] = useState<any>("./profile.png");

  const { name, email, password } = user;

  const loginSubmit = (e: any) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
  };

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

  const [activeAction, setActiveAction] = useState(false);

  const menuAnimation = {
    hidden: {
      opacity: 0,
      y: 200,
      transition: { duration: 0.3 },
    },
    show: {
      opacity: 1,
      y: 100,
      transition: { duration: 0.3 },
    },
  };

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearError());
    }
  }, [dispatch, error, alert]);

  return (
    <>
      <HeaderTwo />
      <Box sx={{ marginTop: "40px" }}>
        <Container maxWidth="lg">
          <Box sx={{}}>
            <Grid container>
              <Grid item xs={12} md={6} sx={{}}>
                <AnimatePresence>
                  {activeAction ? (
                    <motion.div
                      variants={menuAnimation}
                      initial="hidden"
                      animate="show"
                      exit="hidden"
                    >
                      <MyAccountLogin
                        {...{
                          loginEmail,
                          setLoginEmail,
                          loginPassword,
                          setLoginPassword,
                          loginSubmit,
                          setActiveAction,
                        }}
                      />
                    </motion.div>
                  ) : (
                    <motion.div>
                      <MyAccountRegister
                        {...{
                          registerDataChange,
                          registerSubmit,
                          user,
                          avatarPreview,
                          setActiveAction,
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Grid>
              <Grid
                item
                xs={12}
                md={6}
                sx={{
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    width: "400px",
                    margin: "auto",
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#F0F9FF",
                      textTransform: "capitalize",
                      color: "#111827",
                      fontWeight: "500",
                      width: "100%",
                      padding: "8px  10px",
                      position: "relative",
                      marginBottom: "15px",
                    }}
                  >
                    Continue with Facebook
                    <i
                      style={{
                        position: "absolute",
                        color: "#3B5998",
                        fontSize: "22px",
                        top: "50%",
                        left: "6%",
                        transform: "translate(-50%, -50%)",
                      }}
                      className="ri-facebook-box-fill"
                    ></i>
                  </Button>
                  <Button
                    sx={{
                      backgroundColor: "#F0F9FF",
                      textTransform: "capitalize",
                      color: "#111827",
                      fontWeight: "500",
                      width: "100%",
                      padding: "8px  10px",
                      position: "relative",
                      marginBottom: "15px",
                    }}
                  >
                    Continue with Twitter
                    <i
                      style={{
                        position: "absolute",
                        fontSize: "22px",
                        top: "50%",
                        left: "6%",
                        transform: "translate(-50%, -50%)",
                      }}
                      className="ri-twitter-fill"
                    ></i>
                  </Button>

                  <Button
                    sx={{
                      backgroundColor: "#F0F9FF",
                      textTransform: "capitalize",
                      color: "#111827",
                      fontWeight: "500",
                      width: "100%",
                      padding: "8px  10px",
                      position: "relative",
                    }}
                  >
                    Continue with Google
                    <i
                      style={{
                        position: "absolute",
                        fontSize: "22px",
                        top: "50%",
                        left: "6%",
                        transform: "translate(-50%, -50%)",
                      }}
                      className="ri-google-fill"
                    ></i>
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default MyAccount;
