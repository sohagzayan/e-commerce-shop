import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  styled,
  TextField,
  Typography,
} from "@mui/material";

const MyAccountLoginWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

const MyAccountLogin = ({
  loginEmail,
  setLoginEmail,
  loginPassword,
  setLoginPassword,
  loginSubmit,
}) => {
  return (
    <MyAccountLoginWrapper>
      <Typography
        sx={{
          fontSize: "24px",
          fontWeight: "600",
          marginBottom: "10px",
          color: "#292930",
        }}
      >
        Sign in to eTrade.
      </Typography>
      <Typography
        sx={{
          fontSize: "13px",
          fontWeight: "600",
          marginBottom: "30px",
          color: "#999FAE",
        }}
      >
        Enter your detail below
      </Typography>
      <form action="" onSubmit={loginSubmit}>
        <TextField
          label="Your Email"
          id="filled-basic_email"
          type="email"
          onChange={(e) => setLoginEmail(e.target.value)}
          value={loginEmail}
          style={{
            width: "100%",
            height: "42px",
            // border: "1px solid rgba(0,0,0,0.1)",
            outline: "none",
            padding: "",
            fontSize: "14px",
            color: "#777",
            marginTop: "6px",
            marginBottom: "30px",
          }}
        />

        <TextField
          label="Your Password"
          id="filled-basic_password"
          onChange={(e) => setLoginPassword(e.target.value)}
          value={loginPassword}
          type="password"
          style={{
            width: "100%",
            fontSize: "14px",
            color: "#777",
            marginTop: "6px",
            marginBottom: "30px",
          }}
        />

        <Button
          type="submit"
          style={{
            width: "100%",
            backgroundColor: "#3577f0",
            border: "none",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
            cursor: "pointer",
            textTransform: "capitalize",
            fontWeight: "bold",
          }}
        >
          Sign In
        </Button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px 20px",
          }}
        >
          <Box sx={{}}>
            <FormControlLabel
              control={<Checkbox defaultChecked />}
              label="Remember me"
            />
          </Box>
          <Box>
            <Typography sx={{ fontSize: "14px", color: "#3577f0" }}>
              Lost your password?
            </Typography>
          </Box>
        </Box>
      </form>
    </MyAccountLoginWrapper>
  );
};

export default MyAccountLogin;
