import { Box, Button, Divider } from "@mui/material";
import { Fragment } from "react";

const SocialLogin = () => {
  return (
    <Fragment>
      <Box>
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
    </Fragment>
  );
};

export default SocialLogin;
