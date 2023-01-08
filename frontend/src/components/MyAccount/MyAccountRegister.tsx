import { Box, Button, styled, TextField, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

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
  registerDataChange: any;
  registerSubmit: any;
  user: any;
  avatarPreview: any;
  setActiveAction: any;
}

const MyAccountRegister: React.FunctionComponent<Props> = (props) => {
  const {
    registerDataChange,
    registerSubmit,
    user,
    avatarPreview,
    setActiveAction,
  } = props;
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
            fontSize: "3rem",
            fontWeight: "600",
            marginBottom: "20px",
            color: "#292930",
            textAlign: "center",
          }}
        >
          Signup
        </Typography>

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
            <span
              style={{ color: "#61A24A", cursor: "pointer" }}
              onClick={() => setActiveAction(true)}
            >
              Sign in
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MyAccountRegister;
