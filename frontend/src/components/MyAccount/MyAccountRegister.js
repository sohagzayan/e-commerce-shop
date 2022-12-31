import { Box, Button, TextField, Typography } from "@mui/material";

const MyAccountRegister = ({
  registerDataChange,
  registerSubmit,
  user,
  avatarPreview,
}) => {
  const { name, email, password } = user;
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
          sx={{
            fontSize: "24px",
            fontWeight: "600",
            marginBottom: "10px",
            color: "#292930",
          }}
        >
          I'm New Here
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
        <form action="" onSubmit={registerSubmit}>
          <TextField
            id="outlined-basic-signup-name"
            label="User Name"
            type="text"
            required
            name="name"
            value={name}
            onChange={registerDataChange}
            style={{
              width: "100%",
              height: "42px",
              outline: "none",
              fontSize: "14px",
              color: "#777",
              marginTop: "6px",
              marginBottom: "30px",
            }}
          />

          <TextField
            id="outlined-basic-signup-email"
            label="Email Address"
            type="email"
            required
            name="email"
            value={email}
            onChange={registerDataChange}
            style={{
              width: "100%",
              height: "42px",
              outline: "none",
              fontSize: "14px",
              color: "#777",
              marginTop: "6px",
              marginBottom: "30px",
            }}
          />

          <TextField
            id="outlined-basic-signup-password"
            label="Password"
            type="password"
            required
            name="password"
            value={password}
            onChange={registerDataChange}
            style={{
              width: "100%",
              height: "42px",
              outline: "none",
              fontSize: "14px",
              color: "#777",
              marginTop: "6px",
              marginBottom: "20px",
            }}
          />
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              marginTop: "20px",
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
            />
          </Box>
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
          <Button
            style={{
              width: "100%",
              backgroundColor: "#3577f0",
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
      </Box>
    </>
  );
};

export default MyAccountRegister;
