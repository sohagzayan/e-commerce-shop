import HeaderTwo from "../components/Header/HeaderTwo";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import MyAccountRegister from "../components/MyAccount/MyAccountRegister";
import MyAccountLogin from "../components/MyAccount/MyAccountLogin";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import { login, register } from "../actions/userAction";

const MyAccount = () => {
  const dispatch = useDispatch();
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [avatar, setAvatar] = useState();
  const [avatarPreview, setAvatarPreview] = useState("./profile.png");

  const { name, email, password } = user;
  const loginSubmit = (e) => {
    e.preventDefault();
    dispatch(login(loginEmail, loginPassword));
    console.log("login from submit");
  };
  const registerSubmit = (e) => {
    e.preventDefault();
    const myForm = new FormData();
    myForm.set("name", name);
    myForm.set("email", email);
    myForm.set("password", password);
    myForm.set("avatar", avatar);
    console.log("singup from submit");
    dispatch(register(myForm));
  };

  const registerDataChange = (e) => {
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
  return (
    <>
      <HeaderTwo />
      <div className="myAccount">
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "60px 0",
          }}
        >
          <Typography variant="h2" sx={{ color: "#fff" }}>
            My account
          </Typography>
          <Typography sx={{ fontSize: ".8rem", color: "#fff" }}>
            HOME / MY ACCOUNT
          </Typography>
        </Box>
      </div>
      <Box sx={{ marginTop: "40px" }}>
        <Container maxWidth="lg">
          <Grid container>
            <Grid item xs={12} md={6}>
              <Box
                sx={{
                  borderRight: "1px solid rgba(0,0,0,0.105)",
                  minHeight: "100%",
                }}
              >
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
                        }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Box>
            </Grid>
            <Grid item md={6} xs={12}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  padding: "20px",
                }}
              >
                <Typography sx={{ fontSize: "1.5rem" }}>LOGIN</Typography>
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  Registering for this site allows you to access your order
                  status and history. Just fill in the fields below, and we'll
                  get a new account set up for you in no time. We will only ask
                  you for information necessary to make the purchase process
                  faster and easier.
                </Typography>
                <Button
                  onClick={() => setActiveAction((state) => !state)}
                  style={{
                    backgroundColor: "#f7f7f7",
                    color: "#333",
                    padding: "12px 30px",
                    border: "none",
                    fontSize: "14px",
                    fontWeight: "600",
                    marginTop: "30px",
                    textTransform: "capitalize",
                    cursor: "pointer",
                  }}
                >
                  {activeAction ? "Register" : "Login"}
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyAccount;
