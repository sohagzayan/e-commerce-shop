import { Box, styled, Typography } from "@mui/material";

const MyAccountLoginWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: "20px",
  height: "500px",
  [theme.breakpoints.down("md")]: {
    height: "100%",
  },
}));

const MyAccountLogin = () => {
  return (
    <MyAccountLoginWrapper>
      <Typography
        sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "30px" }}
      >
        LOGIN
      </Typography>
      <form action="">
        <label htmlFor="username" style={{ fontSize: "13px" }}>
          Username or email address <span style={{ color: "#E13227" }}>*</span>
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            height: "42px",
            border: "1px solid rgba(0,0,0,0.1)",
            outline: "none",
            padding: "0 15px",
            fontSize: "14px",
            color: "#777",
            marginTop: "6px",
            marginBottom: "15px",
          }}
        />
        <label htmlFor="username" style={{ fontSize: "13px" }}>
          Password <span style={{ color: "#E13227" }}>*</span>
        </label>
        <input
          type="text"
          style={{
            width: "100%",
            height: "42px",
            border: "1px solid rgba(0,0,0,0.1)",
            outline: "none",
            padding: "0 15px",
            fontSize: "14px",
            color: "#777",
            marginTop: "6px",
            marginBottom: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            backgroundColor: "rgb(42,97,180)",
            border: "none",
            color: "#fff",
            padding: "12px 20px",
            borderRadius: "6px",
          }}
        >
          Register
        </button>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 20px",
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
      </form>
    </MyAccountLoginWrapper>
  );
};

export default MyAccountLogin;
