import { Box, Typography } from "@mui/material";

const MyAccountRegister = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#fff",
          //   boxShadow: "10px 10px 10px #777",
          padding: "20px",
        }}
      >
        <Typography
          sx={{ fontSize: "18px", fontWeight: "500", marginBottom: "30px" }}
        >
          REGISTER
        </Typography>
        <form action="">
          <label htmlFor="username" style={{ fontSize: "13px" }}>
            Username <span style={{ color: "#E13227" }}>*</span>
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
            Email address <span style={{ color: "#E13227" }}>*</span>
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
            }}
          />
          <p
            style={{
              fontSize: "13px",
              color: "#777",
              marginTop: "10px",
              paddingBottom: "30px",
              borderBottom: "1px solid rgba(0,0,0,0.1)",
            }}
          >
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>
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
        </form>
      </Box>
    </>
  );
};

export default MyAccountRegister;
