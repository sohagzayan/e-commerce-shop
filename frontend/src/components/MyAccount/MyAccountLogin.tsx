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

interface Props {
  loginEmail: string;
  setLoginEmail: React.Dispatch<React.SetStateAction<string>>;
  loginPassword: string;
  setLoginPassword: React.Dispatch<React.SetStateAction<string>>;
  setActiveAction: React.Dispatch<React.SetStateAction<boolean>>;
  loginSubmit: any;
}

const MyAccountLogin: React.FunctionComponent<Props> = (props) => {
  const {
    loginEmail,
    setLoginEmail,
    loginPassword,
    setLoginPassword,
    loginSubmit,
    setActiveAction,
  } = props;
  return (
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
          <span
            style={{ fontSize: "14px", color: "#52A755", cursor: "pointer" }}
          >
            Forgot password
          </span>
        </Box>
        <Input
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
            Already have an account?{" "}
            <span
              style={{ color: "#61A24A", cursor: "pointer" }}
              onClick={() => setActiveAction(false)}
            >
              Create Account
            </span>
          </Typography>
        </Box>
      </form>
    </MyAccountLoginWrapper>
  );
};

export default MyAccountLogin;
